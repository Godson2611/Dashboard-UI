import React from "react";
import { FaHome, FaFlask, FaCalendarAlt, FaMedkit, FaEnvelope, FaMoneyBill, FaCog } from "react-icons/fa";

function Sidebar() {
  return (
    <>
      <nav className='navbar navbar-inverse visible-xs'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle'
              data-toggle='collapse'
              data-target='#myNavbar'
            >
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>

            <a className='navbar-brand logo ' href='#'>
              Medico Sales
            </a>
          </div>

          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-inxs '>
              <li>
                <a href='#section2 Dashboard'>
                  <FaHome className='sidebar-icon' />
                  Dashboard
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <FaFlask className='sidebar-icon' />
                  Lab Test
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <FaCalendarAlt className='sidebar-icon' />
                  Appointment
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <FaMedkit className='sidebar-icon' />
                  Medicine Order
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <FaEnvelope className='sidebar-icon' />
                  Message
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <FaMoneyBill className='sidebar-icon' />
                  Payment
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <FaCog className='sidebar-icon' />
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='col-sm-2 sidenav hidden-xs '>
        <h2 className='logo '>Medico Sales</h2>
        <ul className='nav nav-pills nav-stacked '>
          <li>
            <a href='#section2'>
              <FaHome className='sidebar-icon' />
              Dashboard
            </a>
          </li>
          <li>
            <a href='#section3'>
              <FaFlask className='sidebar-icon' />
              Lab Test
            </a>
          </li>
          <li>
            <a href='#section3'>
              <FaCalendarAlt className='sidebar-icon' />
              Appointment
            </a>
          </li>
          <li>
            <a href='#section3'>
              <FaMedkit className='sidebar-icon' />
              Medicine Order
            </a>
          </li>
          <li>
            <a href='#section3'>
              <FaEnvelope className='sidebar-icon' />
              Message
            </a>
          </li>
          <li>
            <a href='#section3'>
              <FaMoneyBill className='sidebar-icon' />
              Payment
            </a>
          </li>
          <li>
            <a href='#section3'>
              <FaCog className='sidebar-icon' />
              Settings
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;