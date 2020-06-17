import React from "react";
import Layout from "./Hoc/layout";
import { Switch, Route } from "react-router-dom";
import PrivateRoutes from "./Components/authRoutes/privateRoutes";
import PublicRoutes from "./Components/authRoutes/publicRoutes";

import SignIn from "./Components/signin/index";
import Home from "./Components/home";
import Team from "./Components/team/team";
import TheMatches from "./Components/matches";
import NotFound from "./Components/ui/not_found";

import AdminMatches from "./Components/admin/matches";
import AddEditMatches from "./Components/admin/matches/addEditMatches";
import AdminPlayers from "./Components/admin/players/index";
import AddEditPlayers from "./Components/admin/players/addEditPlayers";

import Dashboard from "./Components/admin/Dashboard";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoutes
          {...props}
          path="/admin_dashboard"
          exact
          component={Dashboard}
        />
        <PrivateRoutes
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />
        <PrivateRoutes
          {...props}
          path="/admin_matches/edit_match/:id"
          exact
          component={AddEditMatches}
        />
        <PrivateRoutes
          {...props}
          path="/admin_matches/add_match"
          exact
          component={AddEditMatches}
        />
        <PrivateRoutes
          {...props}
          path="/admin_players"
          exact
          component={AdminPlayers}
        />
        <PrivateRoutes
          {...props}
          path="/admin_players/edit_player/:id"
          exact
          component={AddEditPlayers}
        />
        <PrivateRoutes
          {...props}
          path="/admin_players/add_player"
          exact
          component={AddEditPlayers}
        />
        <PublicRoutes
          {...props}
          restricted={false}
          path="/"
          exact
          component={Home}
        />
        <PublicRoutes
          {...props}
          restricted={true}
          path="/sign_in"
          exact
          component={SignIn}
        />
        <PublicRoutes
          {...props}
          restricted={false}
          path="/the_team"
          exact
          component={Team}
        />
        <PublicRoutes
          {...props}
          restricted={false}
          path="/the_matches"
          exact
          component={TheMatches}
        />
        <PublicRoutes
          {...props}
          restricted={false}
          exact
          component={NotFound}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
