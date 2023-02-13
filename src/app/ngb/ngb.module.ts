import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbAlertModule, NgbModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { NgbCarouselCycleComponent } from './ngb-carousel-cycle/ngb.carousel.cycle.component';
import { NgbModalComponent } from './ngb-modal/ngb.modal.component';
import { NgbRoutingModule } from './ngb-routing.module';
import { NgbTypeaheadFilterComponent } from './ngb-typeahead-filter/ngb.typeahead.filter.component';
import { NgbTypeaheadSearchScrollableComponent } from './ngb-typeahead-search-scrollable/ngb.typeahead.search.scrollable.component';
import { NgbTypeaheadSearchComponent } from './ngb-typeahead-search/ngb.typeahead.search.component';
import { NgbHomeComponent } from './ngb-home/ngb-home.component';
import { SharedModule } from 'oops-lib002';
import { FormsModule } from '@angular/forms';
import { NgbSpinnerComponent } from './ngb-spinner/ngb-spinner.component';
import { NgbTableComponent } from './ngb-table/ngb-table.component';
import { NgbdSortableHeader } from '../services/sortable.directive';

@NgModule({
  declarations: [
    NgbTypeaheadSearchComponent,
    NgbTypeaheadSearchScrollableComponent,
    NgbModalComponent,
    NgbTypeaheadFilterComponent,
    NgbCarouselCycleComponent,
    NgbHomeComponent,
    NgbSpinnerComponent,
    NgbTableComponent,
    NgbdSortableHeader,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    SharedModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    TypeaheadModule.forRoot(),
    TranslateModule.forRoot(),
    NgbRoutingModule,
  ],
})
export class NgbTestModule {}
