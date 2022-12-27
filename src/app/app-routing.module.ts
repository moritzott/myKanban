import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule  } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BoardComponent } from './pages/board/board.component';
import { AboutComponent } from './pages/about/about.component';
import { InfoComponent } from './pages/info/info.component';
import { ExportComponent } from './pages/export/export.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "board",
    component: BoardComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "info",
    component: InfoComponent
  },
  {
    path: "export",
    component: ExportComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
