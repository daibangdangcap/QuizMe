import { Component, Input } from '@angular/core';
import { InputComponent } from "../../inputs/input/input.component";
import { CUSTOM_CONST } from '../../const/custom_const';
import { CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';
import { CustomeTextAreaComponent } from "../../inputs/custom-text-area/custom-text-area.component";

@Component({
  selector: 'create-answer',
  imports: [InputComponent, NgSwitch, NgSwitchCase, CustomeTextAreaComponent],
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css'],
  standalone: true
})
export class CreateAnswerComponent {
  @Input() answerType: number = CUSTOM_CONST.ANSWER_TYPE.TEXT_ANSWER;
}
