import Head from "next/head";
// Component
import ProfilTutor from "../../../components/ProfilTutor";
import ProfilTerkait from "../../../components/ProfilTerkait";
// Responsive Utils
import { responsiveIntialProps } from "../../../utils/functions/responsiveUtils";
// Semantic UI
import { Grid } from "semantic-ui-react";

const ProfilTutorId = ({ getWidth }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Profil : Ilham Faturrahman</title>
      </Head>
      <Grid container stackable>
        <ProfilTutor getWidth={getWidth} />
        <ProfilTerkait />
      </Grid>
    </React.Fragment>
  );
};

ProfilTutorId.getInitialProps = responsiveIntialProps;

export default ProfilTutorId;
