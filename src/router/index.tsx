import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom"; // Updated import
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        {" "}
        {/* Updated from Switch to Routes */}
        {routes.map((routeItem) => {
          const Component = lazy(
            () => import(`../pages/${routeItem.component}`)
          );
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              element={<Component />} // Updated to use element prop
              // Removed the exact prop as all routes are exact by default in v6
            />
          );
        })}
      </Routes>
      {/* <Footer /> */}
    </Suspense>
  );
};

export default Router;
