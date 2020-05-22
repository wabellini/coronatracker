import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Acceso Http
import { HttpClientModule } from '@angular/common/http';

// COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { NewsComponent } from './pages/news/news.component';


import { AppRoutingModule } from './app-routing.module';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { AboutComponent } from './pages/about/about.component';
import { FormsModule } from '@angular/forms';


// PIPES
import { ThousandsPipePipe } from './pipes/thousands-pipe.pipe';
import { PaisComponent } from './pages/pais/pais.component';
import { ListComponent } from './pages/list/list.component';
import { FiltropaisesPipe } from './pipes/filtropaises.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NewsComponent,
    AnalyticsComponent,
    AboutComponent,
    ThousandsPipePipe,
    PaisComponent,
    ListComponent,
    FiltropaisesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
