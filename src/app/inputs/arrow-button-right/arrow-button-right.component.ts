import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Player } from '../../../models/player.model';

@Component({
  selector: 'arrow-button-right',
  imports: [],
  templateUrl: './arrow-button-right.component.html',
  styleUrl: './arrow-button-right.component.css'
})
export class ArrowButtonRightComponent {
  @Output() nextStep = new EventEmitter<string>();
  @Input() data!: Player;
  @Input() currentField: string='name';
  handleStep()
  {
    this.nextStep.emit('plus');
  }
  ngOnInit(){
  }
  ngOnChanges(changes: SimpleChanges){
    if (changes['data']) {
      this.data= changes['data'].currentValue;
    }
  }
}
