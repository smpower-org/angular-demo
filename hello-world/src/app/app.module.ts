// Angular 模块系统

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({  // @NgModule 注解
  declarations: [  // 指定该模块中定义的组件
    AppComponent,
    UserItemComponent,
    UserListComponent
  ],
  imports: [  // 描述该模块的依赖
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],

  // 当使用该模块引导应用时，把 AppComponent 加载为顶层组件
  bootstrap: [AppComponent]
})
export class AppModule { }
