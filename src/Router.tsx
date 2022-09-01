import React, { useEffect } from "react";
import { Routes as RouterRoutes, Route, useLocation, useNavigate } from "react-router-dom";
import { Overview } from "./pages/Overview/Overview";
import { Details } from "./pages/Details/Details";
import { DETAILS_URL, OVERVIEW_URL } from "./utils/paths";

export const Routes: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  /** Since we don't have a request for getting data of the separated order,
   * if an user tries to follow the link directly we will redirect the user
   * to the overview page, where we get data about all orders. */

  useEffect(() => {
    if (location.pathname !== OVERVIEW_URL) {
      navigate(OVERVIEW_URL);
    }
  }, []);

  return (
    <RouterRoutes>
      <Route path={OVERVIEW_URL} element={<Overview />} />
      <Route path={`${DETAILS_URL}/:id`} element={<Details />} />
    </RouterRoutes>
  );
};
