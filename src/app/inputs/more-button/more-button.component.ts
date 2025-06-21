import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'more-button',
  imports: [CommonModule],
  templateUrl: './more-button.component.html',
  styleUrl: './more-button.component.css'
})
export class MoreButtonComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  selectType(){
    this.isMenuOpen = !this.isMenuOpen;
  }
}
