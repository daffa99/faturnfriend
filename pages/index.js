import React from 'react';
// Semantic UI
import { Card, Button, Image, Rating, Icon, Divider, Label } from 'semantic-ui-react';
// Head to Store script and stylesheet
import Head from 'next/head';
// Component
import Navigasi from '../components/header';
import NavigasiDummy from '../components/headerDummy';
import Link from 'next/link';

import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('../components/MapsFnf'), {
  ssr: false,
});

const extra = (
  <a>
    <Rating icon='star' defaultRating={4} maxRating={5} disabled />
  </a>
);

const Home = (props) => {
  return (
    <React.Fragment>
      <Head>
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
            integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
            crossOrigin='anonymous'
          />
          <link
            rel='stylesheet'
            href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'
          />
      </Head>
      <Navigasi />
      <NavigasiDummy/>
      {/* introduction */}
      <div className='container' style={{height:'85vh', verticalAlign:"center", paddingTop:"5vw" }}>
        <div className='row'>
          <div className='col-md-5 col-sm-12 introduction'>
            <h1>Siapa Kita ?</h1>
            <div className='deskripsi'>
              <p className='text-justify text-indent'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                facilisis pellentesque velit id faucibus. Pellentesque tortor
                felis, lacinia a nulla quis, tincidunt dictum nisi. Nulla
                facilisi. Sed ut tristique libero. Nullam nec sapien quam.
                Mauris sit amet eleifend urna, aliquam dapibus arcu. Nullam
                interdum magna non risus mollis congue...
              </p>
            </div>
            <div className='aboutUs'>
              <Link href='#'>
                <a className='nav-link text-primary'>
                  Baca Selengkapnya &#10140;
                </a>
              </Link>
            </div>
          </div>
          <div className='col-md-7 col-sm-12'>
            <div className='videoIntroduction'>
              <video loop autoPlay>
                <source
                  src='https://www.w3schools.com/jsref/movie.mp4'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* Mencari Tutor */}
      <div className='container' style={{ marginTop: '80px' }}>
      <Divider horizontal style={{fontSize:"24px",fontWeight:"700",marginBottom:"50px"}}>Mencari Tutor</Divider>
        <div className='row'>
          <div className='col-md-8 col-sm-12 CariTutor'>
            <div className='row'>
              <div
                className='col-md-6 col-sm-12'
                style={{ padding: '20px 50px' }}
              >
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
              </div>
              <div
                className='col-md-6 col-sm-12'
                style={{ padding: '20px 50px' }}
              >
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
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12 CariTutor'>
            <div className='deskripsi' >
              <p className='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                facilisis pellentesque velit id faucibus. Pellentesque tortor
                felis, lacinia a nulla quis, tincidunt dictum nisi. Nulla
                facilisi. Sed ut tristique libero justo sagittis interdum. Aenean velit
                mi, molestie vel faucibus et...
              </p>
            </div>
            <div className='aboutUs'>
              <Link href='#'>
                <a className='nav-link text-primary'>
                  Lihat Daftar Tutor &#10140;
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Video Materi */}
      <div className='container' style={{ marginTop: '80px' }}>
        <Divider horizontal style={{fontSize:"24px",fontWeight:"700",marginBottom:"50px"}}>Video Materi</Divider>
        <div className='row'>  
          <div className='col-md-4 col-sm-12 descVideoMateri'>
            <div >
              <p
                className='text-justify text-indent'
                style={{ fontSize: '17px', padding: '20px' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                facilisis pellentesque velit id faucibus. Pellentesque tortor
                felis, lacinia a nulla quis, tincidunt dictum nisi. Nulla
                facilisi. Sed ut tristique libero. Nullam nec sapien quam.
                Mauris sit amet eleifend urna, aliquam dapibus arcu. Nullam
                interdum magna non risus mollis congue...
              </p>
              <div className='aboutUs'>
                <Link href='#'>
                  <a className='nav-link text-primary'>
                    Lihat Semua Video &#10140;
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-md-8 col-sm-12 videoMateri'>
            <div className='videoIntroduction'>
              <video loop autoPlay>
                <source
                  src='https://www.w3schools.com/jsref/movie.mp4'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* Lokasi FnF */}
      <div
        className='container'
        style={{
          marginTop: '120px',
          marginBottom: '100px',
        }}
      >
        <div className='row'>
          <div className='col-md-12' style={{ padding: '30px 75px' }}>
            <p
              className='text-secondary'
              style={{ fontSize: '21px', fontWeight: '600', padding:"7px" }}
            >
              FnF sudah tersebar di 3 provinsi tepatnya di 14 kota
            </p>
            
          </div>
        </div>
        <div className='row'>
          <div className='col-md-7 col-sm-12' style={{ textAlign: 'center' }}>
            <div className='Lokasi'>
              <MapWithNoSSR />
            </div>
          </div>
          <div className='col-md-5 col-sm-12 '>
            <div className='deskripsiMaps'>
              <ul style={{ listStyle: 'none' }}>
                <li className="maps-sugestion">
                  <p className='text-secondary' style={{ fontWeight: '600' }}>
                    Memiliki passion dalam mengajar?
                  </p>
                </li>
                <li className="maps-sugestion">
                  <p className='text-secondary' style={{ fontWeight: '600' }}>
                    Ingin memiliki pengalaman dalam mengajar private online
                    maupun tatap muka?
                  </p>
                </li>
                <li className="maps-sugestion">
                  <p className='text-secondary' style={{ fontWeight: '600' }}>
                    Mencari uang tambahan?
                  </p>
                </li>
              </ul>
              <div className='aboutUs'>
              <Link href='#'>
                <a className='nav-link text-primary'>
                  Mulai menjadi tutor &#10140;
                </a>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      <script
          src='https://code.jquery.com/jquery-3.2.1.slim.min.js'
          integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN'
          crossOrigin='anonymous'
        ></script>
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
          integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q'
          crossOrigin='anonymous'
        ></script>
        <script
          src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
          integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl'
          crossOrigin='anonymous'
        >
      </script>
      <style jsx>{`

        @font-face {
          font-family: "avenir";
          src : url("../utils/Fonts/AvenirLTStd-Medium.otf");
        }

        @font-face {
          font-family: "helvetica";
          src : url("../utils/Fonts/Helvetica.ttf");
        }

        @font-face {
          font-family: "poppins";
          src : url("../utils/Fonts/Poppins-Medium.ttf");
        }

        .introduction h1 {
          font-family: avenir;
          font-size: 45px;
          font-weigth: 900;
        }

        .maps-sugestion {
          padding:0px 0px 50px 0px !important;
        }

        .deskripsi {
          margin-top: 25px;
        }

        .deskripsi p {
          font-size: 18px;
          font-family: avenir;
        }

        .introduction {
          margin: auto;
        }

        .aboutUs {
          font-family: avenir;
          font-size: 18px;
          margin-top: 10px;
          text-align: right;
        }

        .videoIntroduction {
          text-align: center;
        }

        .videoIntroduction video {
          margin: 20px;
          width: 45vw;
          border-radius: 10px;
        }

        .infoTutor ul {
          margin:10px 0px;
        }

        .infoTutor li {
          padding-bottom:10px;
        }

        .nextvideo ul {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          padding-left: 0;
        }

        .nextvideo li {
          list-style: none;
          display: inline-block;
          width: calc(100% / 4);
          height: 120px;
          text-align: center;
        }

        .nextVideo {
          width:200px;
          heigth: 200px:
        }

        .descVideoMateri {
          display:flex;
          justify-content:center;
          align-item:center;
        }

        .deskripsiMaps li {
          padding: 20px 0px;
        }

        .deskripsiMaps li p {
          font-family: avenir;
          font-size: 21px;
        }

        .Lokasi {
          width: 500px;
          height: 350px;
          margin: auto;
          border-radius: 10px;
        }

        @media (max-width: 767px) {
          .videoIntroduction video {
            margin: 20px;
            width: 250px;
            heigth: 200px;
          }

          .nextVideo {
            width: 100px;
            heigth: 100px:
          }

          .Lokasi {
            width: 200px;
            height: 150px;
            margin: auto;
            border-radius: 10px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Home;
