import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopComponent } from './components/top/top.component';
import { JournalIndexComponent }   from './components/journal-index/journal-index.component';
import { JournalFormComponent }   from './components/journal-form/journal-form.component';
import { CuppingIndexComponent }   from './components/cupping-index/cupping-index.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'journal/new',  component: JournalFormComponent },
  { path: 'journal',  component: JournalIndexComponent },
  { path: 'cupping',  component: CuppingIndexComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
