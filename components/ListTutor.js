// Semantic UI
import {
  Card,
  Button,
  Grid,
  Input,
  Image,
  Rating,
  Pagination,
  Label,
  Icon,
  Responsive,
  Dropdown,
} from "semantic-ui-react";

const filterOptions = [
  { key: "SMP", text: "SMP", value: "SMP" },
  { key: "SMA", text: "SMA", value: "SMA" },
  { key: "matematika", text: "Matematika", value: "matematika" },
  { key: "fisika", text: "Fisika", value: "fisika" },
  { key: "biologi", text: "Biologi", value: "biologi" },
  { key: "kimia", text: "Kimia", value: "kimia" },
  { key: "bahasa-inggris", text: "Bahasa Inggris", value: "bahasa-inggris" },
  {
    key: "bahasa-indonesia",
    text: "Bahasa Indonesia",
    value: "bahasa-indonesia",
  },
];

const urutkanOptions = [
  { key: "rating", text: "Rating", value: "rating" },
  { key: "popularitas", text: "Popularitas", value: "Popularitas" },
];

const handleChange = (e, data) => {
  console.log(data.value);
};

const handleFilter = (e, data) => {
  console.log(data.value);
};

// Responsive is for mobile and tablet-dekstop
const ListTutor = (props) => {
  return (
    <React.Fragment>
      <Responsive
        as={Grid}
        minWidth={Responsive.onlyTablet.minWidth}
        getWidth={props.getWidth}
      >
        <Grid.Row verticalAlign="middle">
          <Grid.Column floated="left" width={5}>
            <Input
              className="search-tutor"
              size="large"
              icon={{ name: "search", circular: true, link: true }}
              placeholder="Cari Tutor"
            />
          </Grid.Column>
          <Grid.Column
            floated="right"
            textAlign="right"
            width={11}
            verticalAlign="bottom"
          >
            <Dropdown
              multiple
              selection
              placeholder="Filter"
              options={filterOptions}
              onChange={handleChange}
              className="dropdown-filter"
            ></Dropdown>
            <Dropdown
              selection
              placeholder="Urutkan"
              options={urutkanOptions}
              onChange={handleChange}
            ></Dropdown>
          </Grid.Column>
        </Grid.Row>
        <Grid>
          <Grid.Row>
            <Card.Group itemsPerRow={4} doubling>
              <Card as="a" href="/profil-tutor/1">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sit amet rhoncus tellus, quis pretium neque.
                    Suspendisse ac nisi in justo sagittis interdum. Aenean velit
                    mi, molestie vel faucibus et, laoreet et sem.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="/profil-tutor/1/pesan">
                    <Button
                      floated="right"
                      content="Pesan Tutor"
                      icon="arrow right"
                      labelPosition="right"
                    ></Button>
                  </a>
                </Card.Content>
              </Card>
              <Card as="a" href="/profil-tutor/1">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sit amet rhoncus tellus, quis pretium neque.
                    Suspendisse ac nisi in justo sagittis interdum. Aenean velit
                    mi, molestie vel faucibus et, laoreet et sem.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="/profil-tutor/1/pesan">
                    <Button
                      floated="right"
                      content="Pesan Tutor"
                      icon="arrow right"
                      labelPosition="right"
                    ></Button>
                  </a>
                </Card.Content>
              </Card>
              <Card as="a" href="/profil-tutor/1">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sit amet rhoncus tellus, quis pretium neque.
                    Suspendisse ac nisi in justo sagittis interdum. Aenean velit
                    mi, molestie vel faucibus et, laoreet et sem.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="/profil-tutor/1/pesan">
                    <Button
                      floated="right"
                      content="Pesan Tutor"
                      icon="arrow right"
                      labelPosition="right"
                    ></Button>
                  </a>
                </Card.Content>
              </Card>
              <Card as="a" href="/profil-tutor/1">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sit amet rhoncus tellus, quis pretium neque.
                    Suspendisse ac nisi in justo sagittis interdum. Aenean velit
                    mi, molestie vel faucibus et, laoreet et sem.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="/profil-tutor/1/pesan">
                    <Button
                      floated="right"
                      content="Pesan Tutor"
                      icon="arrow right"
                      labelPosition="right"
                    ></Button>
                  </a>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column></Grid.Column>
            <Grid.Column textAlign="center">
              <Pagination
                defaultActivePage={1}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={3}
              />
            </Grid.Column>
            {/* <Grid.Column textAlign="right">
              <Button
                content="Mencari Tutor Baru"
                icon="search"
                labelPosition="left"
              ></Button>
            </Grid.Column> */}
          </Grid.Row>
          <Grid.Row className="padding-top-25">
            <Grid.Column textAlign="center">
              <Button
                content="Mencari Tutor Baru"
                icon="search"
                labelPosition="left"
              ></Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
      {/* Responsive Mobile Version */}
      <Responsive
        as={Grid}
        maxWidth={Responsive.onlyMobile.maxWidth}
        getWidth={props.getWidth}
      >
        <Grid.Row className="tanpa-batas">
          <Grid.Column width={16} textAlign="center">
            <Input
              className="search-tutor"
              size="large"
              icon={{ name: "search", circular: true, link: true }}
              placeholder="Cari Tutor"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="tanpa-batas">
          <Grid.Column textAlign="center" width={16}>
            <Dropdown
              multiple
              selection
              placeholder="Filter"
              options={filterOptions}
              onChange={handleChange}
              className="dropdown-filter"
            ></Dropdown>
            <Dropdown button icon="sort" className="icon">
              <Dropdown.Menu>
                <Dropdown.Item
                  text="Rating"
                  value="rating"
                  onClick={handleFilter}
                />
                <Dropdown.Item
                  text="Popularitas"
                  value="popularitas"
                  onClick={handleFilter}
                />
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
        </Grid.Row>
        <Grid className="padding-top-20">
          <Grid.Row>
            <Card.Group itemsPerRow={4} doubling stackable>
              <Card as="a" href="/profil-tutor/1">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sit amet rhoncus tellus, quis pretium neque.
                    Suspendisse ac nisi in justo sagittis interdum. Aenean velit
                    mi, molestie vel faucibus et, laoreet et sem.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="/profil-tutor/1/pesan">
                    <Button
                      floated="right"
                      content="Pesan Tutor"
                      icon="arrow right"
                      labelPosition="right"
                    ></Button>
                  </a>
                </Card.Content>
              </Card>
              <Card as="a" href="/profil-tutor/1">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sit amet rhoncus tellus, quis pretium neque.
                    Suspendisse ac nisi in justo sagittis interdum. Aenean velit
                    mi, molestie vel faucibus et, laoreet et sem.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="/profil-tutor/1/pesan">
                    <Button
                      floated="right"
                      content="Pesan Tutor"
                      icon="arrow right"
                      labelPosition="right"
                    ></Button>
                  </a>
                </Card.Content>
              </Card>
              <Card as="a" href="/profil-tutor/1">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sit amet rhoncus tellus, quis pretium neque.
                    Suspendisse ac nisi in justo sagittis interdum. Aenean velit
                    mi, molestie vel faucibus et, laoreet et sem.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="/profil-tutor/1/pesan">
                    <Button
                      floated="right"
                      content="Pesan Tutor"
                      icon="arrow right"
                      labelPosition="right"
                    ></Button>
                  </a>
                </Card.Content>
              </Card>
              <Card as="a" href="/profil-tutor/1">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sit amet rhoncus tellus, quis pretium neque.
                    Suspendisse ac nisi in justo sagittis interdum. Aenean velit
                    mi, molestie vel faucibus et, laoreet et sem.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="/profil-tutor/1/pesan">
                    <Button
                      floated="right"
                      content="Pesan Tutor"
                      icon="arrow right"
                      labelPosition="right"
                    ></Button>
                  </a>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Row>
          <Grid.Row className="tanpa-batas">
            <Grid.Column textAlign="center">
              <Pagination
                defaultActivePage={1}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={3}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="padding-top-25">
            <Grid.Column textAlign="center">
              <Button
                content="Mencari Tutor Baru"
                icon="search"
                labelPosition="left"
              ></Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </React.Fragment>
  );
};

export default ListTutor;
