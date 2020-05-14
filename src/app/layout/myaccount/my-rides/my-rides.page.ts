import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { OfficePoolCarService } from '../../../core/services/office-pool-car.service';
import { ToasterService } from '../../../core/services/toaster.service';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-my-rides',
  templateUrl: './my-rides.page.html',
  styleUrls: ['./my-rides.page.scss'],
})
export class MyRidesPage implements OnInit {

  userId = '';
  result = [];
  available_today_rides=false;
  progress_bar: boolean = false;

  date = new Date();


  constructor(
    public actionSheetController: ActionSheetController,
    private storage: Storage,
    public officePoolCarService: OfficePoolCarService,
    private toasterService: ToasterService,
  ) { }

  ngOnInit() {
    this.storage.get('USER_INFO').then((val) => {
      if (val) {
        this.userId = val.id;
        console.log('user_details_val_val', val.id)
        let current_date= this.date.getFullYear()  + '/' + (this.date.getMonth()+1) + '/' + this.date.getDate()
        this.getTodayRides(current_date);
        //this.presentActionSheet();
      }
    });
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Ride Status',
      buttons: [
      //   {
      //   text: 'Ride History',
      //   icon: 'clock',
      //   handler: () => {
      //     console.log('Share clicked');
      //   }
      // },
       {
        text: 'Current',
        icon: 'arrow-dropright-circle',
        handler: () => {
          //console.log('Play clicked');
          let current_date= this.date.getFullYear()  + '/' + (this.date.getMonth()+1) + '/' + this.date.getDate();

          this.getTodayRides(current_date);

        }
      }, {
        text: 'Upcoming',
        icon: 'heart',
        handler: () => {
          //console.log('Favorite clicked');
          let tommorrow_date= (this.date.getFullYear()+1)  + '/' + (this.date.getMonth()+1) + '/' + this.date.getDate();

          this.getTodayRides(tommorrow_date);
        }
      }
      // , {
      //   text: 'Cancel',
      //   icon: 'close',
      //   role: 'cancel',
      //   handler: () => {
      //     console.log('Cancel clicked');
      //   }
      // }
    ]
    });
    await actionSheet.present();
  }


  getTodayRides(date) {
    console.log('userId', this.userId)
    this.progress_bar = true;
    let request_data = { "type": "driver", "user_id": this.userId , "by_date": date };
    this.officePoolCarService.todayRidesService(request_data).subscribe(
      res => {
        console.log('res', res)
        this.result = res.result;
        //console.log(this.result);
        //this.result.shift();
        //this.result =[];
        if(res.status=="success"){
          //console.log('available_today_rides','success');
          this.available_today_rides=true;
          //this.presentActionSheet();

        }

        this.progress_bar = false;
      },
      error => {
        //console.log("error::::" + error.error);
        this.progress_bar = false;
        this.toasterService.showToast(error.error.msg);
      }
    );
  }



}
