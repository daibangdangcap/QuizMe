import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'single-button',
  imports: [CommonModule],
  templateUrl: './single-button.component.html',
  styleUrl: './single-button.component.css'
})
export class SingleButtonComponent {
  @Input() options: any[]=[];
  @Output() select = new EventEmitter<void>();
  currentValue: any=null;
  ngOnInit(){
    console.log(this.options)
  }
  ngOnChanges(changes: SimpleChanges) {
  }
  selectAnswer(option: any){
    if(this.currentValue !=null && this.currentValue?.value != option.value){
      option.isSelected = true;
      let previous = this.options.find(s=>s.value == this.currentValue.value);
      previous.isSelected = false;
      this.currentValue = option;
      return option;
    }
    option.isSelected = true;
    this.currentValue = option;
    return option;
  }
}
