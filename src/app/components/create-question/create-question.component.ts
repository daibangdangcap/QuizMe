import { Component } from '@angular/core';
import { InputComponent } from "../../inputs/input/input.component";
import { MoreButtonComponent } from "../../inputs/more-button/more-button.component";

@Component({
  selector: 'create-question',
  imports: [InputComponent, MoreButtonComponent],
  templateUrl: './create-question.component.html',
  styleUrl: './create-question.component.css'
})
export class CreateQuestionComponent {

}
