import { Component, OnInit } from '@angular/core';
import { FlowerService } from 'src/app/flower.service';
import { AnimalService } from 'src/app/animal.service';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent {
  constructor(public flower: FlowerService, public animal: AnimalService) { }
}
