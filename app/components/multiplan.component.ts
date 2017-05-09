import { Component,OnInit } from '@angular/core';
import {enableProdMode} from '@angular/core';
import{ Multiplanservice } from '../services/multiplan.service';
//https://plnkr.co/edit/01UjWY3TKfP6pgwXKuEa?p=preview
@Component({
    selector:'multiplans',
    template:`<h1>Multiplan</h1><ul *ngFor="let multiplan of multiplans"><li>{{multiplan.title}}</li></ul>`
})
export class MultiPlanComponent {
    multiplans=[];

    constructor(private multiplanservice:Multiplanservice){
        this.multiplanservice.getCurrentTime().subscribe(posts =>{
            console.log(posts);
        });
        
    }
         ngOnInit(){
             console.log('B ngssssssssssssOnInit');
             this.multiplanservice.getMultiplan()
                 .subscribe(resMultiplanData=>this.multiplans=resMultiplanData);
                 console.log('B ngOnInit');
        //  this.multiplan=  this.multiplanservice.getMultiplan();
        }
        
    

}
