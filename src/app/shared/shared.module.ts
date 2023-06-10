import { NgModule } from '@angular/core';
import { ConfirmComponent } from './components/confirm/confirm.component';

import {MatTableModule} from '@angular/material/table';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchDropDownComponent } from './components/search-drop-down/search-drop-down.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* ================
/ COMPONENTS
/=================*/

const COMPONENTS = [
  ConfirmComponent,
  SearchDropDownComponent
]

/* ================
/ IMPORTS
/=================*/
const MODULES = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  NgSelectModule,
  MatTableModule,
  DragDropModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatSelectModule

]



@NgModule({
  declarations: [
    ...COMPONENTS,

  ],
  imports: [
    ...MODULES
  ],
  exports:[
    ...COMPONENTS,
    ...MODULES
  ]
})
export class SharedModule { }
