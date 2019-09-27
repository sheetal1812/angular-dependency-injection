import { Component, OnDestroy, OnInit, OnChanges, 
  AfterViewInit, AfterViewChecked, AfterContentInit, 
  AfterContentChecked } from '@angular/core';
import { FlowerService } from './flower.service';
import { AnimalService } from './animal.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked{
  title = 'angular-lifecycle-hooks';
  inputTitle = "parent input";
  constructor(public flower: FlowerService, public animal: AnimalService){
    //console.log("PARENT constructor")
  }

  ngOnChanges(){
    //console.log("PARENT ngOnchanges")
  }

  ngOnInit(){
    //console.log("PARENT ngOnInit")
  }

  ngAfterContentInit(){
    //console.log("PARENT ngAfterContentInit")
  }

  ngAfterContentChecked(){
    //console.log("PARENT ngAfterContentChecked")
  }

  ngAfterViewInit(){
    //console.log("PARENT ngAfterViewInit")
  }

  ngAfterViewChecked(){
    //console.log("PARENT ngAfterViewChecked")
  }

  ngOnDestroy(){
    //console.log("PARENT ngOnDestroy")
  }
}
