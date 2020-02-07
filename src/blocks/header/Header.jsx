import React, { useContext, useState } from 'react'
import styles from './Header.module.css'
import Roll from 'react-reveal/Roll'
import { NavLink } from 'react-router-dom'
import MenuToggle from '../common/menuToogle/MenuToogle'
import { HeaderWrapper } from './style'
import { Select } from 'antd'
import { ThemeContext } from '../../Layout'

const Header = () => {
  const { handlerTheme } = useContext(ThemeContext)
  const [menu, setMenu] = useState(false)
  const { Option } = Select

  const toogleMenu = () => {
    setMenu(!menu)
  }

  return (
    <HeaderWrapper>
      <div className={styles.navMobile}>
        <MenuToggle
          handleonToogle={toogleMenu}
          isOpen={menu} />
      </div>

      <nav className={styles.nav}>
        <Roll left>
          <div className={styles.hiddenShiowMenoDesctop}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catalog"> catalog </NavLink>
            <NavLink to="/contact"> Contact </NavLink>
          </div>
        </Roll>
        <Select defaultValue="changeTheme" style={{ width: 200 }} onChange={handlerTheme}>
          <Option value="light">light</Option>
          <Option value="dark">Dark</Option>
        </Select>
      </nav>

      <div className={styles.wpapperMenu}>
        {menu && (
          <nav className={styles.navMobile}>
            <div className={styles.hiddenShiowMenuMobile}>
              <Roll left>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/catalog">Catalog</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </Roll>
            </div>
          </nav>
        )}
      </div>
    </HeaderWrapper>
  )
}

export default Header
