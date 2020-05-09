// Semantic UI
import { Segment, Label, Embed, Grid, Responsive } from "semantic-ui-react";
// Head to Store script and stylesheet
import Head from "next/head";
// Video Component
import VideoControl from "./VideoControl";
import VideoList from "./VideoList";
// Youtube
import Youtube from "react-youtube";

const VideoComponent = (props) => {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Responsive as={Grid} minWidth={768} className="margin-0">
        <Grid.Row className="margin-0">
          <Grid.Column width={5} textAlign="center" className="sticky-nav">
            <Segment>
              <VideoControl {...props} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={11}>
            <Grid.Row className="padding-top-20">
              <h2 id={props.videoId}> {props.videoTitle} </h2>
              <div className="video-container">
                <Youtube
                  videoId={props.videoId}
                  className="video"
                  opts={{
                    height: "720",
                    width: "1280",
                    playerVars: {
                      autoplay: 1,
                      rel: 0,
                    },
                  }}
                />
              </div>
            </Grid.Row>
            <Grid.Row className="padding-top-25">
              <VideoList {...props} />
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Responsive>
      <Responsive
        as={Grid}
        {...Responsive.onlyMobile}
        className="margin-0"
        container
        centered
      >
        <Grid.Row>
          <Grid.Column>
            <Grid.Row>
              <h2 id={props.videoId}> {props.videoTitle} </h2>
              <div className="video-container">
                <Youtube
                  videoId={props.videoId}
                  className="video"
                  opts={{
                    height: "720",
                    width: "1280",
                    playerVars: {
                      autoplay: 1,
                      rel: 0,
                    },
                  }}
                />
              </div>
            </Grid.Row>
            <Grid.Row className="padding-top-25">
              <VideoList {...props} />
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Segment>
              <VideoControl {...props} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Responsive>
    </React.Fragment>
  );
};

export default VideoComponent;
