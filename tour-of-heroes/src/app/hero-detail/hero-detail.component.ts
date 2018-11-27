import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; 

  constructor(
    private route: ActivatedRoute,  // 保存这个 HeroDetailComponent 实例的路由信息
    private heroService: HeroService,  // 从远端服务器获取数据
    private location: Location  // Angular 服务，用来跟浏览器打交道
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {  // 获取英雄

    // 路由参数是字符串，JS 的 + 操作符会把字符串转换成数字，英雄的 id 就是
    // 数字类型
    const id = +this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {  // 返回上一级
    this.location.back();
  }

}
