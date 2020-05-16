// Head
import Head from "next/head";
// Router
import Router from "next/router";
import FormDonasi from "../components/FormDonasi";
// React Hook State
import { useState } from "react";
// Mobile Detect
import MobileDetect from "mobile-detect";
// axios
import axios from "axios";
import useSWR from "swr";

// Check if SSR is from Mobile
const getWidthFactory = (isMobileFromSSR) => () => {
  const ISSR = typeof window === "undefined";
  // If not mobile, it will set its width to tablet
  const ssrValue = isMobileFromSSR ? 767 : 992;
  // console.log(ssrValue);
  // console.log(ISSR);
  return ISSR ? ssrValue : window.innerWidth;
};

const Donasi = (props) => {
  // State form
  const [state, setState] = useState({
    valueDonasi: 10000,
    pesan: "",
    email: "",
    nama: "",
  });
  // Loading State
  const [loading, setLoading] = useState(false);
  // State Donatur
  const initialData = props.data;
  const {
    data,
  } = useSWR(
    "https://asia-east2-fatur-n-friends.cloudfunctions.net/api/donasi/list",
    (url) =>
      axios
        .get(
          "https://asia-east2-fatur-n-friends.cloudfunctions.net/api/donasi/list"
        )
        .then((res) => res.data.donator),
    { initialData }
  );
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
          "https://asia-east2-fatur-n-friends.cloudfunctions.net/api/donasi",
          data
        )
        .then((response) => {
          // Set button to stop loading
          setLoading(false);
          snap.pay(response.data.token, {
            onSuccess: function (result) {
              console.log("success");
              console.log(result);
              alert("Donasi Sukses");
              Router.reload();
            },
            onPending: function (result) {
              console.log("pending");
              console.log(result);
              alert("Donasi Sedang diproses");
              Router.reload();
            },
            onError: function (result) {
              console.log("error");
              console.log(result);
              alert("Terjadi Kesalahan, Mohon Maaf");
              Router.reload();
            },
            onClose: function () {
              console.log(
                "customer closed the popup without finishing the payment"
              );
              alert("Pembayaran dibatalkan");
            },
          });
        })
        .catch((error) => {
          setLoading(false);
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
        getWidth={props.getWidth}
        handleChange={handleChange}
        handleDonasi={handleDonasi}
        loading={loading}
        errNama={valid.nama}
        errEmail={valid.email}
        errPesan={valid.pesan}
        errDonasi={valid.donasi}
        listDonatur={data}
      />
    </React.Fragment>
  );
};

Donasi.getInitialProps = async ({ req }) => {
  const result = new MobileDetect(req.headers["user-agent"]);
  const isMobile = !!result.mobile();
  const response = await axios.get(
    "https://asia-east2-fatur-n-friends.cloudfunctions.net/api/donasi/list"
  );
  const data = response.data.donator;
  // console.log(result.phone());
  console.log(isMobile);
  return {
    getWidth: getWidthFactory(isMobile),
    data: data,
  };
};

export default Donasi;
