import MobileDetect from "mobile-detect";

// Check if SSR is from Mobile
export const getWidthFactory = (isMobileFromSSR) => () => {
  const ISSR = typeof window === "undefined";
  // If not mobile, it will set its width to tablet
  const ssrValue = isMobileFromSSR ? 767 : 1025;
  // console.log(ssrValue);
  // console.log(ISSR);
  return ISSR ? ssrValue : window.innerWidth;
};

// Use phone instead of mobile beacuse IPad will be count true as isMobile
export const responsiveIntialProps = async ({ req }) => {
  const result = new MobileDetect(req.headers["user-agent"]);
  const isMobile = !!result.phone();
  // console.log(result.phone());
  // console.log(isMobile);
  return {
    getWidth: getWidthFactory(isMobile),
  };
};
