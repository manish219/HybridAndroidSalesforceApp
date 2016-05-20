import {OnInit} from 'angular2/core';
import {Page, NavController} from 'ionic-framework/ionic';
import {PropertyDetailsPage} from '../property-details/property-details';
import {PropertyService} from '../../services/property-service';

@Page({
    templateUrl: 'build/pages/property-list/property-list.html'
})
export class PropertyListPage {

    static get parameters() {
        return [[NavController], [PropertyService]];
    }

    constructor(nav, propertyService) {
        this.nav = nav;
        this.propertyService = propertyService;
        this.searchQuery = '';
        this.items = [
          'Amsterdam',
          'Bogota',
          'Berlin'
        ];
    }

    ngOnInit() {
        this.propertyService.findAll().then(properties => this.properties = properties);
    }

    getSearchItems(event) {
      console.log('test');
      alert('getSearchItems');
        var q = event.value;
        if(q.trim() == '') { return this.items; }
        return this.items.filter((v) => {
          if(v.toLowerCase().indexOf(q.toLowerCase()) >= 0) {
            return true;
          }
          return false;
        })
      }


    itemTapped(event, property) {
      console.log('test2');
      alert('test');
        this.nav.push(PropertyDetailsPage, {
            property: property
        });
    }

}