import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';
import { ChangeDetectionComponent } from './docs/chapters/change-detection/change-detection.component';
import { MemoryLeaksComponent } from './docs/chapters/memory-leaks/memory-leaks.component';

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    ChangeDetectionComponent,
    MemoryLeaksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
