import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket!: WebSocket;
  private subject$= new Subject<any>();
  constructor() { }
  connect(url: string): Observable<any>{
    this.socket= new WebSocket(url);
    this.socket.onmessage= (event)=>{
      this.subject$.next(JSON.parse(event.data));
    }
    this.socket.onerror = (error)=>{
      console.error(error);
    }
    return this.subject$.asObservable();
  }
  send(data: any) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    } else {
      console.warn('WebSocket is not open.');
    }
  }

  close() {
    if (this.socket) {
      this.socket.close();
    }
  }
}
