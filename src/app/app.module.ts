import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AutofocusModule } from "angular-autofocus-fix";

import { AppComponent } from "./app.component";
import { ListComponent } from "./components/list/list.component";
import { AddItemComponent } from "./components/add-item/add-item.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddItemComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, FormsModule, AutofocusModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
