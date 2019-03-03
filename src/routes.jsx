import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Topbar from "./components/Topbar/Topbar";
import ScrollToTop from "./components/ScrollTop";

import Home from "./pages/Home";
import Caption from "./pages/Caption/Caption";
import ProfilePreview from "./pages/ProfilePreview/ProfilePreview";

export default props => (
  <React.Fragment>
    <CssBaseline />
    <HashRouter>
      <ScrollToTop>
        <Topbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/caption" component={Caption} />
          <Route exect path="/ProfilePreview" component={ProfilePreview} />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  </React.Fragment>
);
