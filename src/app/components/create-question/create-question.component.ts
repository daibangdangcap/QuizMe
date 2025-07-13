import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { InputComponent } from "../../inputs/input/input.component";
import { MoreButtonComponent } from "../../inputs/more-button/more-button.component";
import { CUSTOM_CONST } from '../../const/custom_const';
import { CreateAnswerComponent } from "../create-answer/create-answer.component";
import { Question } from '../../../models/question.model';
import { Option } from '../../../models/option.model';

@Component({
  selector: 'create-question',
  imports: [InputComponent, MoreButtonComponent],
  templateUrl: './create-question.component.html',
  styleUrl: './create-question.component.css'
})
export class CreateQuestionComponent {
  @ViewChild('answerContainer', { read: ViewContainerRef }) answerContainer!: ViewContainerRef;
  @Input() question: Question = new Question();
  @Output() onDeleteQuestion = new EventEmitter<any>();
  optionRefs: any[] = [];
  answer_type = CUSTOM_CONST.ANSWER_TYPE.SINGLE_ANSWER;
  lst_Menu_Question=[
    {
      text: "Một câu trả lời",
      value: CUSTOM_CONST.ANSWER_TYPE.SINGLE_ANSWER,
      type: CUSTOM_CONST.QUESTION_ACTION.CHANGE_ANSWER
    },
    {
      text: "Nhiều câu trả lời",
      value: CUSTOM_CONST.ANSWER_TYPE.MULTIPLE_ANSWER,
      type: CUSTOM_CONST.QUESTION_ACTION.CHANGE_ANSWER
    },
    {
      text: "Câu trả lời văn bản",
      value: CUSTOM_CONST.ANSWER_TYPE.TEXT_ANSWER,
      type: CUSTOM_CONST.QUESTION_ACTION.CHANGE_ANSWER
    },
    {
      text: "Xóa",
      type: CUSTOM_CONST.QUESTION_ACTION.DELETE
    }
  ]

  handleMenuSelect(event: any) {
    if(event.type == CUSTOM_CONST.QUESTION_ACTION.CHANGE_ANSWER){
      this.answerContainer.clear();
      const componentRef = this.answerContainer.createComponent(CreateAnswerComponent);
      componentRef.instance.answerType = event.value;
      this.answer_type = event.value;
      this.question.options = [];
    }
    else if(event.type == CUSTOM_CONST.QUESTION_ACTION.DELETE){
      this.onDeleteQuestion.emit();
    }
  }

  changeValue(event: { field: keyof Question; value: any }) {
    (this.question as any)[event.field] = event.value;
    console.log(this.question);
  }

  handleCreateAnswer(){
    if(this.question.options.length < CUSTOM_CONST.ALLOW_ANSWER_NUMBER.SINGLE_NUMBER){
      const componentRef = this.answerContainer.createComponent(CreateAnswerComponent);
      componentRef.instance.answerType = this.answer_type;
      let option = new Option(this.question.id);
      this.question.options.push(option);
      componentRef.instance.option = option;
      componentRef.instance.answerType = this.answer_type;
      componentRef.instance.onDeleteOption.subscribe(() => this.deleteOption(componentRef, option));
      componentRef.instance.onCheckAnswer.subscribe((isCorrect: boolean) => {
        debugger
        if(this.answer_type == CUSTOM_CONST.ANSWER_TYPE.SINGLE_ANSWER){
          this.question.options.forEach(o => {
            if(o.id !== option.id) {
              o.isCorrect = false;
            }
          });
          option.isCorrect = isCorrect;
        }
      });
      this.optionRefs.push(componentRef);
    }
  }
  deleteOption(ref: any, option: Option) {
    const idx = this.optionRefs.indexOf(ref);
    if (idx > -1) {
      this.optionRefs[idx].destroy();
      this.optionRefs.splice(idx, 1);
      this.question.options = this.question.options.filter(o => o.id !== option.id);
      console.log(this.question);
    }
  }
}
