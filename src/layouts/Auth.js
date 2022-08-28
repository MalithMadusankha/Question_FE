import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

import routes from "routes.js";

const Auth = (props) => {
	const mainContent = React.useRef(null);
	const location = useLocation();

	React.useEffect(() => {
		document.body.classList.add("bg-primary");
		return () => {
			document.body.classList.remove("bg-primary");
		};
	}, []);
	React.useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		mainContent.current.scrollTop = 0;
	}, [location]);

	const getRoutes = (routes) => {
		return routes.map((prop, key) => {
			if (prop.layout === "/auth") {
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
			<div className="main-content" ref={mainContent}>
				<div className="py-5"
				style={{
					backgroundImage:
						"url(" +
						require("../assets/img/bg1.png").default +
						")",
					backgroundSize: "100%",
					height: "100vh",
					backgroundPosition: "top",
					backgroundRepeat: 'no-repeat'
				}}
				>
					<div className="col-10">
<Container className="">
					<Row className="justify-content-center">
						<Switch>
							{getRoutes(routes)}
							<Redirect from="*" to="/auth/login" />
						</Switch>
					</Row>
				</Container>
					</div>
					<div className="col"></div>
				
				</div>
				{/* Page content */}
				
			</div>
		</>
	);
};

export default Auth;
