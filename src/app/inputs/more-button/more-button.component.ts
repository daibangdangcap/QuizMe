import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'more-button',
  imports: [CommonModule],
  templateUrl: './more-button.component.html',
  styleUrl: './more-button.component.css'
})
export class MoreButtonComponent {
  isMenuOpen = false;
  @Input() menu: any=[]
  @Output() onMenuSelect= new EventEmitter<any>();
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleSelect(type: any, value: any){
    this.onMenuSelect.emit({type, value});
    this.toggleMenu();
  }
}
