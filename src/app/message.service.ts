import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string;
  displayMessage(message: string) {
    this.message = message;
  }

  clearMessage() {
    this.message = '';
  }

  constructor() { }
}
