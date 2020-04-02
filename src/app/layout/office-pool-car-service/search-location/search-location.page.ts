import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { LoadingService } from '../../../core/services/loading.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


declare var google;
@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.page.html',
  styleUrls: ['./search-location.page.scss'],
})
export class SearchLocationPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  GoogleAutocomplete;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  progress_bar: boolean = false;
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  search_address = '';
  back_button_visible: boolean = false;
  search_bar_visible: boolean = false;
  network_check_class: string = '';
  network_msg: string = '';
  network_check_class_show: boolean = false;
  isItemAvailable: boolean = false;
  quick_actions: boolean = true;
  items: any;
  search_location_event: Events;
  which_type_search: any;
  isNoItemAvailable: boolean;
  location_placeholder: string = "Enter pickup location";
  map: any;
  markers = [];
  showList: boolean = false;
  net_connection_check: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storage: Storage,
    private officePoolCarService: OfficePoolCarService,
    private loadingService: LoadingService,
    public zone: NgZone,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public search_loc_page_event: Events,
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];

  }

  ngOnInit() {
    this.search_loc_page_event.subscribe('check_net_connection', (data) => {
      if (data == 'connect') this.net_connection_check = false;
      if (data == 'disconnect') this.net_connection_check = true;
    });
    this.which_type_search = this.route.snapshot.paramMap.get("type")
    if (this.which_type_search == 'drop') {
      this.quick_actions = false;
      this.location_placeholder = "Enter drop location"
    }
  }
  ionViewDidEnter() {
    this.currentLocation();
  }
  currentLocation(which_type_search = '') {
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(resp => {
      console.log('resp', resp)

      this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
      if (which_type_search) this.selectLocation('pickup')
      this.loadMap(resp.coords.latitude, resp.coords.longitude);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  loadMap(lat, lng) {
    this.showList = false;
    console.log('dsfddfdsfsdfsdf')
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: lat, lng: lng },
      zoom: 15,
    });
    let marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: this.map,
      draggable: true,
    });
    this.markers.push(marker);
    this.lastLatLng(marker);
  }
  lastLatLng(marker) {
    google.maps.event.addListener(marker, 'dragend', () => {
      console.log(marker.position.lat(), marker.position.lng())
      this.getGeoencoder(marker.position.lat(), marker.position.lng());
    });
  }
  initializeItems(search_word: any = '') {
    this.loadingService.dismiss();
    let request_data = { "type": "auto_search", "location": search_word }
    this.officePoolCarService.commonSearchService(request_data).subscribe(
      res => {
        console.log('result', res.result);
        this.items = res.result;
      },
      error => {
        console.log("error::::" + error.error);
        //this.openOtpModal();
        this.loadingService.dismiss();
        //this.toasterService.showToast(error.error.msg, 2000)
      }
    );
    //this.items = ["Ram", "gopi", "dravid"];
  }
  getItems(ev: any) {
    const val = ev.target.value;
    console.log('val', val)
    let request_data = { "type": "auto_search", "location": val };
    this.officePoolCarService.commonSearchService(request_data).subscribe(
      res => {
        console.log('result', res.result);
        this.isNoItemAvailable = false;
        this.isItemAvailable = true;
        this.items = res.result;
      },
      error => {
        console.log("error::::" + error.error);
        this.isItemAvailable = false
        this.isNoItemAvailable = true;
      }
    );
  }
  updateSearchResults(ev: any) {
    this.isItemAvailable = false
    this.isNoItemAvailable = false;

    const val = ev.target.value;
    if (val == '') {
      this.autocompleteItems = [];
      this.quick_actions = true;
      return;
    }
    console.log('this.autocomplete.input', val)
    this.GoogleAutocomplete.getPlacePredictions({ input: val },
      (predictions, status) => {
        this.quick_actions = false;
        this.autocompleteItems = [];
        this.zone.run(() => {
          this.showList = true;
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      });
  }

  selectSearchLocation(location: any, type: any) {
    this.showList = false;
    this.search_address = location;
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': location }, (results, status) => {
      this.loadMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());
    });
  }
  selectLocation(type: any) {
    this.storage.get('select_location').then((val) => {
      if (val != null) {
        //console.log('ifeeeeeeeeeeeee')
        let val1 = val;
        if (type == 'pickup') {
          val1['pickup_location'] = this.search_address;
          this.storage.set('select_location', val1)
        }
        else if (type == 'drop') {
          val1['drop_location'] = this.search_address;
          this.storage.set('select_location', val1);
        }
      }
      else {
        //console.log('elseeeeeeeeeee')
        if (type == 'pickup') {
          this.storage.set('select_location', { 'pickup_location': this.search_address })
        }
        else if (type == 'drop') {
          this.storage.set('select_location', { 'drop_location': this.search_address })
        }
      }
    });
    this.router.navigateByUrl('office-pool-car-service');
  }
  // selectSearchResult(item, curren_location) {
  //   this.progress_bar = true;
  //   console.log(item)
  //   this.autocompleteItems = [];
  //   var request_data
  //   if (curren_location) {
  //     request_data = { "type": "nearest_location_latlong", "lat": curren_location.lat, "long": curren_location.long };
  //   } else {
  //     request_data = { "type": "nearest_location", "address": item.description };
  //   }

  //   this.officePoolCarService.commonSearchService(request_data).subscribe(
  //     res => {
  //       this.progress_bar = false;
  //       //this.autocompleteItems = [];
  //       console.log('result', res.result);
  //       this.isNoItemAvailable = false;
  //       this.isItemAvailable = true;
  //       this.items = res.result;
  //       this.quick_actions = false;
  //     },
  //     error => {
  //       this.progress_bar = false;
  //       console.log("error::::" + error.error);
  //       this.isItemAvailable = false
  //       this.isNoItemAvailable = true;
  //       this.quick_actions = false;
  //     }
  //   );
  // }
  // currentLocation() {
  //   console.log('sdffdfsdff')
  //   this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(resp => {
  //     console.log('resp', resp)
  //     this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
  //     this.selectLocation(this.search_address, 'pickup')


  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });
  // }
  //geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.search_address = this.generateAddress(result[0]);
        console.log('this.search_address', this.search_address)
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }

  //Return Comma saperated address
  generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length)
        address += obj[val] + ', ';
    }
    return address.slice(0, -2);
  }


}
