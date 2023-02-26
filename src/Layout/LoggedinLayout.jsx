import React, { useEffect, useContext } from "react";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";

import { AuthenticationService } from "../services/AuthService";
import { MainRouter } from "../routers";
import { UserContext } from "../context";

const Wrapper = ({ Component }) => <Component />;

const LoggedinLayout = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const isLoggedIn = AuthenticationService.isLoggedIn();
    if (!isLoggedIn) {
      navigate(
        `/login?returnUrl=${encodeURIComponent(
          window.location.href.replace(window.location.origin, "")
        )}`
      );
    } else setCurrentUser(AuthenticationService.getCurrentUser());
  }, [navigate, setCurrentUser]);
};
