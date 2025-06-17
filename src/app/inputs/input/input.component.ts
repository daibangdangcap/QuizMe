import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-input',
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  constructor(){
  }
  @Output() changeEvent = new EventEmitter<any>();
  @Input() value: string=''
  changeValue(event:Event){
    const input = event.target as HTMLInputElement;
    const value = input.value;
    let evt = {
      field: 'name',
      value: value
    }
    this.changeEvent.emit(evt);
  }
}
