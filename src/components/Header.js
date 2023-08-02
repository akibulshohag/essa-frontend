/* eslint-disable react/jsx-no-duplicate-props */
import { isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";
// import styles from '../Component/header.css'
import logo from '../assets/app.png';
import '../styles/Navbar.css';

const Header = () => {
  return (
    <div style={{zIndex:9999}}>
      
      <nav className="navbar navbar-expand-sm navbar-dark bg fixed-top">
        <a className="navbar-brand" href="/" style={{marginTop: '-30px', marginBottom: '-30px'}}><img src={logo} style={{height:'35px',borderRadius:'50%'}} alt="logo" /></a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse mr-5" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-5">
                <Link  className="nav-link active text" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} to={{ pathname: '/'}}>
                  Home
                </Link>
            </li>
            <li className="nav-item dropdown mr-5">
              <a  className="nav-link active dropdown-toggle text"id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About us
              </a>
              <div className="dropdown-menu" style={{marginTop:'-10px'}} aria-labelledby="navbarDropdown">
                <Link data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} className="dropdown-item text" to={{ pathname: '/Card'}}>
                  Our Story
                </Link>
                <Link className="dropdown-item text" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} to={{ pathname: '/about-us/vision-mission'}}>
                  Vision & Mission
                </Link>
                <Link className="dropdown-item text" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} to={{ pathname: '/about-us/directors'}}>
                  Board of Directors
                </Link>
                <Link className="dropdown-item text" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''}  to={{ pathname: '/about-us/management'}}>
                Management Team
                </Link>
              </div>
            </li>
               <li class="nav-item dropdown mr-5" id="myDropdown" > 
                  <a class="nav-link dropdown-toggle active text" href="#" data-bs-toggle="dropdown">  Projects </a>
                  <ul class="dropdown-menu" style={{marginTop:'-10px'}}>
                    <li> <a class="dropdown-item text" href="#">Apartment</a>
                    <ul class="submenu dropdown-menu1 bg mt-2">
                       {/* <a class="dropdown-item text" href="/projects/ongoing/apartment">Ongoing</a> */}
                       <Link className="dropdown-item text" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} to={{ pathname: '/projects/ongoing/apartment'}}>
                           Ongoing
                       </Link>
                       {/* <a class="dropdown-item text" href="/projects/upcoming/apartment">Upcoming</a> */}
                       <Link className="dropdown-item text" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} to={{ pathname: '/projects/upcoming/apartment'}}>
                           Upcoming
                       </Link>
                       {/* <a class="dropdown-item text" href="/projects/completed/apartment">Completed</a> */}
                       <Link className="dropdown-item text" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} to={{ pathname: '/projects/completed/apartment'}}>
                           Completed
                       </Link>
                      </ul>
                    </li>
                    <li>
                       <a class="dropdown-item text" href="#">Land</a>
                      <ul class="submenu dropdown-menu1 bg mt-2">
                       {/* <a class="dropdown-item text" href="/projects/ongoing/land">Ongoing</a> */}
                       <Link className="dropdown-item text" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} to={{ pathname: '/projects/ongoing/land'}}>
                           Ongoing
                       </Link>
                       {/* <a class="dropdown-item text" href="/projects/upcoming/land">Upcoming</a> */}
                       <Link className="dropdown-item text" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} to={{ pathname: '/projects/upcoming/land'}}>
                          Upcoming
                       </Link>
                       <Link className="dropdown-item text" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} to={{ pathname: '/projects/completed/land'}}>
                          Completed
                       </Link>
                       {/* <a class="dropdown-item text" href="/projects/completed/land">Completed</a> */}
                      </ul>
                    </li>
                  </ul>
                </li>

            <li className="nav-item">
              <Link className="nav-link text mr-5 text-white" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} data-toggle="collapse" to={{ pathname: '/news'}}>
                  Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link   className="nav-link text mr-5 text-white" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} to={{ pathname: '/career'}}>
              Career
              </Link>
            </li>
            <li className="nav-item dropdown mr-3">
              <a  className="nav-link active dropdown-toggle text" data-toggle="dropdown"id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contact
              </a>
              <div className="dropdown-menu" style={{marginTop:'-10px'}} aria-labelledby="navbarDropdown">
                <Link className="dropdown-item text" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} to={{ pathname: '/contact/landowners'}}>
                  Landowners
                </Link>
                <Link className="dropdown-item text" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} to={{ pathname: '/contact/buyers'}}>
                  Buyers
                </Link>
                <Link className="dropdown-item text" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} to={{ pathname: '/contact/customers'}}>
                 Customers
                </Link>
                <Link className="dropdown-item text" data-toggle="collapse" data-target={isMobile?`#navbarSupportedContent`:''} to={{ pathname: '/contact/contact-us'}}>
                Contact us
                </Link>
              </div>
            </li>
          
          </ul>
        </div>
      </nav>
      
    </div>
  );
};

export default Header;
