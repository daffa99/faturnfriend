// Semantic UI
import { Card, Header } from "semantic-ui-react";

const ListDonatur = (props) => {
  return (
    <React.Fragment>
      <Card fluid>
        <Card.Content>
          <Card.Header>Agung Aji Nugroho</Card.Header>
          <Card.Meta>Rp. 100,000</Card.Meta>
          <Card.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet rhoncus tellus, quis pretium neque.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card fluid>
        <Card.Content>
          <Card.Header>Hamba Allah</Card.Header>
          <Card.Meta>Rp. 100,000,000</Card.Meta>
          <Card.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet rhoncus tellus, quis pretium neque.
          </Card.Description>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
};

export default ListDonatur;
