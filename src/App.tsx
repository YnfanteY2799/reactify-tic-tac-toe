import { Route, Router, Switch } from "wouter";
import { TOTAL_APP_ROUTES } from "@/pages";

import type { ReactNode } from "react";

export default function App(): ReactNode {
  return (
    <Router>
      <Switch>
        {TOTAL_APP_ROUTES.map(({ path, children, component }, idx) => {
          return <Route path={path} component={component} key={idx} />;
        })}
      </Switch>
    </Router>
  );
}
