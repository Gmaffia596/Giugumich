import { IChat } from './../../interfaces/chat.model';
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/services/chatService/chat.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {
  chats: IChat[] = [];
  message: string;
  sending: boolean;

  constructor(private _chat: ChatService) { }

  ngOnInit() {
    // subscribe to pusher's event
    this._chat.getChannel().bind('chat', data => {
      if (data.type !== 'bot') {
        data.isMe = true;
      }
      this.chats.push(data);
    });
  }
  
  sendMessage() {
    this.sending = true;
    this._chat.sendMessage(this.message)
      .subscribe(resp => {
        this.message = '';
        this.sending = false;
      }, err => {
        this.sending = false;
      } );
  }

}
