import { NgModule } from "@angular/core";

import { Ng2SmartTableModule } from "ng2-smart-table";
import {
  TransactionRouterModule,
  routedComponents
} from "./transaction.router.module";
import { ThemeModule } from "../../@theme/theme.module";

@NgModule({
  imports: [ThemeModule, Ng2SmartTableModule, TransactionRouterModule],
  declarations: [...routedComponents],
  entryComponents: [],
  providers: []
})
export class TransactionModule {}
