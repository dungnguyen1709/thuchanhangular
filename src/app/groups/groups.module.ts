import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GroupListComponent} from './group-list/group-list.component';
import {GroupAddComponent} from './group-add/group-add.component';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', component: GroupListComponent},
  {path: 'add', component: GroupAddComponent}

];

@NgModule({
  declarations: [
    GroupListComponent,
    GroupAddComponent

  ],
  imports: [
    CommonModule
  ]
})
export class GroupsModule {
}
