import {OnInit} from 'angular2/core';
import {Page, NavController} from 'ionic-framework/ionic';
import {PropertyDetailsPage} from '../property-details/property-details';
import {PropertyService} from '../../services/property-service';
import {Component} from '@angular/core'
import {bootstrap} from '@angular/platform-browser-dynamic'
@Component({
    selector : 'search',
    template: `
    <ion-searchbar [(ngModel)]="searchQuery" (input)="getItems($event)"></ion-searchbar>
Test2
<ion-list>
  <ion-item *ngFor="#item of items">
    {{ item }}
  </ion-item>
</ion-list>
`
})

export class SearchComponent{
  componentName: 'SearchComponent'
}
bootstrap(SearchComponent);