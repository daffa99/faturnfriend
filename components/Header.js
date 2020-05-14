import { useRouter } from 'next/router'
// Semantic UI
import { Menu, Dropdown } from 'semantic-ui-react';
// Head to Store script and stylesheet
import Head from 'next/head';
import Link from 'next/link';
import FnfIcon from '../utils/Images/logo.png';

const Header = (props) => {
  const router = useRouter()
  return (
    <React.Fragment>
      <Head>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
          integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
          crossOrigin='anonymous'
        />
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
        ></script>
      </Head>
      <div className="container-fluid navigasi-container">
        <nav className='navbar navbar-expand-lg navbar-light navigasi-beranda'>
          <a className='navbar-brand' href='#'>
            <img
              src={FnfIcon}
              width='55px'
              height='55px'
              className='d-inline-block iconfnf align-top '
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
          <div className='collapse navbar-collapse w-100 order-3 dual-collapse2' id='navbarNavAltMarkup'>
            <ul className='navbar-nav ml-auto'>
              {/* Menu Home */}
              <li className={router.pathname === "/"? 'nav-item active navbar-titles-active':'nav-item navbar-titles'}>
                <Link href='/'>
                  <a className={router.pathname === "/"? 'nav-link nav-link-active':'nav-link'}>Beranda</a>
                </Link>
              </li>
              {/* Menu Tentang */}
              <li className={router.pathname === "/anothertest1"? 'nav-item active navbar-titles-active':'nav-item navbar-titles'}>
                <Link href='/anothertest1'>
                  <a className={router.pathname === "/anothertest1"? 'nav-link nav-link-active':'nav-link'}>Tentang Kami</a>
                </Link>
              </li>
              {/* Menu Dropdown Untuk Siswa */}
              <li className={router.pathname === "/anothertest"? 'nav-item active navbar-titles-active':'nav-item navbar-titles'}>
                <div className="dropdown show row-dropdown">
                  <a className={router.pathname === "/anothertest"? 'nav-link nav-link-active btn dropdown-toggle dropdown-navbar':'btn dropdown-toggle dropdown-navbar'} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Untuk Siswa
                  </a>
                  <div className="dropdown-menu" style={{left:"35px"}} aria-labelledby="dropdownMenuLink">
                    <Link href='/anothertest'>
                      <div style={{display:"flex", padding:"10px 0px"}}>
                        <a className="dropdown-item isi-dropdown" style={{paddingLeft:"1rem"}} href="#">
                          Video Materi Pembelajaran
                        </a>
                      </div>
                    </Link>
                    <Link href='/anothertest'>
                      <div style={{display:"flex",padding:"10px 0px"}}>
                        <a className="dropdown-item isi-dropdown" style={{paddingLeft:"1rem"}} href="#">
                          Mencari Tutor
                        </a>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
              {/* Menu Dropdown Untuk Tutor */}
              <li className={router.pathname === "/anothertest"? 'nav-item active navbar-titles-active':'nav-item navbar-titles'}>
                <div className="dropdown show row-dropdown">
                  <a className={router.pathname === "/anothertest"? 'nav-link nav-link-active btn dropdown-toggle dropdown-navbar':'btn dropdown-toggle dropdown-navbar'} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Untuk Tutor
                  </a>
                  <div className="dropdown-menu" style={{left:"35px"}} aria-labelledby="dropdownMenuLink">
                    <Link href='/anothertest'>
                      <div style={{display:"flex", padding:"10px 0px"}}>
                        <a className="dropdown-item isi-dropdown" style={{paddingLeft:"1rem"}} href="#">
                          Mencari Lowongan
                        </a>
                      </div>
                    </Link>
                    <Link href='/anothertest'>
                      <div style={{display:"flex",padding:"10px 0px"}}>
                        <a className="dropdown-item isi-dropdown" style={{paddingLeft:"1rem"}} href="#">
                          Registrasi
                        </a>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
              {/* Menu Pelayanan */}
              <li className={router.pathname === "/anothertest2"? 'nav-item active navbar-titles-active':'nav-item navbar-titles'}>
                <Link href='/anothertest2'>
                  <a className={router.pathname === "/anothertest2"? 'nav-link nav-link-active':'nav-link'}>Pelayanan</a>
                </Link>
              </li>  
              {/* Button Donasi */}
              <button type="button" className="btn btn-donasi">
                <Link href='/anothertest2'>
                  <a className='nav-link'>Donasi</a>
                </Link>
              </button>
            </ul>
          </div>
        </nav>
      </div>
      <style jsx>{`
        @font-face {
          font-family: "avenir";
          src : url("./../utils/Fonts/AvenirLTStd-Medium.otf");
        }

        .navigasi-container {
          width:100vw;
          position:fixed;
          top:0;
          -webkit-box-shadow: 0px 5px 5px 0px rgba(223, 225, 229, 0.96);
          -moz-box-shadow: 0px 5px 5px 0px rgba(223, 225, 229, 0.96);
          box-shadow: 0px 5px 5px 0px rgba(223, 225, 229, 0.96);
          z-index: 1001;
          background-color: white;
        }

        .isi-dropdown {
          color: white ;
          font-family: "avenir";
          font-size: 17px;
          font-weight: 500 !important;
        }

        .dropdown-navbar {
         padding:0px 35px !important;
        }

        .dropdown-navbar:hover {
          border:none;
         }

        .dropdown-menu {
          left:35 !important;
        }

        .btn-donasi {
          background-color: #60ce38;
          padding:0px 0px;
          border-radius:30px;
        }

        .btn-donasi a {
          color: white ;
          font-family: "avenir";
          font-size: 17px;
          font-weight: 600;
        }

        .navbar-titles {
          padding: 0px 0px;
          margin: auto;
          text-align:center;
        }


        .navbar-titles-active {
          text-align:center;
          padding: 0px 0px;
          margin: auto;
        }

        .navbar-titles-active a {
          color:#223B64 !important;
          font-size: 17px;
          font-weight: 900;
          font-family: "avenir";
        }

        .navbar-titles a {
          color:#223B64;
          font-size: 17px;
          font-weight: 600;
          font-family: "avenir";
        }

        .nav-link {
          padding: 14px 35px !important;
        }

        .navbar-titles a:hover {
          color:#223B64;
        }

        .dropdown-navbar:focus,.dropdown-navbar:active,.dropdown-navbar:hover {
          outline: white !important;
          box-shadow: none !important;
        }

        .nav-link-active {
          background-color: #F2F2F2;
          padding: 14px 35px !important;
          border-radius:30px;
        }

        @media (max-width: 1300px) {
          
        }

        @media (max-width: 1100px) {
          

        }

        @media (max-width: 767px) {
          .navbar-titles a {
            font-size: 15px;
            font-weight: 600;
          }

          .row-dropdown {
            margin : 10px;
          }

          .row-dropdown a {
            font-size: 15px !important;
            font-weight:600 !important;
          }
        }

        @media (max-width: 576px) {
  
        }
      `}</style>
    </React.Fragment>
  );
};

export default Header;
