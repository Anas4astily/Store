import {
  faCartShopping,
  faPlus,
  faTruckFast,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
export const Links = [
  {
    name: "Users",
    path: "users",
    icon: faUsers,
    role:'1995'
  },
  {
    name: "Add User",
    path: "/dashboard/user/add",
    icon: faPlus,
    role:'1995',
  },
  {
    name: "Categories",
    path: "/dashboard/categories",
    icon: faCartShopping,
    role:['1995','1999']
  },
  {
    name: "AddCategory",
    path: "/dashboard/category/add",
    icon: faPlus,
    role:['1995','1999']
  },
  {
    name: "Products",
    path: "/dashboard/products",
    icon: faTruckFast,
    role:['1995','1999']
  },
  {
    name: "Add Product",
    path: "/dashboard/product/add",
    icon: faPlus,
    role:['1995','1999']
  },
  // {
  //   name: "Writer",
  //   path: "/dashboard/writer",
  //   icon: faPlus,
  //   role:['1995','1996'],
  // },
];
