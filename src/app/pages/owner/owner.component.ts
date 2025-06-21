import { Component } from '@angular/core';
import { CreateQuestionComponent } from "../../components/create-question/create-question.component";

@Component({
  selector: 'app-owner',
  imports: [CreateQuestionComponent],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent {

}
