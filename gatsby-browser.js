/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onClientEntry = () => {
  console.log("We've started!");
  // callAnalyticsAPI()
};

exports.onInitialClientRender = () => {
  console.log("ReactDOM.render has executed");
};

exports.onRouteUpdateDelayed = () => {
  console.log("We can show loading indicator now");
};

exports.onServiceWorkerUpdateFound = () => {
  console.log("New app version available.");
  // location.reload(true);
  // document.location.reload(true);
};

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  const currentPosition = getSavedScrollPosition(location);
  const queriedPosition = getSavedScrollPosition({ pathname: `/random` });

  window.scrollTo(...(currentPosition || [0, 0]));

  return false;
};
