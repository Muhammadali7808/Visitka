import React from "react";
import { nanoid } from "nanoid";
import { BrandList } from "../pages/Brand-List";
import { CategoryList } from "../pages/Category-list";
import { SubCategoryList } from "../pages/Sub-Category-List";
import { Product } from "../pages/Product";
import { CreateTabCategory } from "../components/CreateTabs";
import { CategoryEditTab } from "../components/Category-Edit-Tab";
import { CreateSubTabCategory } from "../components/CreateSubCategoryTab";
import { SubEditTab } from "../components/SubEditTab";
import { CreateBrandList } from "../components/BrandCreat";
import { BrandEdit } from "../components/BrandEdit/BrandEdit";
import { Banner } from "../pages/Banner";
import { BannerEdit } from "../components/BannerEdit/BannerEdit";
import { CreateBannerList } from "../components/BannerCreat/bannerCreat";

interface RouteTypes {
  component: React.FC;
  id: string;
  path?: string;
}

export const RoutData: RouteTypes[] = [
  {
    id: nanoid(),
    component: CategoryList,
  },
  {
    id: nanoid(),
    component: SubCategoryList,
    path: "/app/sub-category-list",
  },
  {
    id: nanoid(),
    component: BrandList,
    path: "/app/brand-list",
  },
  {
    id: nanoid(),
    component: Product,
    path: "/app/product",
  },
  {
    id: nanoid(),
    component: CreateTabCategory,
    path: "/app/create-category",
  },
  {
    id: nanoid(),
    component: CategoryEditTab,
    path: "/app/edit-category/:id",
  },
  {
    id: nanoid(),
    component: CreateSubTabCategory,
    path: "/app/sub-category-list/create-sub-category",
  },
  {
    id: nanoid(),
    component: SubEditTab,
    path: "/app/sub-edit-category/:id",
  },
  {
    id: nanoid(),
    component: CreateBrandList,
    path: "/app/create-brand",
  },
  {
    id: nanoid(),
    component:  BrandEdit,
    path: "/app/edit-brand/:id",
  },
  {
    id: nanoid(),
    component: Banner,
    path: "/app/banner",
  },
  {
    id: nanoid(),
    component: BannerEdit,
    path: "/app/edit-banner/:id",
  },
  {
    id: nanoid(),
    component: CreateBannerList,
    path: "/app/create-banner",
  },
];
