import React, { useContext, useState } from 'react'
import styles from './Header.module.css'
import MenuToggle from '../common/menuToogle/MenuToogle'
import { HeaderWrapper } from './style'
import { Select } from 'antd'
import { ThemeContext } from '../../Layout'
import { Menu } from './Menu'

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
        <MenuToggle handleonToogle={toogleMenu} isOpen={menu} />
      </div>

      <nav className={styles.nav}>
        <div className={styles.hiddenShiowMenoDesctop}>
          <Menu />
        </div>

        <Select
          defaultValue="changeTheme"
          style={{ width: 200 }}
          onChange={handlerTheme}
        >
          <Option value="light">light</Option>
          <Option value="dark">Dark</Option>
        </Select>
      </nav>

      {/* mobile menu */}
      <div className={styles.wpapperMenu}>
        {menu && (
          <nav className={styles.navMobile}>
            <div className={styles.hiddenShiowMenuMobile}>
              <Menu />
            </div>
          </nav>
        )}
      </div>
    </HeaderWrapper>
  )
}

export default Header
