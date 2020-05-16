// Semantic UI
import { Card, Header } from "semantic-ui-react";

const ListDonatur = (props) => {
  let donatur = props.listDonatur.map((data) => {
    let nominal = data.nominal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    nominal = `Rp ${nominal}`;
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{data.nama}</Card.Header>
          <Card.Meta>{nominal}</Card.Meta>
          <Card.Description>{data.pesan}</Card.Description>
        </Card.Content>
      </Card>
    );
  });
  return <React.Fragment>{donatur}</React.Fragment>;
};

export default ListDonatur;
