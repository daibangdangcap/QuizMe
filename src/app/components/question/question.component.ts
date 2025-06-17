import { Component, Input, SimpleChanges } from '@angular/core';
import { SingleButtonComponent } from "../../inputs/single-button/single-button.component";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'question',
  imports: [CommonModule, SingleButtonComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  colors = ['#FF7171', '#FFCA38', '#58FF90', '#C38BFF']
  @Input() question: any={
    label: '',
    options:[{
      label:'option1',
      isSelected: false,
      isCorrect: false,
      value:'1'
    },
    {
      label:'option2',
      isSelected: false,
      isCorrect: false,
      value:'2'
    },
    {
      label:'option3',
      isSelected: false,
      isCorrect: false,
      value:'3'
    },
    {
      label:'option4',
      isSelected: false,
      isCorrect: false,
      value:'4'
    }]
  };
  ngOnInit() {
    this.question.options = this.question.options.map((o: any, i: number) => ({
      ...o,
      letter: String.fromCharCode(65 + i), // 65 = 'A'
      color: this.colors[i]
    }));
  }
  ngOnChanges(changes: SimpleChanges) {
  if (changes['question'] && this.question?.options) {
    this.question.options = this.question.options.map((o: any, i: number) => ({
      ...o,
      letter: String.fromCharCode(65 + i),
      color: this.colors[i]
    }));
  }
}


    trackByIndex(index: number, item: any): number {
    return index;
  }
  getLetter(index: number): string {
  return String.fromCharCode(65 + index); // A, B, C, D,...
}

}
