
import { Component, ViewChild } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { NgForm } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { isNullOrUndefined } from "util";
@Component({
  selector: "ngx-import-delivery",
  templateUrl: "./import.delivery.component.html",
  styleUrls:["./import.delivery.component.css"]
})
export class ImportDeliveryComponent {
  source: LocalDataSource = new LocalDataSource();
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    mode: "inline",
    sort: true,
    hideSubHeader: false,
    actions: {
      add: true,
      edit: true,
      delete: false,
      position: "right",
      columnTitle: "Modify",
      width: "10%"
    },
    pager: {
      display: true,
      perPage: 30
    },
    columns: {
      partNo: {
        title: "Part No./Model Code",
        type: "string",
        filter: false,
        editable: false,
        width: "15%"
      },
      partName: {
        title: "Part Name / Model Name",
        type: "number",
        filter: false,
        editable: true,
        width: "30%"
      },
      material: {
        title: "Material",
        type: "number",
        filter: false,
        editable: true,
        width: "15%"
      },
      qty: {
        title: "Quantity",
        type: "number",
        filter: false,
        editable: true,
        width: "15%"
      },
      price: {
        title: "Price/pcs",
        type: "number",
        filter: false,
        editable: true,
        width: "15%"
      },
    }
  };
  constructor() {

  }

  
}
