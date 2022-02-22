import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TabViewModule} from 'primeng/tabview';
import { TabviewComponent } from './components/tabview/tabview.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import {TableModule} from 'primeng/table';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';

import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';
import { CarService } from './services/car.service';
import {DataViewModule} from 'primeng/dataview';
import { ProductService } from './services/productservice';
import {PanelModule} from 'primeng/panel';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    TabviewComponent,
    CarousselComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    BrowserAnimationsModule,
    CarouselModule,
    TableModule,
    HttpClientModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    DataViewModule,
    PanelModule,
    RatingModule,
    RippleModule
  ],
  providers: [CarService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
