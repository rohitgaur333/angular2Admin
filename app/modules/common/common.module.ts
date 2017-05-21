import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './not-found.component';
import { DummyComponent } from './dummy.component';

@NgModule ({
    declarations:[
        PageNotFoundComponent,
        DummyComponent
    ],
    exports:[
        PageNotFoundComponent,
        DummyComponent
    ]

})

export class CommonModule {}