import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';



@NgModule({
  declarations: [
    C1Component,
    C2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'c1',
        component: C1Component
      },
      {
        path: 'c2',
        component: C2Component
      }
    ])
  ]
})
export class TestModule { }
