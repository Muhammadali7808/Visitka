import { nanoid } from "nanoid";
import {
  ClusterOutlined,
  DatabaseOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

export const data = [
  {
    id: nanoid(),
    label: "Category-List",
    icon: DatabaseOutlined,
    path: "/app",
  },
  {
    id: nanoid(),
    label: "Sub-Category-List",
    icon: ClusterOutlined,
    path: "/app/sub-category-list",
  },
  {
    id: nanoid(),
    label: "Brand-List",
    icon: ShoppingOutlined,
    path: "/app/brand-list",
  },
  {
    id: nanoid(),
    label: "Banner-List",
    icon: DatabaseOutlined,
    path: "/app/banner",
  },
  // {
  //   id: nanoid(),
  //   label: "Product",
  //   icon: ShoppingOutlined,
  //   path: "/app/product",
  // },
];
