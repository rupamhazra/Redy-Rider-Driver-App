import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menu_button_visible: boolean;
  title_section_visible: boolean;
  back_button_visible: boolean = false;
  title: any = 'REDY RIDER';
  network_msg: string = '';
  network_check_class: string = '';
  network_check_class_show: boolean = false;
  notification_show: boolean = false;
  notification_count = 0;
  constructor(
    private router: Router,
    public header_event: Events,
    private storage: Storage,
    private network: Network,
    private fcm: FirebaseX,
  ) { }
  ngOnInit() {
    this.header_event.subscribe('notification_count', (data) => {
      this.notification_count = 1;
    });
    this.network.onDisconnect().subscribe(() => {
      this.network_check_class_show = true;
      this.storage.set('network_connection', "disconnected");
      console.log('onDisconnect val')
      this.network_msg = 'Network was disconnected :-(';
      this.network_check_class = 'disconnect';
      this.header_event.publish('check_net_connection', 'disconnect');
    });
    this.network.onConnect().subscribe(() => {
      this.storage.get('network_connection').then((val) => {
        if (val == 'disconnected') {
          this.network_check_class_show = true
          this.network_check_class = 'connect';
          //console.log('onConnect val', val)
          this.header_event.publish('check_net_connection', 'connect');
          this.network_msg = 'Yaa whooo, We got a connection';
          setTimeout(() => {
            this.network_check_class_show = false
          }, 1000)
          this.storage.set('network_connection', "connected");
        }
      });
    });
    if (this.router.url.includes('register')) {
      this.menu_button_visible = false;
      this.title_section_visible = true;
    }
    if (this.router.url.includes('login')) {
      this.menu_button_visible = false;
      this.title_section_visible = true;
      this.back_button_visible = false;
    }
    if (this.router.url.includes('forgot-password')) {
      this.menu_button_visible = false;
      this.title_section_visible = true;
      this.title = "Retrieve Password";
      this.back_button_visible = true;
    }
    if (this.router.url.includes('home')) {
      this.menu_button_visible = true;
      this.title_section_visible = true;
      this.notification_show = true;
    }
    if (this.router.url.includes('common-page/contact-us')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Contact Us";
    }
    if (this.router.url.includes('common-page/privacy-policy')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Privacy Policy";
    }
    if (this.router.url.includes('common-page/terms-condition')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Terms and Conditions";
    }
    if (this.router.url.includes('myaccount')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "My Account";
    }
    if (this.router.url.includes('myaccount/myaccount-common-page/notifications')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Notifications";
    }
    if (this.router.url.includes('location-tracking')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Tracking";
    }
    if (this.router.url.includes('today-rides')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Today's Rides";
    }
    if (this.router.url.includes('my-rides')) {
      this.back_button_visible = true;
      this.title_section_visible = true;
      this.title = "Next Day Rides";
    }
  }
  goToPage(page) {
    if (page == 'notifications')
      this.router.navigateByUrl('myaccount/myaccount-common-page/notifications')
  }
}
