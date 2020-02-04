import React, { Component } from 'react'
import styles from './Header.module.css'
import Roll from 'react-reveal/Roll'
import MenuToggle from '../common/menuToogle/MenuToogle'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    state = {
      menu: false,
    }

    toogleMenu = () => {
      this.setState({
        menu: !this.state.menu,
      })
    }

    render () {
      return <header className={styles.header}>
        <div className={styles.navMobile}>
          <MenuToggle onToogle={this.toogleMenu} isOpen={this.state.menu} />
        </div>

        <nav className={styles.nav}>

          <Roll left>
            <div className={styles.hiddenShiowMenoDesctop}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/catalog"> catalog </NavLink>
              <NavLink to="/contact"> Contact </NavLink>
            </div>
          </Roll>

        </nav>

        <div className={styles.wpapperMenu}>
          {this.state.menu && <nav className={styles.navMobile}>

            <div className={styles.hiddenShiowMenuMobile}>
              <Roll left>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/catalog">Catalog</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </Roll>
            </div>

          </nav>}
        </div>

      </header>
    }
}

export default Header
