const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/", "/data-deletion"],
    exact: true,
    component: "DataDeletionPage",
  },
  {
    path: ["/", "/privacy-policy"],
    exact: true,
    component: "PrivacyPolicy",
  },
  {
    path: ["/", "/terms-of-service"],
    exact: true,
    component: "TermsOfService",
  },
];

export default routes;
