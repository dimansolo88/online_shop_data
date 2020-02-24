import React, { useContext, useState } from 'react'
import styles from './Header.module.css'
import { MenuToggle } from '../index'
import {
  HeaderWrapper,
  HiddenShowMenuDesktop,
  Nav,
  NavMobile, StyleSelect,
  WrapperMenu,
} from './style'
import { Select } from 'antd'
import { Menu } from './menu/Menu'
import { ThemeContext } from '../../App'

const Header = () => {
  const { handlerTheme } = useContext(ThemeContext)
  const [menu, setMenu] = useState(false)
  const { Option } = Select

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <HeaderWrapper>
      <NavMobile>
        <MenuToggle toggleMenu={toggleMenu} isOpen={menu} />
      </NavMobile>

      <Nav>
        <HiddenShowMenuDesktop>
          <Menu />
        </HiddenShowMenuDesktop>

        <StyleSelect
          defaultValue="dark"
          onChange={handlerTheme}
        >
          <Option value="light">light</Option>
          <Option value="dark">Dark</Option>
        </StyleSelect>
      </Nav>

      {/* mobile menu */}
      <WrapperMenu>
        {menu && (
          <nav className={styles.navMobile}>
            <div className={styles.hiddenShiowMenuMobile}>
              <Menu hideMenu={toggleMenu} />
            </div>
          </nav>
        )}
      </WrapperMenu>
    </HeaderWrapper>
  )
}

export default Header
