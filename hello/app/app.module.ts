import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DatabindComponent } from './databind/databind.component';
import { EventDemoComponent } from './event-demo/event-demo.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { EmployShowComponent } from './employ-show/employ-show.component';
import { StudentShowComponent } from './student-show/student-show.component';
import { EmployDropdownComponent } from './employ-dropdown/employ-dropdown.component';
import { StudentDropdownComponent } from './student-dropdown/student-dropdown.component';
import { CalcComponent } from './calc/calc.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'first',component:FirstComponent,outlet:'data'},
    {path:'second',component:SecondComponent,outlet:'data'},
    {path:'databind',component:DatabindComponent,outlet:'data'},
    {path:'event-demo',component:EventDemoComponent,outlet:'data'},
    {path:'two-way',component:TwoWayComponent,outlet:'data'},
    {path:'employ-show',component:EmployShowComponent,outlet:'data'},
    {path:'employ-dropdown',component:EmployDropdownComponent,outlet:'data'},
    {path:'student-show',component:StudentShowComponent,outlet:'data'},
    {path:'student-dropdown',component:StudentDropdownComponent,outlet:'data'},
    {path:'calc',component:CalcComponent,outlet:'data'},
  ]
}
]

// const appRoutes : Routes = [
//   {path:'first',component:FirstComponent},
//   {path:'second',component:SecondComponent},
//   {path:'databind',component:DatabindComponent},
//   {path:'event-demo',component:EventDemoComponent},
//   {path:'two-way',component:TwoWayComponent},
//   {path:'employ-show',component:EmployShowComponent},
//   {path:'employ-dropdown',component:EmployDropdownComponent},
//   {path:'student-show',component:StudentShowComponent},
//   {path:'student-dropdown',component:StudentDropdownComponent},
//   {path:'calc',component:CalcComponent},
//   {path:'',component:MenuComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DatabindComponent,
    EventDemoComponent,
    TwoWayComponent,
    EmployShowComponent,
    StudentShowComponent,
    EmployDropdownComponent,
    StudentDropdownComponent,
    CalcComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
