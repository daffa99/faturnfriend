import { useRouter, Router } from 'next/router';
import React from 'react';
// Semantic UI
import { Menu, Dropdown } from 'semantic-ui-react';
// Head to Store script and stylesheet
import Head from 'next/head';
import Link from 'next/link';
import fnfIcon from './../utils/Images/logo.png';
import VideoMateri from './../utils/Images/video.png';
import CariTutor from './../utils/Images/tutor.png';
import CariLowongan from './../utils/Images/lowongan.png';
import Registrasi from './../utils/Images/registrasi.png';

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
        <div className='container-fluid' >
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
              <ul className='navbar-nav ml-auto'>
                {/* Menu Home */}
                <li
                  className={
                    router.pathname === '/'
                      ? 'nav-item active navbar-titles-active'
                      : 'nav-item navbar-titles'
                  }
                >
                  <Link href='/'>
                    <a
                      href='#'
                      className={
                        router.pathname === '/'
                          ? 'nav-link nav-link-active'
                          : 'nav-link'
                      }
                    >
                      Beranda
                    </a>
                  </Link>
                </li>
                {/* Menu Tentang */}
                <li
                  className={
                    router.pathname === '/tentang'
                      ? 'nav-item active navbar-titles-active'
                      : 'nav-item navbar-titles'
                  }
                >
                  <Link href='/tentang'>
                    <a
                      href='#'
                      className={
                        router.pathname === '/tentang'
                          ? 'nav-link nav-link-active'
                          : 'nav-link'
                      }
                    >
                      Tentang Kami
                    </a>
                  </Link>
                </li>
                {/* Menu Dropdown Untuk Siswa */}
                <li
                  className={
                    router.pathname === '/daftar-produk' ||
                    router.pathname === '/daftar-produk/detail-produk'
                      ? 'nav-item active navbar-titles-active'
                      : 'nav-item navbar-titles'
                  }
                >
                  <div className='dropdown'>
                    <a
                      className={
                        router.pathname === '/daftar-produk' ||
                        router.pathname === '/daftar-produk/detail-produk'
                          ? 'nav-link dropdown-link-active btn dropdown-toggle dropdown-navbar'
                          : 'btn dropdown-toggle dropdown-navbar'
                      }
                      role='button'
                      id='dropdownMenuLink'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Untuk Siswa
                    </a>
                    <div
                      className='dropdown-menu'
                      style={{ left: '35px', padding: '0px' }}
                      aria-labelledby='dropdownMenuLink'
                    >
                      <Link href='/video-materi'>
                        <div style={{ display: 'flex', padding: '0px' }}>
                          <a
                            className='dropdown-item'
                            style={{ padding: '1rem 5rem 1rem 1rem' }}
                            href='#'
                          >
                            <img
                              src={VideoMateri}
                              width='35px'
                              height='35px'
                              alt=''
                              style={{ marginRight: '20px', marginLeft: '5px' }}
                            />
                            Video Materi Pembelajaran
                          </a>
                        </div>
                      </Link>
                      <Link href='/cari-tutor'>
                        <div style={{ display: 'flex', padding: '0px' }}>
                          <a
                            className='dropdown-item'
                            style={{ padding: '1rem 5rem 1rem 1rem' }}
                            href='#'
                          >
                            <img
                              src={CariTutor}
                              width='35px'
                              height='35px'
                              alt=''
                              style={{ marginRight: '20px', marginLeft: '5px' }}
                            />
                            Mencari Tutor
                          </a>
                        </div>
                      </Link>
                    </div>
                  </div>
                </li>
                {/* Menu Dropdown Untuk Tutor */}
                <li
                  className={
                    router.pathname === '/daftar-produk' ||
                    router.pathname === '/daftar-produk/detail-produk'
                      ? 'nav-item active navbar-titles-active'
                      : 'nav-item navbar-titles'
                  }
                >
                  <div className='dropdown'>
                    <a
                      href='#'
                      className={
                        router.pathname === '/daftar-produk' ||
                        router.pathname === '/daftar-produk/detail-produk'
                          ? 'nav-link dropdown-link-active btn dropdown-toggle dropdown-navbar'
                          : 'btn dropdown-toggle dropdown-navbar'
                      }
                      role='button'
                      id='dropdownMenuLink'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Untuk Tutor
                    </a>
                    <div
                      className='dropdown-menu'
                      style={{ left: '35px', padding: '0px' }}
                      aria-labelledby='dropdownMenuLink'
                    >
                      <Link href='/lowongan'>
                        <div style={{ display: 'flex', padding: '0px' }}>
                          <a
                            className='dropdown-item'
                            style={{ padding: '1rem 5rem 1rem 1rem' }}
                            href='#'
                          >
                            <img
                              src={CariLowongan}
                              width='35px'
                              height='35px'
                              alt=''
                              style={{ marginRight: '20px', marginLeft: '5px' }}
                            />
                            Mencari Lowongan
                          </a>
                        </div>
                      </Link>
                      <Link href='/registrasi'>
                        <div style={{ display: 'flex', padding: '0px' }}>
                          <a
                            className='dropdown-item'
                            style={{ padding: '1rem 5rem 1rem 1rem' }}
                            href='#'
                          >
                            <img
                              src={Registrasi}
                              width='35px'
                              height='35px'
                              alt=''
                              style={{ marginRight: '20px', marginLeft: '5px' }}
                            />
                            Registrasi
                          </a>
                        </div>
                      </Link>
                    </div>
                  </div>
                </li>
                {/* Menu Pelayanan */}
                <li
                  className={
                    router.pathname === '/daftar-berita' ||
                    router.pathname === '/daftar-berita/detail-berita'
                      ? 'nav-item active navbar-titles-active'
                      : 'nav-item navbar-titles'
                  }
                >
                  <Link href='/pelayanan'>
                    <a
                      className={
                        router.pathname === '/daftar-berita' ||
                        router.pathname === '/daftar-berita/detail-berita'
                          ? 'nav-link nav-link-active'
                          : 'nav-link'
                      }
                    >
                      Pelayanan
                    </a>
                  </Link>
                </li>
                {/* Button Donasi */}
                <button type='button' className='btn btn-donasi'>
                  <Link href='#'>
                    <a className='nav-link-button'>Donasi</a>
                  </Link>
                </button>
              </ul>
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
          position: fixed;
          z-index: 1001;
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
          border: 1 px solid white;
          padding: 0px 35px !important;
        }

        .dropdown-menu {
          top: 25px;
          left: 35 !important;
        }

        .btn-donasi {
          background-color: white;
          padding: 0px 0px;
          border: 2px solid #78BF32;
          border-radius: 30px;
          transition: 0.2s;
          margin-left: 10px;
        }

        .btn-donasi:hover {
          border-radius: 30px;
          transition: 0.2s;
        }

        .btn-donasi a:hover {
          transition: 0.2s;
          background-color: #78BF32;
          color: white;
          border-radius: 30px;
          text-decoration: none;
        }

        .btn-donasi a {
          color: #19345e;
          font-family: Avenir;
          font-size: 18px;
          font-weight: 500;
          height: 45px;
          border-radius: 30px;
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
          font-size: 18px;
          font-weight: 900;
          font-family: Avenir;
        }

        .dropdown-menu a {
          font-family: Avenir;
          font-size: 14px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #484848;
        }

        .navbar-titles a {
          color: #223b64;
          font-size: 18px;
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

        .dropdown-link-active {
          background-color: #f2f2f2;
          padding: 14px 35px !important;
          border-radius: 30px;
        }

        .dropdown-link-active:hover {
          background-color: #f2f2f2;
          padding: 14px 35px !important;
          border-radius: 30px;
        }

        .dropdown:hover > .dropdown-menu {
          display: block;
        }

        @media (max-width: 1300px) {

        }

        @media (max-width: 1100px) {
          .nav-link {
            padding: 14px 20px !important;
          }
  
          .nav-link-button {
            padding: 14px 20px !important;
          }
        }

        @media (max-width: 991px) {

         .nav-link {
          padding: 14px 20px !important;
        }

        .nav-link-button {
          padding: 14px 20px !important;
        }

          .btn-donasi {
            border-radius: 0px;
            transition: 0.2s;
            width: inherit;
            text-align: left;
            height: 50px;
            margin-top 10px;
          }



          .dropdown-link-active {
            background-color: #f2f2f2;
            padding: 14px 35px !important;
            border-radius: 0px;
            text-align: left;
          }

          .dropdown-link-active:hover {
            background-color: #f2f2f2;
            padding: 14px 20px !important;
            border-radius: 0px;
          }

          .navbar-titles {
            padding: 0px 0px;
            margin: auto 0px;
            text-align: left;
          }

          .navbar-titles.dropdown {
            height: 49px;
          }

          .navbar-titles-active {
            text-align: left;
            padding: 0px 0px;
            margin: auto 0px;
          }

          .nav-link-active {
            background-color: #f2f2f2;
            padding: 14px 20px !important;
            border-radius: 0px;
          }

          .dropdown-navbar {
            padding: 14px 20px !important;
          }

          .btn-donasi {
            background-color: white;
            padding: 0px 0px;
            border: 2px solid #19345e;
            border-radius: 30px;
            transition: 0.2s;
            margin-left: 0px;
            width: fit-content;
          }
        }

        @media (max-width: 576px) {
          .btn-donasi {
            border-radius: 0px;
            transition: 0.2s;
            width: inherit;
            text-align: left;
            height: 50px;
          }

          .btn-donasi a {
            font-weight: 700;
          }

          .navigasi-beranda {
            padding: 10px 20px;
          }

          .navbar-titles a {
            font-weight: 500;
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
