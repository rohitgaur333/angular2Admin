import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentComponent } from './student.component';
import { StudentDetailComponent } from './student-details.component';
import { PageNotFoundComponent } from '../../modules/common/not-found.component';
import { DummyComponent } from '../../modules/common/dummy.component';

const routes: Routes =[
   { path:'student',component:StudentComponent,
        children: [
                    { path: '', redirectTo: 'index', pathMatch: 'full' },
                    { path: 'index', component: PageNotFoundComponent,outlet:'student-index' },
                    { path: 'dummy', component: DummyComponent ,outlet:'student-dummy' },
                    { path: 'details', component: StudentDetailComponent, outlet:'student-details' }
         ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StudentRoutingModule {

}