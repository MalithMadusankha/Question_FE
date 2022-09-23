import Login from "views/auth/Login.js";
import Questions from "views/questions";
import Jobs from "views/jobs";
import CandidteJobs from "views/jobs/CandidteJobs";
import TechnicalSkillQuiz from "views/quiz/TechnicalSkillQuiz";
import SoftSkillQuiz from "views/quiz/SoftSkillQuiz";
import Summary from "views/quiz/Summary";
import Profile from "views/profiles/Profile";
import AdminProfile from "views/profiles/AdminProfile";


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
		layout: "/admin",
	},
	
	{
		path: "/jobs",
		name: "Job Setting",
		icon: "bx bx-task fs-4 text-primary",
		component: Jobs,
		layout: "/admin",
	},

	{
		path: "/candidte-jobs",
		name: "Jobs",
		icon: "bx bx-run fs-4 text-primary",
		component: CandidteJobs,
		layout: "/admin",
	},

	{
		path: "/technical-quiz",
		name: "Technical Quiz",
		icon: "bx bx-check-circle text-primary fs-4",
		component: TechnicalSkillQuiz,
		layout: "/admin",
	},

	{
		path: "/soft-skill-quiz",
		name: "Soft Skill Quiz",
		icon: "bx bx-check-circle text-primary fs-4",
		component: SoftSkillQuiz,
		layout: "/admin",
	},

	{
		path: "/summary",
		name: "Summary",
		icon: "bx bxs-layout text-primary fs-4",
		component: Summary,
		layout: "/admin",
	},

	{
		path: "/profile",
		name: "Profile",
		icon: "bx bx-user text-primary fs-4",
		component: Profile,
		layout: "/admin",
	},

	{
		path: "/profile-admin",
		name: "Profile-admin",
		icon: "bx bx-user text-primary fs-4",
		component: AdminProfile,
		layout: "/admin",
	},

];

export default routes;
