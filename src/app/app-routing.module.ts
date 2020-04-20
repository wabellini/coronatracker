import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { MainComponent } from './pages/main/main.component';
import { NewsComponent } from './pages/news/news.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { AboutComponent } from './pages/about/about.component';
import { PaisComponent } from './pages/pais/pais.component';

const APPROUTES: Routes = [
    {path: 'main', component: MainComponent},
    {path: 'news', component: NewsComponent},
    {path: 'analitycs', component: AnalyticsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'pais/:id', component: PaisComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'main'}
];

@NgModule({
    imports: [
        RouterModule.forRoot( APPROUTES, {useHash: true} )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
