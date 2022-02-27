import React, { Fragment } from 'react'
import Content from '../content'
import Header from '../common/header/Header'
import './main.css'

export default class Main extends React.Component {
  render () {
    return (
      <Fragment>
        <header>
          <Header />
        </header>
        <main className='main'>
          <Content />
        </main>
        <footer>
        </footer>
      </Fragment>
    )
  }
}
