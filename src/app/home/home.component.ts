import { BASEURL } from '../environment';
import { Component } from '@angular/core';
import { ArrowButtonRightComponent } from "../inputs/arrow-button-right/arrow-button-right.component";
import { InputComponent } from "../inputs/input/input.component";
import { ImageInputComponent } from "../inputs/image-input/image-input.component";
import { ArrowButtonLeftComponent } from "../inputs/arrow-button-left/arrow-button-left.component";
import { CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';
import { Player } from '../../models/player.model';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
import { CustomCheckboxComponent } from "../inputs/custom-checkbox/custom-checkbox.component";
import { Room } from '../../models/room.model';
import { Subscription } from 'rxjs';
import { WebsocketService } from '../services/websocket.service';
import { SingleButtonComponent } from "../inputs/single-button/single-button.component";
import { QuestionComponent } from "../components/question/question.component";
import { ProductService } from '../services/product-service/product.service';


@Component({
  standalone: true,
  selector: 'app-home-component',
  imports: [ArrowButtonRightComponent, InputComponent, ImageInputComponent, ArrowButtonLeftComponent, NgSwitch, NgSwitchCase, CommonModule, QuestionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
  trigger('slideAnimation', [
    transition('* => left', [
      style({ transform: 'translateX(-100%)', opacity: 0 }),
      animate('300ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition('* => right', [
      style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
    ])
  ])
]

})
export class HomeComponent {
  steps = [1, 2, 3];
  orderStep = this.steps[0];
  room: Room = new Room();
  player: Player = new Player();
  animationDirection: 'left' | 'right' | null = null;
  currentField: string='name';
  private subscriptions!: Subscription;
  constructor(private wbService: WebsocketService, private productService: ProductService){

  }

  ngOnInit(){
    this.productService.getProducts().subscribe((rs:any) =>{
      console.log(rs)
    })
  }

  ngOnChanges(){

  }
  handleData(event: string) {
    const currentIndex = this.steps.indexOf(this.orderStep);

    if (event === 'plus' && currentIndex < this.steps.length - 1) {
      this.orderStep = this.steps[currentIndex + 1];
      this.animationDirection = 'right';
      switch(this.currentField){
        case 'name':
          this.currentField = 'image';
          break;
        case 'image':
          this.currentField = 'final';
          break;
      }
      console.log('👉 currentField now:', this.currentField);
    }

    if (event === 'miner' && currentIndex > 0) {
      this.orderStep = this.steps[currentIndex - 1];
      this.animationDirection = 'left';
      switch(this.currentField){
        case 'image':
          this.currentField = 'name';
          break;
        case 'final':
          this.currentField = 'image';
          break;
      }
    }
  }

  changeValue(event: { field: keyof Player; value: any }) {
    // Clone player và cập nhật field tương ứng
    this.player = { ...this.player, [event.field]: event.value };
    this.currentField = event.field;
    console.log(this.player);
  }

}
