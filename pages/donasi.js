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
    pesan: "",
    email: "",
    nama: "",
  });
  // Loading State
  const [loading, setLoading] = useState(false);
  // Validation State
  const [valid, setValid] = useState({
    nama: true,
    pesan: true,
    email: true,
    donasi: true,
  });
  // SetState using callback so it didnt change the previous state
  const changeDonasi = (donasi) => {
    setState((prevState) => ({
      ...prevState,
      valueDonasi: donasi,
    }));
    setValid((prevState) => ({
      ...prevState,
      donasi: true,
    }));
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setValid((prevState) => ({
      ...prevState,
      [name]: true,
    }));
    console.log(state);
  };

  const handleValidation = () => {
    if (state.nama === "") {
      setValid((prevState) => ({
        ...prevState,
        nama: false,
      }));
      return false;
    }
    if (state.pesan === "") {
      setValid((prevState) => ({
        ...prevState,
        pesan: false,
      }));
      return false;
    }
    if (state.email === "") {
      setValid((prevState) => ({
        ...prevState,
        email: false,
      }));
      return false;
    }
    if (state.valueDonasi === "") {
      setValid((prevState) => ({
        ...prevState,
        donasi: false,
      }));
      return false;
    }
    return true;
  };

  const handleDonasi = (e) => {
    e.preventDefault();
    console.log(state.nama, state.pesan, state.email, state.valueDonasi);
    // Form validation
    if (handleValidation()) {
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
          "http://127.0.0.1:5000/fatur-n-friends/asia-east2/api/donasi",
          data
        )
        .then((response) => {
          // Set button to stop loading
          setLoading(false);
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
    }
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
        errNama={valid.nama}
        errEmail={valid.email}
        errPesan={valid.pesan}
        errDonasi={valid.donasi}
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
