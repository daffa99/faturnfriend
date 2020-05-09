// Semantic UI
import { Card, Label, Image, Icon, Header, Divider } from "semantic-ui-react";
// React Carousel
import AliceCarousel from "react-alice-carousel";

const ProfilTerkait = (props) => {
  let carouselResponsive = {
    0: { items: 1 },
    500: { items: 2 },
    767: { items: 3 },
    1000: { items: 4 },
  };
  // let stagePadding = {
  //   paddingLeft: 0, // in pixels
  //   paddingRight: 100,
  // };
  return (
    <React.Fragment>
      <Divider horizontal className="padding-top-25">
        <Header as="h3" textAlign="left">
          <Header.Content>Tutor Terkait</Header.Content>
        </Header>
      </Divider>
      <AliceCarousel
        mouseTrackingEnabled={true}
        preventEventOnTouchMove={true}
        buttonsDisabled={true}
        responsive={carouselResponsive}
        // stagePadding={stagePadding}
      >
        <Card as="a" href="/profil-tutor/1" centered>
          <Card.Content>
            <Image
              src="https://pbs.twimg.com/profile_images/1217020691091845121/s8NfkSa2_400x400.jpg"
              size="tiny"
              circular
              floated="left"
            />
            <Card.Header>Ilham Faturrahman</Card.Header>
            <Card.Meta>FMIPA Universitas Indonesia</Card.Meta>
            <Card.Meta>
              <Icon name="star" color="yellow" /> {4.5} {"(7 Pesanan)"}
            </Card.Meta>
            <Card.Meta>
              <Label size="mini" color="black">
                <Icon name="graduation cap" /> SMP
              </Label>
              <Label size="mini" color="black">
                <Icon name="graduation cap" /> SMA
              </Label>
            </Card.Meta>
            <Card.Meta>
              <Label size="mini" color="green">
                Fisika
              </Label>
              <Label size="mini" color="green">
                Kimia
              </Label>
              <Label size="mini" color="green">
                Matematika
              </Label>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet rhoncus tellus, quis pretium neque. Suspendisse ac nisi
              in justo sagittis interdum. Aenean velit mi, molestie vel faucibus
              et, laoreet et sem.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card as="a" href="/profil-tutor/1" centered>
          <Card.Content>
            <Image
              src="https://pbs.twimg.com/profile_images/1217020691091845121/s8NfkSa2_400x400.jpg"
              size="tiny"
              circular
              floated="left"
            />
            <Card.Header>Ilham Faturrahman</Card.Header>
            <Card.Meta>FMIPA Universitas Indonesia</Card.Meta>
            <Card.Meta>
              <Icon name="star" color="yellow" /> {4.5} {"(7 Pesanan)"}
            </Card.Meta>
            <Card.Meta>
              <Label size="mini" color="black">
                <Icon name="graduation cap" /> SMP
              </Label>
              <Label size="mini" color="black">
                <Icon name="graduation cap" /> SMA
              </Label>
            </Card.Meta>
            <Card.Meta>
              <Label size="mini" color="green">
                Fisika
              </Label>
              <Label size="mini" color="green">
                Kimia
              </Label>
              <Label size="mini" color="green">
                Matematika
              </Label>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet rhoncus tellus, quis pretium neque. Suspendisse ac nisi
              in justo sagittis interdum. Aenean velit mi, molestie vel faucibus
              et, laoreet et sem.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card as="a" href="/profil-tutor/1" centered>
          <Card.Content>
            <Image
              src="https://pbs.twimg.com/profile_images/1217020691091845121/s8NfkSa2_400x400.jpg"
              size="tiny"
              circular
              floated="left"
            />
            <Card.Header>Ilham Faturrahman</Card.Header>
            <Card.Meta>FMIPA Universitas Indonesia</Card.Meta>
            <Card.Meta>
              <Icon name="star" color="yellow" /> {4.5} {"(7 Pesanan)"}
            </Card.Meta>
            <Card.Meta>
              <Label size="mini" color="black">
                <Icon name="graduation cap" /> SMP
              </Label>
              <Label size="mini" color="black">
                <Icon name="graduation cap" /> SMA
              </Label>
            </Card.Meta>
            <Card.Meta>
              <Label size="mini" color="green">
                Fisika
              </Label>
              <Label size="mini" color="green">
                Kimia
              </Label>
              <Label size="mini" color="green">
                Matematika
              </Label>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet rhoncus tellus, quis pretium neque. Suspendisse ac nisi
              in justo sagittis interdum. Aenean velit mi, molestie vel faucibus
              et, laoreet et sem.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card as="a" href="/profil-tutor/1" centered>
          <Card.Content>
            <Image
              src="https://pbs.twimg.com/profile_images/1217020691091845121/s8NfkSa2_400x400.jpg"
              size="tiny"
              circular
              floated="left"
            />
            <Card.Header>Ilham Faturrahman</Card.Header>
            <Card.Meta>FMIPA Universitas Indonesia</Card.Meta>
            <Card.Meta>
              <Icon name="star" color="yellow" /> {4.5} {"(7 Pesanan)"}
            </Card.Meta>
            <Card.Meta>
              <Label size="mini" color="black">
                <Icon name="graduation cap" /> SMP
              </Label>
              <Label size="mini" color="black">
                <Icon name="graduation cap" /> SMA
              </Label>
            </Card.Meta>
            <Card.Meta>
              <Label size="mini" color="green">
                Fisika
              </Label>
              <Label size="mini" color="green">
                Kimia
              </Label>
              <Label size="mini" color="green">
                Matematika
              </Label>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet rhoncus tellus, quis pretium neque. Suspendisse ac nisi
              in justo sagittis interdum. Aenean velit mi, molestie vel faucibus
              et, laoreet et sem.
            </Card.Description>
          </Card.Content>
        </Card>
      </AliceCarousel>
    </React.Fragment>
  );
};

export default ProfilTerkait;
