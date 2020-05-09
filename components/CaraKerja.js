// Semantic UI
import {
  Grid,
  Divider,
  Card,
  Image,
  Header,
  Responsive,
  GridRow,
} from "semantic-ui-react";
// React Carousel
import AliceCarousel from "react-alice-carousel";

// Responsive is for mobile-tablet and Dekstop, Use active as props to identify the active step (1, 2, 3, 4)
const CaraKerja = (props) => {
  let carouselResponsive = {
    0: { items: 2 },
    767: { items: 3 },
  };
  return (
    <React.Fragment>
      <Grid.Row>
        <Divider horizontal>
          <Header as="h4">Cara Kerja</Header>
        </Divider>
      </Grid.Row>
      <Responsive as={Grid} minWidth={768} getWidth={props.getWidth}>
        <Grid.Row columns={4} textAlign="center">
          <Card.Group itemsPerRow={4} centered>
            <Card
              className={
                props.active === 1 ? "cara-kerja-active" : "cara-kerja"
              }
            >
              <Card.Content textAlign="center">
                <Image
                  src="https://image.freepik.com/free-vector/fill-out-form-online-application_41910-325.jpg"
                  size="medium"
                  circular
                ></Image>
                <Card.Header textAlign="center">Isi Form</Card.Header>
                <Card.Description textAlign="center">
                  Lorem Ipsum Dolor Sit Amet
                </Card.Description>
              </Card.Content>
            </Card>
            <Card
              className={
                props.active === 2 ? "cara-kerja-active" : "cara-kerja"
              }
            >
              <Card.Content textAlign="center">
                <Image
                  src="https://image.freepik.com/free-vector/fill-out-form-online-application_41910-325.jpg"
                  size="medium"
                  circular
                ></Image>
                <Card.Header textAlign="center">Isi Form</Card.Header>
                <Card.Description textAlign="center">
                  Lorem Ipsum Dolor Sit Amet
                </Card.Description>
              </Card.Content>
            </Card>
            <Card
              className={
                props.active === 3 ? "cara-kerja-active" : "cara-kerja"
              }
            >
              <Card.Content textAlign="center">
                <Image
                  src="https://image.freepik.com/free-vector/fill-out-form-online-application_41910-325.jpg"
                  size="medium"
                  circular
                ></Image>
                <Card.Header textAlign="center">Isi Form</Card.Header>
                <Card.Description textAlign="center">
                  Lorem Ipsum Dolor Sit Amet
                </Card.Description>
              </Card.Content>
            </Card>
            <Card
              className={
                props.active === 4 ? "cara-kerja-active" : "cara-kerja"
              }
            >
              <Card.Content textAlign="center">
                <Image
                  src="https://image.freepik.com/free-vector/fill-out-form-online-application_41910-325.jpg"
                  size="medium"
                  circular
                ></Image>
                <Card.Header textAlign="center">Isi Form</Card.Header>
                <Card.Description textAlign="center">
                  Lorem Ipsum Dolor Sit Amet
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Row>
      </Responsive>
      <Responsive
        maxWidth={Responsive.onlyMobile.maxWidth}
        // {...Responsive.onlyMobile}
        as={GridRow}
        getWidth={props.getWidth}
      >
        <AliceCarousel
          mouseTrackingEnabled={true}
          preventEventOnTouchMove={true}
          infinite={false}
          buttonsDisabled={true}
          responsive={carouselResponsive}
          // autoPlay={true}
          // autoPlayInterval={2000}
        >
          <Card
            className={props.active === 1 ? "cara-kerja-active" : "cara-kerja"}
          >
            <Card.Content textAlign="center">
              <Image
                src="https://image.freepik.com/free-vector/fill-out-form-online-application_41910-325.jpg"
                size="medium"
                circular
              ></Image>
              <Card.Header textAlign="center">Isi Form</Card.Header>
              <Card.Description textAlign="center">
                Lorem Ipsum Dolor Sit Amet
              </Card.Description>
            </Card.Content>
          </Card>
          <Card
            className={props.active === 2 ? "cara-kerja-active" : "cara-kerja"}
          >
            <Card.Content textAlign="center">
              <Image
                src="https://image.freepik.com/free-vector/fill-out-form-online-application_41910-325.jpg"
                size="medium"
                circular
              ></Image>
              <Card.Header textAlign="center">Isi Form</Card.Header>
              <Card.Description textAlign="center">
                Lorem Ipsum Dolor Sit Amet
              </Card.Description>
            </Card.Content>
          </Card>
          <Card
            className={props.active === 3 ? "cara-kerja-active" : "cara-kerja"}
          >
            <Card.Content textAlign="center">
              <Image
                src="https://image.freepik.com/free-vector/fill-out-form-online-application_41910-325.jpg"
                size="medium"
                circular
              ></Image>
              <Card.Header textAlign="center">Isi Form</Card.Header>
              <Card.Description textAlign="center">
                Lorem Ipsum Dolor Sit Amet
              </Card.Description>
            </Card.Content>
          </Card>
          <Card
            className={props.active === 4 ? "cara-kerja-active" : "cara-kerja"}
          >
            <Card.Content textAlign="center">
              <Image
                src="https://image.freepik.com/free-vector/fill-out-form-online-application_41910-325.jpg"
                size="medium"
                circular
              ></Image>
              <Card.Header textAlign="center">Isi Form</Card.Header>
              <Card.Description textAlign="center">
                Lorem Ipsum Dolor Sit Amet
              </Card.Description>
            </Card.Content>
          </Card>
        </AliceCarousel>
      </Responsive>
    </React.Fragment>
  );
};

export default CaraKerja;
