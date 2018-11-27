import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {  // <-- 往缓存中添加一跳消息
    this.messages.push(message);
  }

  clear() {  // <-- 清空缓存
    this.messages = [];
  }
}
