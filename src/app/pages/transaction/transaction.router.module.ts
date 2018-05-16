import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TransactionComponent } from "./transaction.component";
import { ImportDeliveryComponent } from "./import-delivery/import.delivery.component";
const routes: Routes = [
  {
    path: "",
    component: TransactionComponent,
    children: [
      {
        path: "import-delivery",
        component: ImportDeliveryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRouterModule {}

export const routedComponents = [TransactionComponent, ImportDeliveryComponent];
