import Login from "views/auth/Login.js";
import Questions from "views/questions";
import Jobs from "views/jobs";
import CandidteJobs from "views/jobs/CandidteJobs";
import TechnicalSkillQuiz from "views/quiz/TechnicalSkillQuiz";
import SoftSkillQuiz from "views/quiz/SoftSkillQuiz";
import Summary from "views/quiz/Summary";
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
		path: "/candidte-jobs",
		name: "Jobs",
		icon: "bx bx-run fs-4 text-primary",
		component: CandidteJobs,
		layout: "/super-fruits",
	},

	{
		path: "/technical-quiz",
		name: "Technical Quiz",
		icon: "bx bx-check-circle text-primary fs-4",
		component: TechnicalSkillQuiz,
		layout: "/super-fruits",
	},

	{
		path: "/soft-skill-quiz",
		name: "Soft Skill Quiz",
		icon: "bx bx-check-circle text-primary fs-4",
		component: SoftSkillQuiz,
		layout: "/super-fruits",
	},

	{
		path: "/summary",
		name: "Summary",
		icon: "bx bxs-layout text-primary fs-4",
		component: Summary,
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
