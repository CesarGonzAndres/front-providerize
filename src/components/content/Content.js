import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Home from '../home'
import Contacts from '../contacts'
import About from '../about'
import Services from '../services'
import Pricing from '../pricing'

export default class Content extends React.Component {
  render () {
    return (
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </>
    )
  }
}
