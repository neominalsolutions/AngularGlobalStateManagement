import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeChildComponent } from './home/home-child/home-child.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter/counter';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.development';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HomeChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      counterReducer: counterReducer, // reducer state güncelleyen yapılar.
      // actionda state güncelleme işlemini başlatan yapılar.
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Demo App',
      logOnly: !environment.production,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
