// Component
import VideoComponent from "../components/VideoComponent";
// Head
import Head from "next/head";
// axios
import axios from "axios";

const initialState = {
  jenjangActive: "",
  kelasActive: "",
  videoId: "d0gZaYACHvY",
  videoTitle: "Membaca Surat Al Fatihah",
  jenjang: "",
  kelas: "",
  mataPelajaran: "",
  materi: "",
};
class VideoMateri extends React.Component {
  state = initialState;

  // Add InitialProps to fetch youtube video
  static async getInitialProps() {
    const res = await axios.get("https://demo3706331.mockable.io/youtube-vids");
    const listMateri = await res.data;
    return { listMateri };
  }

  handleJenjang = (jenjang) => {
    console.log(jenjang);
    if (this.state.jenjangActive !== jenjang) {
      this.setState({
        jenjangActive: jenjang,
        kelasActive: "",
      });
    } else if (this.state.jenjangActive === jenjang) {
      this.setState({
        jenjangActive: "",
        kelasActive: "",
      });
    }
  };

  handleKelas = (kelas) => {
    console.log(kelas);
    if (this.state.kelasActive !== kelas) {
      this.setState({
        kelasActive: kelas,
      });
    } else if (this.state.kelasActive === kelas) {
      this.setState({
        kelasActive: "",
      });
    }
  };

  handleMateri = (jenjang, kelas, mataPelajaran, materi) => {
    console.log(jenjang + "->" + kelas + "->" + mataPelajaran + "->" + materi);
    this.setState({
      jenjang: jenjang,
      kelas: kelas,
      mataPelajaran: mataPelajaran,
      materi: materi,
    });
  };

  handleVideo = (videoId, videoTitle) => {
    this.setState({ videoId: videoId, videoTitle: videoTitle });
  };
  render() {
    let videoThumbnail = `https://i.ytimg.com/vi/${this.state.videoId}/maxresdefault.jpg`;
    console.log(this.props.listMateri);
    return (
      <React.Fragment>
        <Head>
          <title>Video Materi</title>
        </Head>
        <VideoComponent
          videoTitle={this.state.videoTitle}
          videoId={this.state.videoId}
          videoThumbnail={videoThumbnail}
          handleJenjang={this.handleJenjang}
          handleKelas={this.handleKelas}
          jenjangActive={this.state.jenjangActive}
          kelasActive={this.state.kelasActive}
          handleMateri={this.handleMateri}
          handleVideo={this.handleVideo}
          jenjang={this.state.jenjang}
          mataPelajaran={this.state.mataPelajaran}
          materi={this.state.materi}
          kelas={this.state.kelas}
          listMateri={this.props.listMateri}
        />
      </React.Fragment>
    );
  }
}

export default VideoMateri;
