/*eslint-disable*/
import { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
	Collapse,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
} from "reactstrap";
// import { minWidth } from "@material-ui/system";

var ps;

const Sidebar = (props) => {
	const [collapseOpen, setCollapseOpen] = useState();
	// verifies if routeName is the one active (in browser input)
	const activeRoute = (routeName) => {
		return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
	};
	// toggles collapse between opened and closed (true/false)
	const toggleCollapse = () => {
		setCollapseOpen((data) => !data);
	};
	// closes the collapse
	const closeCollapse = () => {
		setCollapseOpen(false);
	};
	// creates the links that appear in the left menu / Sidebar
	const createLinks = (routes) => {
		return routes.map((prop, key) => {
			if (prop.invisible === true) return null;
			if (props.location.pathname.indexOf(prop.layout) === -1) return null;
			return (
				<NavItem key={key}>
					<NavLink
						// className="text-primary"
						to={prop.layout + prop.path}
						tag={NavLinkRRD}
						onClick={closeCollapse}
						activeClassName="active"
						activeClassName="fw-bold"
					>
						<i className={prop.icon} />
						<span>{prop.name}</span>
					</NavLink>
				</NavItem>
			);
		});
	};

	const { bgColor, routes, logo } = props;

	return (
		<Navbar
			className="navbar-vertical fixed-left navbar-light bg-white"
			expand="md"
			id="sidenav-main"
		>
			<Container>
				{/* Toggler */}
				<button
					className="navbar-toggler"
					type="button"
					onClick={toggleCollapse}
				>
					<span className="navbar-toggler-icon" />
				</button>
				{/* Brand */}
				<div
					className="header pb-0 pt-1 pt-lg-5 d-flex align-items-center"
					style={{
						backgroundImage:
							"url(" +
							require("../../assets/img/logo/logo.jpeg").default +
							")",
						backgroundSize: "100px",
						backgroundPosition: "center top",
						backgroundRepeat: 'no-repeat',
						height: "100px"
					}}
				/>
				<br />
				{/* User */}
				<Nav className="align-items-center d-md-none">
					<UncontrolledDropdown nav>
						<DropdownToggle nav className="nav-link-icon">
							<i className="ni ni-bell-55" />
						</DropdownToggle>
						<DropdownMenu
							aria-labelledby="navbar-default_dropdown_1"
							className="dropdown-menu-arrow"
							right
						>
							<DropdownItem>Action</DropdownItem>
							<DropdownItem>Another action</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>Something else here</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
					<UncontrolledDropdown nav>
						<DropdownToggle nav>
						</DropdownToggle>
						<DropdownMenu className="dropdown-menu-arrow" right>
							<DropdownItem className="noti-title" header tag="div">
								<h6 className="text-overflow m-0">Welcome!</h6>
							</DropdownItem>
							<DropdownItem to="/admin/user-profile" tag={Link}>
								<i className="ni ni-single-02" />
								<span>My profile</span>
							</DropdownItem>
							<DropdownItem to="/admin/user-profile" tag={Link}>
								<i className="ni ni-settings-gear-65" />
								<span>Settings</span>
							</DropdownItem>
							<DropdownItem divider />
							<DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
								<i className="ni ni-user-run" />
								<span>Logout</span>
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</Nav>
				{/* Collapse */}
				<Collapse navbar isOpen={collapseOpen}>
					{/* Collapse header */}
					<div className="navbar-collapse-header d-md-none">
						<Row>
							{logo ? (
								<Col className="collapse-brand" xs="6">
									{logo.innerLink ? (
										<Link to={logo.innerLink}>
											<img alt={logo.imgAlt} src={logo.imgSrc} />
										</Link>
									) : (
										<a href={logo.outterLink}>
											<img alt={logo.imgAlt} src={logo.imgSrc} />
										</a>
									)}
								</Col>
							) : null}
							<Col className="collapse-close" xs="6">
								<button
									className="navbar-toggler"
									type="button"
									onClick={toggleCollapse}
								>
									<span />
									<span />
								</button>
							</Col>
						</Row>
					</div>
					{/* Form */}
					<Form className="mt-4 mb-3 d-md-none">
						<InputGroup className="input-group-rounded input-group-merge">
							<Input
								aria-label="Search"
								className="form-control-rounded form-control-prepended"
								placeholder="Search"
								type="search"
							/>
							<InputGroupAddon addonType="prepend">
								<InputGroupText>
									<span className="fa fa-search" />
								</InputGroupText>
							</InputGroupAddon>
						</InputGroup>
					</Form>
					{/* Navigation */}
					<Nav navbar>{createLinks(routes)}</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);
};

Sidebar.defaultProps = {
	routes: [{}],
};

Sidebar.propTypes = {
	// links that will be displayed inside the component
	routes: PropTypes.arrayOf(PropTypes.object),
	logo: PropTypes.shape({
		// innerLink is for links that will direct the user within the app
		// it will be rendered as <Link to="...">...</Link> tag
		innerLink: PropTypes.string,
		// outterLink is for links that will direct the user outside the app
		// it will be rendered as simple <a href="...">...</a> tag
		outterLink: PropTypes.string,
		// the image src of the logo
		imgSrc: PropTypes.string.isRequired,
		// the alt for the img
		imgAlt: PropTypes.string.isRequired,
	}),
};

export default Sidebar;
