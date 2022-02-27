import React from 'react'
// import M from 'materialize-css'
import {
  Link
} from 'react-router-dom'

export default class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      humor: ''
    }
  }

  componentDidMount () {
    /* const dropdowns = document.querySelectorAll('.dropdown-trigger')
    const options = {
      inDuration: 300,
      outDuration: 225,
      hover: true,
      belowOrigin: true
    }
    M.Dropdown.init(dropdowns, options)

    const mobile = document.querySelectorAll('nav')
    M.Sidenav.init(mobile) */
  }

  render () {
    return (
      <>
        <nav>
          <ul id='dropdown1' className="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li className="divider"></li>
            <li><a href="#!">three</a></li>
          </ul>
          <div className="nav-wrapper teal">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/about-us">About us</Link></li>
              <li><Link to="/services">Services</Link></li>
              {/*
              <li>
                <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                  Services<i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
               */}
            </ul>
          </div>
        </nav>
      </>
    )
  }
}
