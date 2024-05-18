import React from 'react'
import { useSelector } from 'react-redux'

const SingleProduct = () => {
    const {singleData}=useSelector(state=>state.auth)
    console.log(singleData)
  return (
    <div>
      single Product
    </div>
  )
}

export default SingleProduct
