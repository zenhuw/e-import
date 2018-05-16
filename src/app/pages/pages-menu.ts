import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "nb-home",
    link: "/pages/dashboard",
    home: true
  },
  {
    title: "Transaction",
    icon: "nb-locked",
    link: "/pages/transaction",
    children: [
      {
        title: "Import Delivery Request",
        link: "/pages/transaction/import-delivery"
      }
    ]
  }
];
