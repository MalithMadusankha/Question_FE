import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import NavBar from "components/Navbars";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

const Customer = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/super-fruits") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/ss/serviceprovider-index",
          imgSrc: require("../assets/img/logo/logo.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <NavBar
          {...props}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/super-fruits/quakity-check" />
        </Switch>
        <Container fluid>
        </Container>
      </div>
    </>
  );
};

export default Customer;
