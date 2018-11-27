import { Injectable } from '@angular/core';  // <-- 导入 Injectable 符号
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({  // <-- 添加 @Injectable 装饰器
  providedIn: 'root'  // <-- 接受该元素的元数据对象
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the one
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_  fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
