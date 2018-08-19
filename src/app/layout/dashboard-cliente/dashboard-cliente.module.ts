import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardClienteComponent } from './dashboard-cliente.component';
import { DashboardClienteRoutingModule } from './/dashboard-cliente-routing.module';
import {
  TimelineComponent,
  NotificationComponent,
  ChatComponent
} from './components';
import { StatModule } from '../../shared';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    DashboardClienteRoutingModule,
    StatModule
    
  ],
  declarations: [
    DashboardClienteComponent,
    TimelineComponent,
        NotificationComponent,
        ChatComponent
  ]
})
export class DashboardClienteModule { }
