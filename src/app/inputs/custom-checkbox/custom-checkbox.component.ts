import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'custom-checkbox',
  imports: [],
  templateUrl: './custom-checkbox.component.html',
  styleUrl: './custom-checkbox.component.css'
})
export class CustomCheckboxComponent {
  @Output() checkboxToggled = new EventEmitter<any>();
  isChecked= false;
  toggle() {
    this.isChecked = !this.isChecked;
    this.checkboxToggled.emit(this.isChecked); // phát sự kiện ra ngoài
  }
}
