import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-css-setting',
  templateUrl: './css-setting.component.html',
  styleUrls: ['./css-setting.component.css']
})
export class CssSettingComponent implements OnInit {

  constructor(private locstor: LocalStorageService, private router: Router) { }

  ngOnInit() {
    // this.locstor.store('theme', 'pink-Header');
  }

  setHeaderColor(param) {
    // alert(param);
    this.locstor.store('theme', param);
    location.reload();
  }
  setHeaderTextColor(param) {
    console.log('Header Text Color-->', param);
    this.locstor.store('header_color', param);
    location.reload();
  }

  setHeaderTextStyle(param) {
    console.log('Header Text Style-->', param);
    this.locstor.store('header_font-style', param);
    location.reload();
  }

  setfooterBackground(param) {
    console.log('footer Text Style-->', param);
    this.locstor.store('footerbackground', param);
    location.reload();
  }
  setFooterTextStyle(param) {
    console.log('Header Text Style-->', param);
    this.locstor.store('footer_font-style', param);
    location.reload();
  }

  setFooterTextColor(param) {
    console.log('Footer Text Style-->', param);
    this.locstor.store('footer-text-color', param);
    location.reload();
  }

  setHeadingTextColor(param) {
    console.log('Footer Text Style-->', param);
    this.locstor.store('Heading-text-color', param);
    location.reload();
  }

  setsliderAligment(param) {
    console.log('Slider aligment-->', param);
    this.locstor.store('sliderAlignment', param);
  }

  isMap(param) {
    console.log('Map Status-->', param);
    this.locstor.store('map-Status', param);
  }
}
