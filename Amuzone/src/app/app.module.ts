import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormulaireproductComponent } from './formulaireproduct/formulaireproduct.component';
import { AuthentificationService } from './Services/authentification.service';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireproductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
