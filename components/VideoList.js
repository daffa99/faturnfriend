// Semantic UI
import { Header, Card } from "semantic-ui-react";
// React Carousel
import AliceCarousel from "react-alice-carousel";

const cardCarousel = (
  listMateri,
  jenjang,
  kelas,
  mataPelajaran,
  materi,
  props
) => {
  if (jenjang === "" || kelas === "" || mataPelajaran === "" || materi === "") {
    return <p>Blank</p>;
  }
  let listDaftarMateri = listMateri[jenjang][kelas][mataPelajaran][materi].map(
    (e) => {
      return (
        <Card
          href={`#${e.videoId}`}
          header={e.Judul}
          meta={e.Kelas}
          description={`Video Materi Terkait ${materi}`}
          onClick={() => props.handleVideo(e.videoId, e.Judul)}
        />
      );
    }
  );
  return listDaftarMateri;
};

const VideoList = (props) => {
  let responsive = {
    0: { items: 2 },
    1024: { items: 3 },
  };
  let stagePadding = {
    paddingLeft: 0, // in pixels
    paddingRight: 100,
  };
  let idMateri = props.materi.replace(/\s+/g, "-").toLowerCase();
  return (
    <React.Fragment>
      <Header as="h2" dividing>
        <Header.Content id={idMateri}>
          Materi Terkait {props.materi}
        </Header.Content>
      </Header>
      <AliceCarousel
        responsive={responsive}
        mouseTrackingEnabled={true}
        preventEventOnTouchMove={true}
        infinite={false}
        buttonsDisabled={true}
        stagePadding={stagePadding}
        controlsStrategy="responsive"
      >
        {cardCarousel(
          props.listMateri,
          props.jenjang,
          props.kelas,
          props.mataPelajaran,
          props.materi,
          props
        )}
      </AliceCarousel>
    </React.Fragment>
  );
};

export default VideoList;
