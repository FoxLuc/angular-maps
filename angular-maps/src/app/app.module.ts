import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyCrk773AwX01vrSnd4uKBa2p2O1O2XnPIg'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
