// Semantic UI
import {
  Segment,
  Grid,
  Header,
  Icon,
  Button,
  Form,
  Input,
  Label,
  Responsive,
  Divider,
} from "semantic-ui-react";
// ListDonatur Component
import ListDonatur from "./ListDonatur";

const FormDonasi = (props) => {
  return (
    <React.Fragment>
      <Responsive
        minWidth={Responsive.onlyTablet.maxWidth}
        getWidth={props.getWidth}
      >
        <Grid columns={2} container>
          <Grid.Row className="padding-top-25">
            <Grid.Column width={10}>
              <Segment>
                <Header as="h2" textAlign="center">
                  <Header.Content>Donasi</Header.Content>
                </Header>

                <Form>
                  <Form.Field>
                    <label for="nama">Nama</label>
                    <input id="nama" placeholder="Ilham Faturrahman" />
                  </Form.Field>
                  <Form.Field>
                    <label for="pesan">Pesan</label>
                    <input id="pesan" placeholder="Semoga Berkah" />
                  </Form.Field>
                  <Form.Field>
                    <label for="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      placeholder="fatur@gmail.com"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label for="jumlah-donasi">Jumlah Donasi</label>
                    <Button.Group
                      fluid={true}
                      size="big"
                      inverted
                      color="green"
                    >
                      <Button onClick={() => props.changeDonasi(10000)}>
                        10 K
                      </Button>
                      <Button onClick={() => props.changeDonasi(25000)}>
                        25 K
                      </Button>
                      <Button onClick={() => props.changeDonasi(50000)}>
                        50 K
                      </Button>
                      <Button onClick={() => props.changeDonasi(100000)}>
                        100 K
                      </Button>
                    </Button.Group>
                    <Input labelPosition="left" className="padding-top-20">
                      <Label basic>Rp. </Label>
                      <input
                        id="jumlah-donasi"
                        name="jumlah-donasi"
                        type="number"
                        value={props.valueDonasi}
                        onChange={props.handleChange}
                      />
                      <Button type="submit" color="violet">
                        Donasi Sekarang <Icon name="arrow right" />
                      </Button>
                    </Input>
                  </Form.Field>
                  {/* <div style={{ textAlign: "center" }}>
                    <Button type="submit" color="blue">
                      Donasi
                    </Button>
                  </div> */}
                </Form>
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as="h2" textAlign="left" className="padding-top-20">
                <Header.Content>Daftar Orang Baik</Header.Content>
              </Header>
              <ListDonatur />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
      <Responsive
        maxWidth={Responsive.onlyTablet.maxWidth}
        getWidth={props.getWidth}
      >
        <Grid container>
          <Grid.Row verticalAlign="middle" className="padding-top-25">
            <Grid.Column width={16}>
              <Segment>
                <Header as="h2" textAlign="center">
                  <Header.Content>Donasi</Header.Content>
                </Header>

                <Form>
                  <Form.Field>
                    <label for="nama">Nama</label>
                    <input id="nama" placeholder="Ilham Faturrahman" />
                  </Form.Field>
                  <Form.Field>
                    <label for="pesan">Pesan</label>
                    <input id="pesan" placeholder="Semoga Berkah" />
                  </Form.Field>
                  <Form.Field>
                    <label for="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      placeholder="fatur@gmail.com"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label for="jumlah-donasi">Jumlah Donasi</label>
                    <Button.Group fluid={true} inverted color="green">
                      <Button onClick={() => props.changeDonasi(10000)}>
                        10 K
                      </Button>
                      <Button onClick={() => props.changeDonasi(25000)}>
                        25 K
                      </Button>
                      <Button onClick={() => props.changeDonasi(50000)}>
                        50 K
                      </Button>
                      <Button onClick={() => props.changeDonasi(100000)}>
                        100 K
                      </Button>
                    </Button.Group>
                    <Input labelPosition="left" className="padding-top-20">
                      <Label basic>Rp. </Label>
                      <input
                        id="jumlah-donasi"
                        name="jumlah-donasi"
                        type="number"
                        defaultValue={props.valueDonasi}
                        onChange={props.handleChange}
                      />
                    </Input>
                  </Form.Field>
                  <div style={{ textAlign: "center", paddingTop: "20px" }}>
                    <Button type="submit" color="violet">
                      Donasi Sekarang <Icon name="arrow right" />
                    </Button>
                  </div>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider horizontal>
              <Header as="h2">
                <Header.Content>Daftar Orang Baik</Header.Content>
              </Header>
            </Divider>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <ListDonatur />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </React.Fragment>
  );
};

export default FormDonasi;
