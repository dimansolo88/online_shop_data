import React from 'react'

const FilterProductType = () => {
  const createField = (...value) => {
    return value.map(s => <div key={[s]}> {s} </div>)
  }

  return <div>{/* {createField('kkbkjb', 'iuhiuhiug')} */}</div>
}

export default FilterProductType
