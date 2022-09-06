import React from 'react'

import header from './components/header/header'
import Nav from './components/nav/nav'
import about from './components/about/about'
import experience from './components/experience/experience'
import services from './components/services/services'
import portfolio from './components/portfolio/portfolio'
import testimonials from './components/testimonials/testimonials'
import contact from './components/contact/contact'
import footer from './components/footer/footer'


const App = () => {
  return (
    <>
        <header/>
        <nav />
        <about />
        <experience />
        <services />
        <portfolio />
        <testimonials />
        <contact />
        <footer />
    </>
  )
}

export default App