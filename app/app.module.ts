import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import { MultiPlanComponent} from './components/multiplan.component';
import { Multiplanservice} from './services/multiplan.service';


@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent,MultiPlanComponent ],
  bootstrap:    [ AppComponent,MultiPlanComponent ],
  providers:[Multiplanservice]
})
export class AppModule { }
