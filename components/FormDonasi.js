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
  Message,
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
                  <Form.Field required>
                    <label htmlFor="nama">Nama</label>
                    <input
                      id="nama"
                      placeholder="Ilham Faturrahman"
                      name="nama"
                      onChange={props.handleChange}
                    />
                    {!props.errNama ? (
                      <Label basic color="red" pointing>
                        Kolom tidak boleh kosong
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field required>
                    <label htmlFor="pesan">Pesan</label>
                    <input
                      id="pesan"
                      name="pesan"
                      placeholder="Semoga Berkah"
                      onChange={props.handleChange}
                      required
                    />
                    {!props.errPesan ? (
                      <Label basic color="red" pointing>
                        Kolom tidak boleh kosong
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field required>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="fatur@gmail.com"
                      onChange={props.handleChange}
                      required
                    />
                    {!props.errEmail ? (
                      <Label basic color="red" pointing>
                        Kolom tidak boleh kosong
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field required>
                    <label for="valueDonasi">Jumlah Donasi</label>
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
                        id="valueDonasi"
                        name="valueDonasi"
                        type="number"
                        value={props.valueDonasi}
                        onChange={props.handleChange}
                        required
                      />
                      <Button
                        type="submit"
                        color="violet"
                        onClick={props.handleDonasi}
                        loading={props.loading ? true : false}
                      >
                        Donasi Sekarang <Icon name="arrow right" />
                      </Button>
                    </Input>
                    {!props.errDonasi ? (
                      <Label basic color="red" pointing>
                        Kolom tidak boleh kosong
                      </Label>
                    ) : null}
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
              <ListDonatur {...props} />
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
                  <Form.Field required>
                    <label htmlFor="nama">Nama</label>
                    <input
                      id="nama"
                      name="nama"
                      placeholder="Ilham Faturrahman"
                      onChange={props.handleChange}
                      required
                    />
                    {!props.errNama ? (
                      <Label basic color="red" pointing>
                        Kolom tidak boleh kosong
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field required>
                    <label htmlFor="pesan">Pesan</label>
                    <input
                      id="pesan"
                      name="pesan"
                      placeholder="Semoga Berkah"
                      onChange={props.handleChange}
                      required
                    />
                    {!props.errPesan ? (
                      <Label basic color="red" pointing>
                        Kolom tidak boleh kosong
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field required>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      placeholder="fatur@gmail.com"
                      type="email"
                      onChange={props.handleChange}
                      required
                    />
                    {!props.errEmail ? (
                      <Label basic color="red" pointing>
                        Kolom tidak boleh kosong
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field required>
                    <label for="valueDonasi">Jumlah Donasi</label>
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
                        id="valueDonasi"
                        name="valueDonasi"
                        type="number"
                        defaultValue={props.valueDonasi}
                        onChange={props.handleChange}
                        required
                      />
                    </Input>
                    {!props.errDonasi ? (
                      <Label basic color="red" pointing>
                        Kolom tidak boleh kosong
                      </Label>
                    ) : null}
                  </Form.Field>
                  <div style={{ textAlign: "center", paddingTop: "20px" }}>
                    <Button
                      type="submit"
                      color="violet"
                      onClick={props.handleDonasi}
                      loading={props.loading ? true : false}
                    >
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
              <ListDonatur {...props} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </React.Fragment>
  );
};

export default FormDonasi;
