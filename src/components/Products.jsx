import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import handleFetchingProducts from '../store/actions/ProductsAction'

const Products = ({ category }) => {
  const { isFetching, error, data: allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchingProducts(category))
  }, [dispatch, category])

  return (
    <div>
      {
        error && <h2>Ha ocurrido un error vuelve a intentar</h2>
      }
      {
        isFetching && <h1>Cargando...</h1>
      }
      {
        !isFetching
        && allProducts
        && allProducts.map(({ name, price, unit }) => {
          return (
            <div>
              <h3>{name}</h3>
              <h4>{price}</h4>
              <p>{unit}</p>
            </div>
          )
        })
      }
    </div>
  )
}

Products.propTypes = {
  category: PropTypes.string.isRequired
}

export default Products
