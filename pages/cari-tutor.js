// Semantic UI
import { Segment, Grid } from "semantic-ui-react";
// Component
import ListTutor from "../components/ListTutor";
import CaraKerja from "../components/CaraKerja";
import ResponSiswa from "../components/ResponSiswa";
// Head
import Head from "next/head";
// Responsive Utils
import { responsiveIntialProps } from "../utils/functions/responsiveUtils";

const CariTutor = ({ getWidth }) => {
  console.log(getWidth);
  // console.log(innerWidth);
  return (
    <React.Fragment>
      <Head>
        <title>Mencari Tutor</title>
      </Head>
      <Segment>
        <Grid container className="padding-top-20">
          <ListTutor getWidth={getWidth} />
          <CaraKerja getWidth={getWidth} active={1} />
          <ResponSiswa />
        </Grid>
      </Segment>
    </React.Fragment>
  );
};

CariTutor.getInitialProps = responsiveIntialProps;

export default CariTutor;
