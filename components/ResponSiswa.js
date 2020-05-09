import {
  Grid,
  Divider,
  Item,
  Header,
  Image,
  Container,
} from "semantic-ui-react";

const ResponSiswa = (props) => {
  return (
    <React.Fragment>
      <Grid.Row>
        <Divider horizontal>
          <Header as="h4">Respon Siswa</Header>
        </Divider>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Item.Group>
            <Item className="respon-siswa">
              <Item.Image src="https://pbs.twimg.com/media/BdTb3R7IMAAwRgk.jpg" />

              <Item.Content verticalAlign="middle">
                <Item.Description className="quote">
                  "Lorem ipsum dolor sit amet, consectetu"
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column>
          <Item.Group>
            <Item className="respon-siswa">
              <Item.Image src="https://pbs.twimg.com/media/BdTb3R7IMAAwRgk.jpg" />
              <Item.Content verticalAlign="middle">
                <Item.Description className="quote">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur sit amet rhoncus tellus, quis pretium neque."
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  );
};

export default ResponSiswa;
