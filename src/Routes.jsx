import React from 'react'
import { Header, Footer } from './blocks/'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StyledParticles } from './particlesStyles'
import { Catalog, NotFount, Main, Contact } from './pages'

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
