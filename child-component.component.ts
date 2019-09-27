import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, Input, SkipSelf } from '@angular/core';
import { FlowerService } from '../flower.service';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
  providers: [{ provide: FlowerService, useValue: { emoji: '🌻' } }],
  viewProviders: [{ provide: AnimalService, useValue: { emoji: '🐶' } }]
})
export class ChildComponentComponent implements OnChanges, OnInit, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  @Input() title: String;
  constructor(public flower: FlowerService,public animal: AnimalService){
    //console.log("CHILD constructor")
  }

  ngOnChanges(){
    //console.log("CHILD ngOnchanges")
  }

  ngOnInit(){
    //console.log("CHILD ngOnInit")
  }

  ngAfterContentInit(){
    //console.log("CHILD ngAfterContentInit")
  }

  ngAfterContentChecked(){
    //console.log("CHILD ngAfterContentChecked")
  }

  ngAfterViewInit(){
    //console.log("CHILD ngAfterViewInit")
  }

  ngAfterViewChecked(){
    //console.log("CHILD ngAfterViewChecked")
  }

  ngOnDestroy(){
    //console.log("CHILD ngOnDestroy")
  }

}
