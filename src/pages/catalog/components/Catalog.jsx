import React from 'react'
import styles from './catalog.module.css'
import LIne from '../../../blocks/common/LIne'
import Fade from 'react-reveal/Fade'
import Products from './products/Products'
import Search from '../../../blocks/common/Search/Search'
import { connect } from 'react-redux'
import { getProductsSelector } from '../../../store/reducers/selectors/getProductsSelector'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { getProduct } from '../../../store/reducers/product'
import { setSearchFilter, sortPriceUp, srtPriceDown } from '../../../store/actions/products'
import ButtonSortPrice from './products/ButtonSort/ButtonSortPrice'

const Catalog = React.memo(({ products, srtPriceDown, sortPriceUp, setSearchFilter, getProduct }) => {
  console.log('render catalog')
  return (

    <div className={styles.myProjects}>
      <Fade big cascade>
        <div className={styles.container}>
          <div className={styles.headerTitle}>

            <h2 className={styles.blockTitle}> Catalog </h2>
            <Search setSearchFilter={setSearchFilter} />
            <LIne />
            <ButtonSortPrice
              srtPriceDown={srtPriceDown}
              sortPriceUp={sortPriceUp} />
          </div>

          <div>
            <Products products={products} getProduct={getProduct} />
          </div>

        </div>

      </Fade>
    </div>

  )
})

const mapStateToProps = state => ({
  products: getProductsSelector(state),

})
export default compose(
  withRouter,
  connect(mapStateToProps, {
    getProduct,
    sortPriceUp,
    srtPriceDown,
    setSearchFilter,
  }))(Catalog)
