import React from "react";
import { useMatch, useLocation } from "react-router-dom";
import { LoginRouter } from "../Routes";
import { UserProvider } from "../context/UserContext";

import LoginLayout from "./LoginLayout";

const isLoginRoute = () => !!LoginRouter.find((route) => useMatch(route.path));

const MainLayout = () => {
  const isLoginPage = isLoginRoute();
  return (
    <>
      {isLoginPage ? (
        <LoginLayout />
      ) : (
        <UserProvider>
          <LoggedinLayout />
        </UserProvider>
      )}
    </>
  );
};

export default MainLayout;
