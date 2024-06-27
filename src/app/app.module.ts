import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserInputComponent,
        InvestmentResultsComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [
        // Add your service providers here
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }