import React from 'react'
import Header from './blocks/header/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './pages/main/components/Main'
import Catalog from './pages/catalog/components/Catalog'
import Contact from './pages/Contact/Contact'
import Footer from './blocks/footer/Footer'
import NotFount from './pages/catalog/components/notFound/NotFound'
import { StyledParticles } from './particlesStyles'

export default () => {
  const particle = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800,
        },
      },
    },
  }
  return (
    <BrowserRouter>
      <StyledParticles params={particle} />
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/catalog/:id?" component={Catalog} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFount} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
