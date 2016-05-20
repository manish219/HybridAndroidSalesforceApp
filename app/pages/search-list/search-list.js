import {OnInit} from 'angular2/core';
import {Page, NavController} from 'ionic-framework/ionic';
import {PropertyDetailsPage} from '../property-details/property-details';
import {PropertyService} from '../../services/property-service';
import {Component} from 'angular2/core'
//import {bootstrap} from 'angular2/bootstrap'
@Page({
    selector : 'search',
    templateUrl: 'build/pages/search-list/search-list.html'
})

export class SearchListPage{
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
        this.trueProps = [];
    }

    ngOnInit() {
        this.propertyService.findAll().then(properties => this.properties = properties);
        this.propertyService.findAll().then(properties => this.trueProps = properties);
    }


    getSearchItems(event, propList) {
        if(event.value!=undefined){          
            var filteredList = [];
            var searchText = event.value.toLowerCase();
            console.log(searchText);
            filteredList = this.trueProps.filter(
                function(prop){
                    var title = prop.title.toLowerCase();
                    return prop.title.toLowerCase().startsWith(searchText);
                });
            this.properties = filteredList;
        }

    }

    itemTapped(event, property) {
        this.nav.push(PropertyDetailsPage, {
            property: property
        });
    }
}
//bootstrap(SearchComponent);