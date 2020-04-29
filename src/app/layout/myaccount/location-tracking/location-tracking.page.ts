import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';
import { NavController, Platform } from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToasterService } from '../../../core/services/toaster.service';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { RouteStoppageModalPage } from '../../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

import { ModalService } from '../../../core/services/modal.service';
import { MenuController } from '@ionic/angular';

declare var google;
import { map } from 'rxjs/operators';
import { element } from '@angular/core/src/render3';
declare var window;
import { MatStepper } from '@angular/material/stepper';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-location-tracking',
  templateUrl: './location-tracking.page.html',
  styleUrls: ['./location-tracking.page.scss', '../../layout.page.scss'],
})
export class LocationTrackingPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('stepper') private myStepper: MatStepper;
  progress_bar: boolean = false;
  driver_current_lat;
  driver_current_lng;
  car_id;
  driver_marker;
  lat;
  lng;
  last_driver_postion;
  //driver_distance_from_next_destination;
  next_stoppage_list_array = [];
  next_stoppage_info;
  previous_stoppage_list_array = [];
  maphideMe;
  car_icon;
  ride_end;
  isTracking_resume = false;



  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
  distanceService = new google.maps.DistanceMatrixService;
  location_source;
  location_destination;
  ride_startTime;
  ride_endTime;
  already_exist_firebase;
  driver_distance_from_starting_point;
  driver_distance_from_ending_point
  DirectionsWaypoint = [];
  back_button_visible: boolean = true;
  locations: Observable<any>;
  locationsCollection: AngularFirestoreCollection<any>;
  arr = [];
  user = null;
  map: any;
  currentMapTrack = null;
  markers = [];
  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
  loc = [];
  watch: any;
  positionSubscription: Subscription;
  geoAddress: string;
  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  stoppage_list: any;
  start_location = '';
  end_location = '';
  car_type = '';
  route_id = '';
  driver_id = '';
  route_start_point;
  route_end_point;
  route_timing_id;

  constructor(
    public navCtrl: NavController,
    private plt: Platform,
    private geolocation: Geolocation,
    private storage: Storage,
    private backgroundGeolocation: BackgroundGeolocation,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private officePoolCarService: OfficePoolCarService,
    private insomnia: Insomnia,
    private barcodeScanner: BarcodeScanner,
    private toasterService: ToasterService,
    public alertController: AlertController,
    private authenticationService: AuthenticationService,
    public modalService: ModalService,
    private menuCtrl: MenuController,
    private androidPermissions: AndroidPermissions,
    private locationAccuracy: LocationAccuracy

  ) {

    //console.log('constructor')
    this.car_id = this.route.snapshot.params['car_id'];
    this.driver_id = this.route.snapshot.params['driver_id'];
    this.route_timing_id = this.route.snapshot.params['route_timing_id'];
    this.route_id = this.route.snapshot.params['route_master_id'];
    this.ride_end = false;
    this.getRideCarDetails();
    this.storage.get('USER_INFO').then((val) => {
      if (val) {
        //console.log(val);
        //this.refer_code = val.user_account_no+'-'+val.name;
        this.anonLogin(val.user_account_no + '-' + val.name + '-' + new Date());
      }
    });
    this.storage.get('isTracking').then((val) => {
      if (val) {
        //this.refer_code = val.user_account_no+'-'+val.name;
        this.isTracking = true;
      }
    });




  }
  public onStepChange(event: any): void {
    //console.log(event.selectedIndex);
    const stepId = this.myStepper._getStepLabelId(parseInt(event.selectedIndex) - 1);
    //console.log('stepId', stepId);
    const stepElement = document.getElementById(stepId);
    if (stepElement) {
      setTimeout(() => {
        stepElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }, 250);
    }
  }
  getRideCarDetails() {
    this.progress_bar = true;
    let request_data = {
      'type': 'my_car',
      'user_id': this.driver_id,
      'route_master_id': this.route_id,
      'route_timing_id': this.route_timing_id
    }
    this.officePoolCarService.todayRidesService(request_data).subscribe(
      element => {

        console.log('1', element);
        this.progress_bar = false;
        this.route_id = element.result.route_id;
        this.stoppage_list = element.result.stoppage_list;
        this.stoppage_list.forEach(stops => {
          this.next_stoppage_list_array.push(stops);
        });

        this.next_stoppage_info = this.next_stoppage_list_array[0];
        this.start_location = element.result.start_location;
        this.end_location = element.result.end_location;
        this.car_type = element.result.car_type;
        this.route_end_point = element.result.end_point_id;
        this.route_start_point = element.result.start_point_id;
        this.loadMap({ lat: parseFloat(element.result.start_lat), lng: parseFloat(element.result.start_long) },
          { lat: parseFloat(element.result.end_lat), lng: parseFloat(element.result.end_long) });
        element.result.stoppage_list_1.forEach(element => {
          let waypoint_location;
          waypoint_location = {
            location: { lat: parseFloat(element.location.lat), lng: parseFloat(element.location.lng) },
            stopover: element.stopover
          };

          this.DirectionsWaypoint.push(waypoint_location);
        });
        this.ride_startTime = parseFloat(element.result.start_end_time.start_time);
        this.ride_endTime = parseFloat(element.result.start_end_time.end_time);

        console.log('element:', element.result.drive_status);
        if (element.result.drive_status == '1') {
          this.isTracking_resume = true;

        }


      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.progress_bar = false;
        //this.toasterService.showToast(error.error.msg, 2000)
      }
    );



  }
  ngOnInit() {

    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      interval: 5000,
      distanceFilter: 30,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    };
    this.backgroundGeolocation.configure(config).then(() => {
      this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe(
        (location: BackgroundGeolocationResponse) => {
          console.log(location);
          this.driver_current_lat = location.latitude;
          this.driver_current_lng = location.longitude;
          this.update_driver_cordinated_to_firebase();
          this.get_next_stoppage_info();
          this.backgroundGeolocation.finish(); // FOR IOS ONLY
        });
    });



  }
  ionDidOpen() {
    this.menuCtrl.enable(false);
    console.log('ionViewDidEnter')
    this.plt.ready().then(() => {
      //this.loadHistoricRoutes();
    });
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter')
    //this.loadMap();

  }
  loadMap(location_source, location_destination) {
    // this.map = new google.maps.Map(this.mapElement.nativeElement, {
    //   center: { lat: -34.9011, lng: -56.1645 },
    //   zoom: 12,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP,
    //   // mapTypeControl: true,
    //   // streetViewControl: true,
    //   // fullscreenControl: true
    //   disableDefaultUI: true,
    //   tilt: 45,
    // });
    //var image = '/assets/svg/sos.svg'
    this.geolocation.getCurrentPosition().then(resp => {
      //console.log('resp', resp)
      let pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: pos,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        // tilt: 45,
      });

      this.driver_marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        icon: "http://tobuekalabya.com/carservice_manage/icon/car_top.png",
        title: 'you are here!',
        zoom: 17
        //animation: google.maps.Animation.DROP,
      });
      //marker.setAnimation(google.maps.Animation.BOUNCE);
      //this.markers.push(marker);
      //this.map.setCenter(pos);
      //this.map.setZoom(12);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.directionsDisplay.setMap(this.map);
    console.log('start_loc', this.start_location);
    this.location_source = location_source;
    this.location_destination = location_destination;
    this.calculateAndDisplayRoute();
  }

  calculateAndDisplayRoute() {
    const that = this;

    //console.log(this.DirectionsWaypoint);
    that.directionsService.route({
      origin: this.location_source, //origin 
      destination: this.location_destination, //destination
      travelMode: 'DRIVING',
      waypoints: this.DirectionsWaypoint,
    }, (response, status) => {
      //alert(1);
      if (status === 'OK') {

        that.directionsDisplay.setDirections(response);
        this.stoppage_list.forEach(element => {
          let waypoint_location_marker;
          let pos_marker = {
            lat: parseFloat(element.lat),
            lng: parseFloat(element.lng)
          };
          var infowindow = new google.maps.InfoWindow({
            content: String(element.location_name)
          });
          //console.log("Location:" ,element.location_name);
          waypoint_location_marker = new google.maps.Marker({
            position: pos_marker,
            map: this.map,
            icon: element.icon,
            //icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            title: 'you are here!',
            //animation: google.maps.Animation.DROP,
          });
        });


      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  anonLogin(user) {
    this.afAuth.auth.signInAnonymously().then(res => {
      this.locationsCollection = this.afs.collection(
        `locations/${user}/track`,
        ref => ref.orderBy('timestamp')
      );
      //load firebase data
      this.locations = this.locationsCollection.snapshotChanges().pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
      console.log('this.locations', this.locations)
      this.locations.subscribe(locations => {
        console.log('new location: ', locations);
        this.loc = locations;
        //this.updateMap(locations);
      })
    });
  }
  //Check if application having GPS access permission  
  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {

          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {

          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }
  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Show alert if user click on 'No Thanks'
              alert('you can not start your ride without GPS. Please enable this.')
            }
          );
      }
    });
  }
  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.startTracking()
      },
      error => alert('you can not start your ride without GPS. Please enable this.')
    );
  }
  startTracking() {
    this.isTracking_resume = false;
    let car_id = this.car_type + "-" + this.car_id;
    //console.log("car: ", car_id);
    this.afs.collection('locations').snapshotChanges().subscribe(data => {
      //this.driver_curent_live_location = 
      data.map(e => {
        if (e.payload.doc.id == car_id) {
          this.already_exist_firebase = true;
        }
      })
    });
    if (this.already_exist_firebase == true) {
      console.log('firebase entry exits')
      this.tracking_location();
    } else {
      this.create_tracking_inFirebase();
    }
  }

  create_tracking_inFirebase() {
    var driver_current_lat;
    var driver_current_lng;
    const that = this;
    this.geolocation.getCurrentPosition().then((resp) => {
      driver_current_lat = resp.coords.latitude;
      driver_current_lng = resp.coords.longitude;

      var driver_current_lat_1 = parseFloat(driver_current_lat);//parse float value of lat
      var driver_current_lng_1 = parseFloat(driver_current_lng);//parse float value of lng

      /////////////////////////////////////Distance/////////////////////////////

      this.distanceService.getDistanceMatrix({
        origins: [new google.maps.LatLng(driver_current_lat_1, driver_current_lng_1)],
        destinations: [this.location_source],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
      }, function (response, status) {
        if (status !== 'OK') {
          alert('Start distance matrix Error was: ' + status);
        } else {
          that.driver_distance_from_starting_point = parseFloat(response.rows[0].elements[0].distance.text); //driver distance from ride starting point

          let driver_distance_from_next_stoppage = response.rows[0].elements[0].distance.text.split(" ");
          var distance_checker;
          if (driver_distance_from_next_stoppage[1] == 'km') {
            distance_checker = 200;
          } else {
            distance_checker = 20000;
          }
          if (that.driver_distance_from_starting_point <= distance_checker) { //// should be 2
            this.back_button_visible = false;

            let date = new Date();

            // (date.getHours())*100)+date.getMinutes() //// Current time in a army time format
            //that.ride_startTime-15 // 15 min erly of ride time

            if ((that.ride_startTime - 1500) <= ((date.getHours()) * 100) + date.getMinutes()) { ////15 min
              console.log("ride time", (parseFloat(that.ride_startTime) - 1500));


              // that.geolocation.getCurrentPosition().then((resp) => {
              //   let record = {};

              //   record['lat'] = resp.coords.latitude;
              //   record['long'] = resp.coords.longitude;
              //   record['name'] = ""; //////car name
              //   let car_id = that.car_type + "-" + that.car_id;
              //   that.afs.collection('locations').doc(car_id).set(record); //////car id

              // }).catch((error) => {
              //   console.log('Error getting location', error);
              // });

              let record = {};

              record['lat'] = driver_current_lat_1;
              record['long'] = driver_current_lng_1;
              record['name'] = ""; //////car name
              record['time'] = ((date.getHours()) * 100) + date.getMinutes();
              record['date'] = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

              let car_id = that.car_type + "-" + that.car_id;
              that.afs.collection('locations').doc(car_id).set(record); //////car id


              that.tracking_location();


            } else {
              alert("Please Start the ride within time!");
            }

          } else {
            alert("The Driver must Start the ride from the Starting point of the route!");
          }

        }
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    //console.log(google.maps.LatLng(driver_current_lat, driver_current_lng));

  }

  tracking_location() {

    this.isTracking = true;

    this.storage.set('isTracking', true);
    this.back_button_visible = false;
    this.insomnia.keepAwake()
      .then(
        () => console.log('success'),
        () => console.log('error')
      );

    this.backgroundGeolocation.start();
    let options = {
      timeout: 5000,
      enableHighAccuracy: true
    };
    let point_nember = 1;
    this.trackedRoute = [];
    this.watch = this.geolocation.watchPosition(options)
      .subscribe((position) => {
        console.log('new position: ', position)
        if (position) {
          this.trackedRoute.push(
            {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              address: this.geoAddress,
              point_number: point_nember
            });
          point_nember++;
          this.driver_current_lat = position.coords.latitude;
          this.driver_current_lng = position.coords.longitude;
          let new_driver_location = new google.maps.LatLng(this.driver_current_lat, this.driver_current_lng);
          //console.log('new_driver_location', new_driver_location)
          this.get_next_stoppage_info();
          this.driver_marker.setPosition(new_driver_location);


          if (this.last_driver_postion != undefined) {
            //console.log('last postion ',this.last_driver_postion);
            var heading = google.maps.geometry.spherical.computeHeading(this.last_driver_postion, new_driver_location);
            var car = "M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z";
            this.car_icon = {
              path: car,
              scale: .7,
              strokeColor: 'white',
              strokeWeight: .10,
              fillOpacity: 1,
              fillColor: '#404040',
              offset: '5%',
              // rotation: parseInt(heading[i]),
              anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
            };
            //console.log('heading', heading);
            this.car_icon.rotation = heading;
            this.driver_marker.setIcon(this.car_icon);
            //this.driver_marker.rotation = heading;
            this.map.setHeading = heading;
            //this.map.tilt=45;
          }
          console.log(new_driver_location);

          this.map.panTo(new_driver_location);
          this.update_driver_cordinated_to_firebase();
          this.last_driver_postion = new_driver_location;
        }
      });
    this.sendNotificationToPassengers();
  }

  get_next_stoppage_info() {

    const that = this;
    var reached_stoppage;

    var next_stoppage_already_exist_firebase;

    let current_pos_marker = new google.maps.LatLng(this.driver_current_lat, this.driver_current_lng);
    let current_pos_marker1 = {
      lat: parseFloat(this.driver_current_lat),
      lng: parseFloat(this.driver_current_lng)
    };


    let next_stop_pos_marker = new google.maps.LatLng(parseFloat(that.next_stoppage_list_array[0].lat), parseFloat(that.next_stoppage_list_array[0].lng));
    let next_stop_pos_marker1 = {
      lat: parseFloat(that.next_stoppage_list_array[0].lat),
      lng: parseFloat(that.next_stoppage_list_array[0].lng)
    };

    console.log('current loaction stoppage : ', current_pos_marker);
    console.log('next loaction stoppage : ', next_stop_pos_marker);
    //var distanceInMeters = this.getDistanceBetweenPoints(current_pos_marker.lat, current_pos_marker.lng, next_stop_pos_marker.lat, next_stop_pos_marker.lng);
    //console.log('distanceInMeters', distanceInMeters)
    this.distanceService.getDistanceMatrix({
      origins: [current_pos_marker],
      destinations: [next_stop_pos_marker],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, function (response, status) {
      if (status !== 'OK') {
        alert('next stoppage distance matrix Error was: ' + status);
      } else {

        console.log("response ::::::::", response)
        // var originList = response.originAddresses;
        // var destinationList = response.destinationAddresses;

        // var get_distance=response.rows[0].elements;
        let driver_distance_from_next_destination = parseFloat(response.rows[0].elements[0].distance.text);
        let driver_distance_from_next_destination_response = response;
        //console.log('response_distance : ', driver_distance_from_next_destination_response);

        let driver_distance_from_next_stoppage = response.rows[0].elements[0].distance.text.split(" ");
        //console.log('distance : ', driver_distance_from_next_stoppage);

        let date = new Date();

        let fire_base_car_id = that.car_type + "-" + that.car_id;
        let record = {};
        var debugger_already_exist_firebase;
        record['current_cordinates'] = current_pos_marker;
        record['next_stoppage_cordinates'] = next_stop_pos_marker;
        record['next_stoppage_name'] = that.next_stoppage_info.location_name; //////car name
        record['distance'] = driver_distance_from_next_stoppage;
        record['time'] = ((date.getHours()) * 100) + date.getMinutes();
        record['date'] = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        //alert(fire_base_car_id);
        that.afs.collection('debugger').snapshotChanges().subscribe(data => {
          //this.driver_curent_live_location = 
          data.map(e => {
            if (e.payload.doc.id == fire_base_car_id) {

              debugger_already_exist_firebase = true;
              //console.log("firebase data",e.payload.doc);
            }
          })
        });
        if (debugger_already_exist_firebase == true) {

          that.afs.collection('debugger').doc(fire_base_car_id).update(record);

        } else {

          that.afs.collection('debugger').doc(fire_base_car_id).set(record); //////car id
        }




        var distance_checker;
        if (driver_distance_from_next_stoppage[1] == 'km') {
          distance_checker = 0.1;
        } else {
          distance_checker = 99;
        }

        console.log("driver_distance_from_next_destination", driver_distance_from_next_destination);
        if (driver_distance_from_next_destination <= distance_checker) {
          reached_stoppage = true;
          if (that.next_stoppage_list_array[0].stop == true) {
            that.afs.collection('stoppage').doc(fire_base_car_id).set(record);
            alert('Route Journey completed!');
            that.ride_end = true;
            that.next_stoppage_info = false;
          }
          that.previous_stoppage_list_array.push(that.next_stoppage_list_array[0]);
          that.next_stoppage_list_array.shift();
          that.next_stoppage_info = that.next_stoppage_list_array[0];

          let record1 = {};
          record1['next_stoppage_list_array'] = that.next_stoppage_list_array;

          that.afs.collection('next_stoppage').snapshotChanges().subscribe(data => {
            //this.driver_curent_live_location = 
            data.map(e => {
              if (e.payload.doc.id == fire_base_car_id) {

                next_stoppage_already_exist_firebase = true;
                //console.log("firebase data",e.payload.doc);
              }
            })
          });
          if (next_stoppage_already_exist_firebase == true) {

            that.afs.collection('next_stoppage').doc(fire_base_car_id).update(record1);

          } else {

            that.afs.collection('next_stoppage').doc(fire_base_car_id).set(record1); //////car id
          }



          that.myStepper.next();
        }
      }
    });
  }
  degreesToRadians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
  }
  getDistanceBetweenPoints(lat1, lng1, lat2, lng2) {
    // The radius of the planet earth in meters
    let R = 6378137;
    let dLat = this.degreesToRadians(lat2 - lat1);
    let dLong = this.degreesToRadians(lng2 - lng1);
    let a = Math.sin(dLat / 2)
      *
      Math.sin(dLat / 2)
      +
      Math.cos(this.degreesToRadians(lat1))
      *
      Math.cos(this.degreesToRadians(lat1))
      *
      Math.sin(dLong / 2)
      *
      Math.sin(dLong / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = R * c;

    return distance;
  }


  update_driver_cordinated_to_firebase() {

    let date = new Date();


    let record = {};
    record['lat'] = this.driver_current_lat;
    record['long'] = this.driver_current_lng;
    record['name'] = 'test1.03.2020'; ///////car name optional
    record['time'] = ((date.getHours()) * 100) + date.getMinutes();
    record['date'] = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    let car_id = this.car_type + "-" + this.car_id; ///////car id required
    this.afs.collection('locations').doc(car_id).update(record);
  }
  stopTracking() {
    //console.log("distance dirve",parseFloat(this.driver_distance_from_ending_point));
    console.log('gghhh')
    const that = this;
    var ending_driver_current_lat;
    var ending_driver_current_lng;
    this.storage.set('isTracking', false);
    this.geolocation.getCurrentPosition().then((resp) => {
      //console.log(resp.coords);
      //alert(1);

      ending_driver_current_lat = resp.coords.latitude;
      ending_driver_current_lng = resp.coords.longitude;

      var driver_current_lat_1 = parseFloat(ending_driver_current_lat);
      var driver_current_lng_1 = parseFloat(ending_driver_current_lng);

      this.distanceService.getDistanceMatrix({
        origins: [new google.maps.LatLng(driver_current_lat_1, driver_current_lng_1)],
        destinations: [this.location_destination],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
      }, function (response, status) {
        if (status !== 'OK') {
          alert(' stoppage distance matrix Error was: ' + status);
        } else {

          // var originList = response.originAddresses;
          // var destinationList = response.destinationAddresses;

          // var get_distance=response.rows[0].elements;
          that.driver_distance_from_ending_point = parseFloat(response.rows[0].elements[0].distance.text);

          //console.log('originList' , that.driver_distance_from_starting_point);
          console.log('destinationList', that.driver_distance_from_ending_point);

          let driver_distance_from_next_stoppage = response.rows[0].elements[0].distance.text.split(" ");
          var distance_checker;
          if (driver_distance_from_next_stoppage[1] == 'km') {
            distance_checker = 200;
          } else {
            distance_checker = 20000;
          }


          if (that.driver_distance_from_starting_point <= distance_checker) {
            that.isTracking_resume = false;
            that.isTracking = false;


            that.backgroundGeolocation.stop();
            that.watch.unsubscribe();
            //this.currentMapTrack.setMap(null);

            this.insomnia.allowSleepAgain()
              .then(
                () => console.log('success'),
                () => console.log('error')
              );



            let car_id = this.car_type + "-" + this.car_id;
            this.afs.collection('locations').doc(car_id).delete();
            this.endJourney();



          } else {
            alert("The Driver must End the ride from the Ending point of the route!");
          }

        }
      });


    }).catch((error) => {
      console.log('Error getting location', error);
    });



  }
  sendNotificationToPassengers() {
    this.progress_bar = true;
    let request_data = {
      "type": "drive_start",
      "route_id": this.route_id,
      "route_timing_id": this.route_timing_id,
      "car_id": this.car_id,
      "driver_id": this.driver_id
    };
    //console.log('request_data', request_data)
    this.officePoolCarService.todayRidesService(request_data).subscribe(
      res => {
        //this.result_data = res.result;
        //console.log("res:::" + this.stopp_list.length);
        this.storage.set('drive_history_id', res.result.drive_history_id)
        this.progress_bar = false;
      },
      error => {
        //console.log("error::::" + error.error.msg);
        this.progress_bar = false;
        //this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }
  endJourney() {
    this.progress_bar = true;
    this.storage.get('drive_history_id').then((val) => {
      if (val) {
        let request_data = { "type": "drive_end", "drive_history_id": val }
        this.officePoolCarService.todayRidesService(request_data).subscribe(
          res => {
            this.progress_bar = false;
            this.authenticationService.logout();
            navigator['app'].exitApp();
          },
          error => {
            //console.log("error::::" + error.error.msg);
            this.progress_bar = false;
            //this.toasterService.showToast(error.error.msg, 2000)
          }
        );
      }
    });

  }
  scanQrCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      //console.log('Barcode data', barcodeData);
      this.progress_bar = true;
      let request_data = { "type": "qr_code_val", "car_id": this.car_id, 'qr_code': barcodeData.text };
      this.officePoolCarService.todayRidesService(request_data).subscribe(
        res => {
          this.toasterService.showToast(res.result, 2000);
          this.progress_bar = false;
        },
        error => {
          //console.log("error::::" + error.error);
          this.progress_bar = false;
          this.toasterService.showToast(error.error.msg, 2000);
        }
      );

    }).catch(err => {
      console.log('Error', err);
    });

  }
  async stopConfirm() {
    const alert = await this.alertController.create({
      //header: 'Confirm!',
      message: 'Are you sure you want end this journey!!',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'alert-cancel-button',
          handler: (blah) => {
            this.alertResponseForLogout(false);

          }
        }, {
          text: 'Yes',
          cssClass: 'alert-ok-button',
          handler: () => {
            this.alertResponseForLogout(true);
          }
        }
      ]
    });
    await alert.present();
  }
  alertResponseForLogout(response) {
    if (response) {
      this.stopTracking();
      //this.authenticationService.logout();
    }
  }
  viewRoute() {
    let data = { 'from_which_page': 'location-tracking-page', 'stoppage_list': this.stoppage_list }
    this.modalService.openModal(RouteStoppageModalPage, data, 'stoppage_modal_css');
  }
  viewFullDetails(pay_id, stoppage_id) {
    let data = {
      'from_which_page': 'location-tracking-for-each-passenger-details-page', 'pay_id': pay_id, 'stoppage_id': stoppage_id
    }
    this.modalService.openModal(RouteStoppageModalPage, data, 'passenger_modal_css');
  }

}
