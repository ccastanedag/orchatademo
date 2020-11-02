import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import handleFetchingCategories from '../store/actions/CategoriesAction'

const Categories = () => {
  const { isFetching, error, data: allCategories } = useSelector(state => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchingCategories());
  }, [dispatch])
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
        && allCategories 
        && allCategories.map(({ name, description }) => {
          return (
            <div>
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
          );
        })
      }
    </div>
  )
}

export default Categories
