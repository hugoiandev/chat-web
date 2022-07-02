import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import ChatRoom from "../pages/ChatRoom";
import NewRoom from "../pages/NewRoom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<NewRoom />} />
      <Route path="/chatRoom" element={<ChatRoom />} />
    </Switch>
  );
};

export default Routes;
