/** Account entry screens — no footer dots */
export const SETUP_FLOW_WELCOME_ROUTES = ['AuthWelcomeScreen', 'SignUpScreen', 'SignInScreen'];

/** One dot per setup step (choose plan → invite → connect) */
export const SETUP_FLOW_DOT_COUNT = 3;

export const SETUP_FLOW_ROUTES = [
  'ChoosePlanScreen',
  'InviteHouseholdScreen',
  'ConnectExperienceScreen',
];

export function shouldShowSetupFlowPagination(routeName) {
  return SETUP_FLOW_ROUTES.includes(routeName);
}

export function getSetupFlowPagination(routeName) {
  if (!shouldShowSetupFlowPagination(routeName)) {
    return null;
  }

  const index = SETUP_FLOW_ROUTES.indexOf(routeName);

  return {
    count: SETUP_FLOW_DOT_COUNT,
    index: index >= 0 ? index : 0,
  };
}

export function getSetupFlowRouteForDot(dotIndex) {
  return SETUP_FLOW_ROUTES[dotIndex] ?? SETUP_FLOW_ROUTES[0];
}
