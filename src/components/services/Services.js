import React, { Fragment } from 'react'
import land from '../../assets/imgOne.jpeg'

export default class Services extends React.Component {
  render () {
    return (
      <Fragment>
        <div className='container column'>
          <div className="contenedor center">
            <img className='img-style' src={land} alt="land" />
          </div>
          <div className="contenedor fila">
            <div className='contenedor column align-center'>
              <p className='text-1 justified'>
                Plant Installation
              </p>
              <p className="text-1 justified">
                We have the ability to purchase plants at wholesale prices, and we have limited overhead costs compared to most other vendors.
                For most plants, we are able to charge roughly the same price that you could buy the plant at a garden center,
                but within this price we include purchase, delivery, and installation.
              </p>
            </div>
            <div className='contenedor column align-center'>
              <p className='text-1'>
                Mulch Installation
              </p>
              <p className="text-1 justified">
                We offer a variety of mulch products, from pinestraw to playground mulch to triple shredded hardwood.
              </p>
            </div>
          </div>
          <div className="contenedor center">
            <p className="flow-text">
            We offer many more services than those listed here.  Please feel free to contact us at ScholarshipLandscaping@gmail.com for more information.
            </p>
          </div>
        </div>
      </Fragment>
    )
  }
}
