import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from "../../inputs/input/input.component";
import { CUSTOM_CONST } from '../../const/custom_const';
import { CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';
import { CustomeTextAreaComponent } from "../../inputs/custom-text-area/custom-text-area.component";
import { Option } from '../../../models/option.model';

@Component({
  selector: 'create-answer',
  imports: [InputComponent, NgSwitch, NgSwitchCase, CustomeTextAreaComponent],
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css'],
  standalone: true
})
export class CreateAnswerComponent {
  @Input() answerType: number = CUSTOM_CONST.ANSWER_TYPE.SINGLE_ANSWER;
  @Input() option: Option = new Option();
  @Output() onDeleteOption = new EventEmitter<any>();
  @Output() onCheckAnswer = new EventEmitter<any>();
  changeValue(event: { field: keyof Option; value: any }) {
    (this.option as any)[event.field] = event.value;
    if(this.answerType === CUSTOM_CONST.ANSWER_TYPE.SINGLE_ANSWER && event.field === 'isCorrect') {
      this.onCheckAnswer.emit(event.value);
    }
  }
  deleteOption(){
    this.onDeleteOption.emit();
  }
}
