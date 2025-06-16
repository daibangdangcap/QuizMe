export class Room{
  public id: string='';
  public name: string ='';
  public active: boolean= false;
  public winner: string[] = [];
  public allowPassworn: boolean = false;
  public password: string='';
  public owner: string='';
  public playerNumber: number=0;
}
