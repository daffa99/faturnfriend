// Head
import Head from "next/head";
import FormDonasi from "../components/FormDonasi";
// React Hook State
import { useState } from "react";
// Mobile Detect
import MobileDetect from "mobile-detect";

// Check if SSR is from Mobile
const getWidthFactory = (isMobileFromSSR) => () => {
  const ISSR = typeof window === "undefined";
  // If not mobile, it will set its width to tablet
  const ssrValue = isMobileFromSSR ? 767 : 992;
  // console.log(ssrValue);
  // console.log(ISSR);
  return ISSR ? ssrValue : window.innerWidth;
};

const Donasi = ({ getWidth }) => {
  const [state, setState] = useState({ valueDonasi: 10000 });

  const changeDonasi = (donasi) => {
    setState({
      valueDonasi: donasi,
    });
  };

  const handleChange = (e) => {
    setState({
      valueDonasi: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Donasi</title>
      </Head>
      <FormDonasi
        valueDonasi={state.valueDonasi}
        changeDonasi={changeDonasi}
        getWidth={getWidth}
        handleChange={handleChange}
      />
    </React.Fragment>
  );
};

Donasi.getInitialProps = async ({ req }) => {
  const result = new MobileDetect(req.headers["user-agent"]);
  const isMobile = !!result.mobile();
  // console.log(result.phone());
  console.log(isMobile);
  return {
    getWidth: getWidthFactory(isMobile),
  };
};

export default Donasi;
