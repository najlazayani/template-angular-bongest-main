
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule, NgbCollapseModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/app/theme/shared/shared.module';
import { SharedGlobalModule } from 'src/app/shared-global/shared-global.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedGlobalModule,
    SharedModule,
    NgbTabsetModule,
    NgbAccordionModule, NgbCollapseModule
  ],
  exports:[

  ]
})
export class ComponentsModule { }
