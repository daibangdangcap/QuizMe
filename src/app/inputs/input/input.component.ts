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
  @Input() textAlign: string = 'left';
  @Input() placeholder: string = '';
  @Input() width: string ='300px';
  @Input() height: string= '50px';
  @Input() type: string= 'text'
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
