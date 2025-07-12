import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'more-button',
  imports: [CommonModule],
  templateUrl: './more-button.component.html',
  styleUrl: './more-button.component.css'
})
export class MoreButtonComponent {
  isMenuOpen = false;
  @Input() menu: any=[]
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  selectType(type: any, value: any =null){
    this.isMenuOpen = !this.isMenuOpen;
  }
}
