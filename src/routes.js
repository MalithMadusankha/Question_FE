import Login from "views/auth/Login.js";
import Questions from "views/questions";
import Jobs from "views/jobs";
import Sales from "views/sales";
import FreshnessCheck from "views/freshnessCheck";


var routes = [
	{
		path: "/login",
		name: "Login",
		icon: "ni ni-key-25 text-info",
		component: Login,
		layout: "/auth",
	},

	{
		path: "/questions",
		name: "Question Setting",
		icon: "bx bx-question-mark fs-4 text-primary",
		component: Questions,
		layout: "/super-fruits",
	},
	
	{
		path: "/jobs",
		name: "Job Setting",
		icon: "bx bx-task fs-4 text-primary",
		component: Jobs,
		layout: "/super-fruits",
	},

	{
		path: "/sales",
		name: "Sales",
		icon: "bx bx-store-alt text-primary fs-4",
		component: Sales,
		layout: "/super-fruits",
	},

	{
		path: "/freshness-checks",
		name: "Freshness Check",
		icon: "bx bx-check-shield text-primary fs-4",
		component: FreshnessCheck,
		layout: "/super-fruits",
	},

];

export default routes;
