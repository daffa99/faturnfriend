// Semantic UI
import { Button, Icon, Input, Embed } from "semantic-ui-react";
// Utils
import { generateKelas } from "../utils/functions/listMateri";

const VideoControl = (props) => {
  return (
    <aside className="video-navbar">
      <Input
        className="search-video"
        size="large"
        icon={{ name: "search", circular: true, link: true }}
        placeholder="Search Materi"
      />
      <div className="nav-button">
        <a href="#SMP" data-toggle="collapse">
          <Button
            toggle
            active={props.jenjangActive === "SMP" ? true : false}
            onClick={() => props.handleJenjang("SMP")}
          >
            SMP
          </Button>
        </a>
        <a href="#SMA" data-toggle="collapse">
          <Button
            toggle
            active={props.jenjangActive === "SMA" ? true : false}
            onClick={() => props.handleJenjang("SMA")}
          >
            SMA
          </Button>
        </a>
        <div className="list-kelas-group" id="accordion">
          {generateKelas(props.listMateri, "SMA", props)}
          {generateKelas(props.listMateri, "SMP", props)}
        </div>
        <div className="subscribe-button">
          <a href="https://www.youtube.com/channel/UCYwy6Nbg8TDf8w8gxuZJkmw?sub_confirmation=1">
            <Button animated color="youtube">
              <Button.Content visible>Subscribe on Youtube</Button.Content>
              <Button.Content hidden>
                <Icon name="youtube" /> Fatur n Friends
              </Button.Content>
            </Button>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default VideoControl;
