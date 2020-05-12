// Head
import Head from "next/head";
import FormDonasi from "../components/FormDonasi";
// React Hook State
import { useState } from "react";
// Mobile Detect
import MobileDetect from "mobile-detect";
// axios
import axios from "axios";

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
  // State form
  const [state, setState] = useState({
    valueDonasi: 10000,
    pesan: "asd",
    email: "asd",
    nama: "asd",
  });
  // Loading State
  const [loading, setLoading] = useState(false);
  // SetState using callback so it didnt change the previous state
  const changeDonasi = (donasi) => {
    setState((prevState) => ({
      ...prevState,
      valueDonasi: donasi,
    }));
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(state);
  };

  const handleDonasi = (e) => {
    e.preventDefault();
    // Set Button to be loading
    setLoading(true);
    const data = {
      nama: state.nama,
      nominal: state.valueDonasi,
      pesan: state.pesan,
      email: state.email,
    };
    axios
      .post(
        "http://127.0.0.1:5001/fatur-n-friends/us-central1/app/api/donasi",
        data
      )
      .then((response) => {
        // Set button to stop loading
        setLoading(true);
        snap.pay(response.data.token, {
          onSuccess: function (result) {
            console.log("success");
            console.log(result);
          },
          onPending: function (result) {
            console.log("pending");
            console.log(result);
          },
          onError: function (result) {
            console.log("error");
            console.log(result);
          },
          onClose: function () {
            console.log(
              "customer closed the popup without finishing the payment"
            );
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Donasi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key="SB-Mid-client-bmMY79o9UgKNpgan"
        ></script>
      </Head>
      <FormDonasi
        valueDonasi={state.valueDonasi}
        changeDonasi={changeDonasi}
        getWidth={getWidth}
        handleChange={handleChange}
        handleDonasi={handleDonasi}
        loading={loading}
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
