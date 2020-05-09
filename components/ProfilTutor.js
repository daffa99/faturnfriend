import {
  Segment,
  Header,
  Grid,
  Image,
  Icon,
  Label,
  Button,
  Responsive,
} from "semantic-ui-react";

const ProfilTutor = (props) => {
  return (
    <React.Fragment>
      <Responsive minWidth={768} getWidth={props.getWidth}>
        <Grid.Row className="padding-top-25">
          <Grid.Column width={12} className="padding-top-25">
            <Segment placeholder>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Header as="h1" textAlign="left" dividing>
                      <Header.Content>Ilham Faturrahman</Header.Content>
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={7} textAlign="center">
                    <figure>
                      <Image
                        src="https://www.biography.com/.image/t_share/MTY3MDUxMjkzMjI1OTIwMTcz/brad-pitt-attends-the-premiere-of-20th-century-foxs--square.jpg"
                        circular
                        size="medium"
                        centered
                      />
                    </figure>
                    <div className="rating-pesanan">
                      <Icon name="star" color="yellow" /> {4.5} {"(7 Pesanan)"}
                    </div>
                    <Label.Group size="large" className="padding-top-20">
                      <Label>Kelas Online</Label>
                      <Label>Tatap Muka</Label>
                    </Label.Group>
                  </Grid.Column>
                  <Grid.Column width={8} textAlign="center">
                    <Header as="h2" className="padding-top-25">
                      Universitas Indonesia
                      <Header.Subheader>Fakultas MIPA</Header.Subheader>
                    </Header>
                    <Label.Group
                      size="large"
                      color="teal"
                      className="padding-top-25"
                    >
                      <Label>
                        Fisika<Label.Detail>SMA</Label.Detail>
                      </Label>
                      <Label>
                        Kimia<Label.Detail>SMA</Label.Detail>
                      </Label>
                      <Label>
                        Matematika<Label.Detail>SMA</Label.Detail>
                      </Label>
                    </Label.Group>
                    <Label.Group size="large" color="blue">
                      <Label>
                        Matematika<Label.Detail>SMP</Label.Detail>
                      </Label>
                      <Label>
                        Kimia<Label.Detail>SMP</Label.Detail>
                      </Label>
                    </Label.Group>
                    <Icon name="map marker alternate" />
                    <span>Jawa Barat - Sukabumi</span>
                    <Segment padded>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur sit amet rhoncus tellus, quis pretium neque.
                      Suspendisse ac nisi in justo sagittis interdum. Aenean
                      velit mi, molestie vel faucibus et, laoreet et sem.
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16} textAlign="center">
                    <Button primary animated>
                      <Button.Content visible>Belajar Sekarang</Button.Content>
                      <Button.Content hidden>
                        Mulai <Icon name="arrow right" />
                      </Button.Content>
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Responsive>
      <Responsive maxWidth={767} getWidth={props.getWidth}>
        <Grid.Row className="padding-top-25">
          <Segment placeholder>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Header as="h2" textAlign="left" dividing>
                    <Header.Content>Ilham Faturrahman</Header.Content>
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16} textAlign="center">
                  <figure>
                    <Image
                      src="https://www.biography.com/.image/t_share/MTY3MDUxMjkzMjI1OTIwMTcz/brad-pitt-attends-the-premiere-of-20th-century-foxs--square.jpg"
                      circular
                      size="medium"
                      centered
                    />
                  </figure>
                  <div className="rating-pesanan">
                    <Icon name="star" color="yellow" /> {4.5} {"(7 Pesanan)"}
                  </div>
                </Grid.Column>
                <Grid.Column width={16} textAlign="center">
                  <Header as="h3" className="padding-top-20">
                    Universitas Indonesia
                    <Header.Subheader>Fakultas MIPA</Header.Subheader>
                  </Header>
                </Grid.Column>
                <Grid.Column width={16} textAlign="center">
                  <Label.Group size="large" className="padding-top-20">
                    <Label>Kelas Online</Label>
                    <Label>Tatap Muka</Label>
                  </Label.Group>
                  <Label.Group size="large" color="teal">
                    <Label>
                      Fisika<Label.Detail>SMA</Label.Detail>
                    </Label>
                    <Label>
                      Kimia<Label.Detail>SMA</Label.Detail>
                    </Label>
                    <Label>
                      Matematika<Label.Detail>SMA</Label.Detail>
                    </Label>
                  </Label.Group>
                  <Label.Group size="large" color="blue">
                    <Label>
                      Matematika<Label.Detail>SMP</Label.Detail>
                    </Label>
                    <Label>
                      Kimia<Label.Detail>SMP</Label.Detail>
                    </Label>
                  </Label.Group>
                  <Icon name="map marker alternate" />
                  <span>Jawa Barat - Sukabumi</span>
                  <Segment padded>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sit amet rhoncus tellus, quis pretium neque.
                    Suspendisse ac nisi in justo sagittis interdum. Aenean velit
                    mi, molestie vel faucibus et, laoreet et sem.
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16} textAlign="center">
                  <Button primary animated>
                    <Button.Content visible>Belajar Sekarang</Button.Content>
                    <Button.Content hidden>
                      Mulai <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Row>
      </Responsive>
      <style jsx>{`
        .rating-pesanan {
          font-weight: bold;
        }
      `}</style>
    </React.Fragment>
  );
};

export default ProfilTutor;
