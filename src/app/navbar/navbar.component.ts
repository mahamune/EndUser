import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  fontStyle: any;
  isLogo = true;
  isName = false;

  constructor(private locstor: LocalStorageService) { }
  Headercolor: any;


  private Headercss;
  private deeppinkTheme = false;
  private dodgerblueTheme = false;
  private orangeredTheme = false;
  private blackTheme = false;

private headerTextRed = false;
private headerTextWhite = false;
private headerTextBlack = false;
private headerTextGreen = false;


private headerTextSans = false;
private headerTextcursive = false;
private headerTextmono = false;


  dynamicHeader: { 'bg-light1': boolean; 'bg-light2': boolean; 'bg-light3': boolean; 'bg-light4': boolean };
  dynamicHeaderTextColor: { 'Header-red': boolean; 'Header-white': boolean; 'Header-black': boolean; 'Header-green': boolean };
  // tslint:disable-next-line:max-line-length
  dynamicHeaderFontStyle: { 'header-text-sans': boolean; 'header-text-cursive': boolean; 'header-text-monospace': boolean };


  ngOnInit() {
    // this.locstor.store('theme', 'blue-Header');
    this.Headercss = this.locstor.retrieve('header_background');
    console.log('selected css-->', this.Headercss);

    switch (this.Headercss) {
      case 'pink-Header': {
        this.deeppinkTheme = true;
        console.log('inside switch', this.deeppinkTheme);
        break;
      }
      case 'blue-Header': {
        this.dodgerblueTheme = true;
        console.log('inside switch', this.dodgerblueTheme);
        break;
      }
      case 'orange-Header': {
        this.orangeredTheme = true;
        console.log('inside switch', this.orangeredTheme);
        break;
      }
      case 'black-Header': {
          this.blackTheme = true;
          console.log('inside switch', this.blackTheme);
          break;
      }
      default: {
        console.log('Invalid choice');
        break;
      }
    }
      // --------------HeaderTextColor---------------

    // this.locstor.store('Header_color','Header_red' )
    this.Headercolor = this.locstor.retrieve('header_color');
    console.log('selected css-->', this.Headercss);

    switch (this.Headercolor) {
      case 'Header-red': {
        this.headerTextRed = true;
        console.log('inside switch', this.headerTextRed);
        break;
      }
      case 'Header-white': {
        this.headerTextWhite = true;
        console.log('inside switch', this.headerTextWhite);
        break;
      }
      case 'Header-black': {
        this.headerTextBlack = true;
        console.log('inside switch', this.headerTextBlack);
        break;
      }
      case 'Header-green': {
          this.headerTextGreen = true;
          console.log('inside switch', this.headerTextGreen);
          break;
      }
      default: {
        console.log('Invalid choice');
        break;
      }
    }



     // --------------HeaderTextStyle---------------

    // this.locstor.store('Header_font-style', 'header-text-monospace');
    this.fontStyle = this.locstor.retrieve('Header_font_style');
    console.log('selected css-->', this.fontStyle);

    switch (this.fontStyle) {
      case 'header-text-sans': {
        this.headerTextSans = true;
        console.log('inside switch', this.headerTextSans);
        break;
      }
      case 'header-text-cursive': {
        this.headerTextcursive = true;
        console.log('inside switch', this.headerTextcursive);
        break;
      }
      case 'header-text-monospace': {
        this.headerTextmono = true;
        console.log('inside switch', this.headerTextmono);
        break;
      }

      default: {
        console.log('Invalid choice');
        break;
      }
    }
    this.makeupdate();
  }

  makeupdate() {
    this. dynamicHeader = {
     'bg-light1': this.deeppinkTheme,
     'bg-light2': this.dodgerblueTheme,
     'bg-light3': this.orangeredTheme,
     'bg-light4': this.blackTheme
    };
    console.log('After upadte value-->', this.dynamicHeader );

    this. dynamicHeaderTextColor = {
      'Header-red': this.headerTextRed,
      'Header-white': this.headerTextWhite,
      'Header-black': this.headerTextBlack,
      'Header-green': this.headerTextGreen
     };
    console.log('HEADET TEXT COLOR After upadte value-->', this.dynamicHeaderTextColor );

    this. dynamicHeaderFontStyle = {
      'header-text-sans': this.headerTextSans,
      'header-text-cursive': this.headerTextcursive,
      'header-text-monospace': this.headerTextmono,
     };
    console.log('HEADET TEXT COLOR After upadte value-->', this.dynamicHeaderFontStyle );
  }
}
