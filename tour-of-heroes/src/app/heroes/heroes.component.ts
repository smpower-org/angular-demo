import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({  // <-- 装饰器, 用于为该组件指定 Angular 所需的元数据
  selector: 'app-heroes',  // <-- 组件的选择器
  templateUrl: './heroes.component.html',  // <-- 组件模板文件的位置
  styleUrls: ['./heroes.component.css']  // <-- 组件私有 CSS 样式表文件的位置
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {  // <-- 生命周期钩子, 这里放置初始化逻辑
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
