import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StudentComponent} from '../modules/student/student.component';
import {StudentDetailComponent} from '../modules/student/student-details.component';
import { PageNotFoundComponent } from '../modules/common/not-found.component';
import {DummyComponent} from '../modules/common/dummy.component';

const appRoutes: Routes = [
      
   {path: '**', component: PageNotFoundComponent }



];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

