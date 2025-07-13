import { CUSTOM_CONST } from "../app/const/custom_const";
import { Option } from "./option.model";
import { v4 as uuidv4 } from 'uuid';

export class Question{
  public id: string= uuidv4();
  public idRoom: string='';
  public orderNumber: number=0;
  public text: string='';
  public answerType: number= CUSTOM_CONST.ANSWER_TYPE.MULTIPLE_ANSWER;
  public options: Array<Option>=[];
  public score: number=0;
}
