import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CreateQuestionComponent } from "../../components/create-question/create-question.component";
import { AdminComponent } from "../../components/admin/admin.component";
import { Question } from '../../../models/question.model';

@Component({
  selector: 'app-owner',
  imports: [],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent {
  @ViewChild('questionContainer', { read: ViewContainerRef }) answerContainer!: ViewContainerRef;
  questionRefs: any[] = [];
  lstQuestions: Question[]= []

  handleAddSelect() {
    const ref = this.answerContainer.createComponent(CreateQuestionComponent);
    let question = new Question();
    this.lstQuestions.push(question);
    this.questionRefs.push(ref);
    ref.instance.question = question;
    ref.instance.onDeleteQuestion.subscribe(() => this.deleteQuestion(ref, question));
  }
  deleteQuestion(ref: any, question: Question) {
    const idx = this.questionRefs.indexOf(ref);
    if (idx > -1) {
      this.questionRefs[idx].destroy();
      this.questionRefs.splice(idx, 1);
      this.lstQuestions = this.lstQuestions.filter(q => q.id !== question.id);
    }
  }
}
