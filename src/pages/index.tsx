import load from "@loadable/component";

import type { RouteProps } from "wouter";

const RootHomePage: any = load(() => import("./Home/index.tsx"));

export const TOTAL_APP_ROUTES: Array<RouteProps> = [{ path: "/", component: RootHomePage, children: [] }];
