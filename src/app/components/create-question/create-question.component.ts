import { Component } from '@angular/core';
import { InputComponent } from "../../inputs/input/input.component";
import { MoreButtonComponent } from "../../inputs/more-button/more-button.component";
import { CUSTOM_CONST } from '../../const/custom_const';
import { CreateAnswerComponent } from "../create-answer/create-answer.component";

@Component({
  selector: 'create-question',
  imports: [InputComponent, MoreButtonComponent, CreateAnswerComponent],
  templateUrl: './create-question.component.html',
  styleUrl: './create-question.component.css'
})
export class CreateQuestionComponent {
  lst_Menu_Question=[
    {
      text: "Một câu trả lời",
      value: CUSTOM_CONST.ANSWER_TYPE.SINGLE_ANSWER,
      type: CUSTOM_CONST.QUESTION_TYPE.CHANGE_ANSWER
    },
    {
      text: "Nhiều câu trả lời",
      value: CUSTOM_CONST.ANSWER_TYPE.MULTIPLE_ANSWER,
      type: CUSTOM_CONST.QUESTION_TYPE.CHANGE_ANSWER
    },
    {
      text: "Câu trả lời văn bản",
      value: CUSTOM_CONST.ANSWER_TYPE.TEXT_ANSWER,
      type: CUSTOM_CONST.QUESTION_TYPE.CHANGE_ANSWER
    },
    {
      text: "Xóa",
      type: CUSTOM_CONST.QUESTION_TYPE.DELETE
    }
  ]
}
