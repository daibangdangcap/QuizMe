import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Player } from '../../../models/player.model';

@Component({
  selector: 'arrow-button-left',
  imports: [],
  templateUrl: './arrow-button-left.component.html',
  styleUrl: './arrow-button-left.component.css'
})
export class ArrowButtonLeftComponent {
  @Output() previousStep = new EventEmitter<string>();
  @Input() currentField: string='name';
  @Input() data!: Player;
  handleStep()
  {
    this.previousStep.emit('miner');
  }
}
