import { v4 as uuidv4 } from 'uuid';

export class Option {
  public id: string = uuidv4();
  public questionId: string = '';
  public text: string = '';
  public isCorrect: boolean = false;
  public constructor(questionId: string = '') {
    this.questionId = questionId;
  }
}
