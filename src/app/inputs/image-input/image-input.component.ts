import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomCheckboxComponent } from "../custom-checkbox/custom-checkbox.component";

@Component({
  selector: 'image-input',
  imports: [CommonModule, CustomCheckboxComponent],
  templateUrl: './image-input.component.html',
  styleUrl: './image-input.component.css'
})
export class ImageInputComponent {
  // app.component.ts
  previewUrl: string | null = null;
  @Output() changeEvent = new EventEmitter<any>();
  @Input() value: string ='';
  @Input() finalStep: boolean= false;
  constructor(){
  }
  ngOnInit(){
    this.previewUrl = this.value;
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        this.previewUrl = reader.result as string;
        let evt = {
          field: 'image',
          value: this.previewUrl
        }
        this.changeEvent.emit(evt);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  onCheckboxToggled(checked: Event) {
    let evt = {
      field: 'isReady',
      value: checked
    }
    this.changeEvent.emit(evt);
  }
}
