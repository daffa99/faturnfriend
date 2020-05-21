import { useRouter } from 'next/router';
// Semantic UI
import { Menu, Dropdown } from 'semantic-ui-react';
// Head to Store script and stylesheet
import Head from 'next/head';
import Link from 'next/link';
import fnfIcon from './../utils/Images/logo.png';

const Header = (props) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <Head>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
          integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
          crossOrigin='anonymous'
        />
      </Head>
      <div
        className='container-fluid navigasi-container'
        style={{ padding: '0px' }}
      >
        <div className='container' style={{ padding: '0px' }}>
          <nav className='navbar navbar-expand-lg navbar-light navigasi-beranda'>
            <a className='navbar-brand' href='#'>
            <img
                src={fnfIcon}
                className='d-inline-block fnfIcon align-top '
                alt=''
              />
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNavAltMarkup'
              aria-controls='navbarNavAltMarkup'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse w-100 order-3 dual-collapse2'
              id='navbarNavAltMarkup'
            >
            </div>
          </nav>
        </div>
      </div>
      <style jsx>{`
        @font-face {
          font-family: 'Avenir';
          src: url('/Fonts/Avenir-Medium.ttf');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'Helvetica';
          font-style: normal;
          font-weight: normal;
          font-display: swap;
          src: local('Helvetica'),
            url('/Fonts/Helvetica.ttf') format('truetype');
        }

        .navigasi-container {
          padding: 0px;
          width: 100vw;
          z-index: 1;
          background-color: white;
        }

        .navigasi-beranda {
          padding: 10px 0px;
        }

        .fnfIcon {
          height: 64px;
        }

        .dropdown-navbar {
          padding: 0px 35px !important;
        }

        .dropdown-navbar:hover {
          border: none;
        }

        .dropdown-menu {
          left: 35 !important;
        }

        .btn-to-bsa {
          background-color: white;
          padding: 0px 0px;
          border: 2px solid #19345e;
          border-radius: 30px;
          transition: 0.2s;
          margin-left: 10px;
        }

        .btn-to-bsa a:hover {
          transition: 0.2s;
          background-color: #19345e;
          color: white;
          border-radius: 30px;
        }

        .btn-to-bsa a {
          color: #19345e;
          font-family: Avenir;
          font-size: 14px;
          font-weight: 500;
        }

        .navbar-titles {
          padding: 0px 0px;
          margin: auto;
          text-align: center;
        }

        .navbar-titles-active {
          text-align: center;
          padding: 0px 0px;
          margin: auto;
        }

        .navbar-titles-active a {
          color: #223b64 !important;
          font-size: 14px;
          font-weight: 900;
          font-family: Avenir;
        }

        .navbar-titles a {
          color: #223b64;
          font-size: 14px;
          font-weight: 500;
          font-family: Avenir;
        }

        .nav-link {
          padding: 14px 35px !important;
        }

        .nav-link-button {
          padding: 14px 33px !important;
        }

        .navbar-titles a:hover {
          color: #223b64;
        }

        .dropdown-navbar:focus,
        .dropdown-navbar:active,
        .dropdown-navbar:hover {
          outline: white !important;
          box-shadow: none !important;
        }

        .nav-link-active {
          background-color: #f2f2f2;
          padding: 14px 35px !important;
          border-radius: 30px;
        }

        @media (max-width: 1300px) {
        }

        @media (max-width: 1100px) {
          .nav-link {
            padding: 14px 3vw !important;
          }
  
          .nav-link-button {
            padding: 14px 3vw !important;
          }
        }

        @media (max-width: 900px) {
          .btn-to-bsa {
            background-color: white;
            padding: 0px 0px;
            border: 2px solid #19345e;
            border-radius: 30px;
            transition: 0.2s;
            margin-left: 0px;
            margin-top: 14px;
          }
        }

        @media (max-width: 576px) {
          .navigasi-beranda {
            padding: 10px 20px;
          }

          .navbar-titles a {
            font-size: 14px;
            font-weight: 700;
          }

          .navbar-titles {
            padding: 0px 0px;
            margin: 0px 0px;
          }

          .fnfIcon {
            height: 50px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Header;
