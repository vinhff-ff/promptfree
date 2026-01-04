import { lazy } from "react";
import BaseUrl from "./path";
import MainLayout from "../components/layout/mainLayout";

const Home = lazy(() => import("../page/home"));
const ImgPrompt = lazy(() => import("../page/img-prompt"));
const TrendingPrompt = lazy(() => import("../page/trending/index"));
const DongGop = lazy(() => import("../page/dongGop"));
export interface AppRoute {
  name: string;
  path: string;
  component: React.ComponentType<any>;
  layout?: React.ComponentType<any>;
  showInMenu?: boolean;
}

const routes: AppRoute[] = [
  {
    name: "Trang chủ",
    path: BaseUrl.Home,
    component: Home,
    layout: MainLayout,
    showInMenu: true,
  },
  {
    name: "Trending",
    path: BaseUrl.TrendingPrompt,
    component: TrendingPrompt,
    layout: MainLayout,
    showInMenu: true,
  },
  {
    name: "Tạo ảnh",
    path: BaseUrl.ImgPrompt,
    component: ImgPrompt,
    layout: MainLayout,
    showInMenu: true,
  },
  {
    name: "Đóng góp",
    path: BaseUrl.DongGop,
    component: DongGop,
    layout: MainLayout,
    showInMenu: true,
  }

];

export default routes;
