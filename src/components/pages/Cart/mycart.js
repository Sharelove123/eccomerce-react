import React from 'react'
import Mytoolbar from './smallcomponents/mytoolbar'
import Cartprodlist from './smallcomponents/cartprodlist'

export default function Mycart() {
  return (
    <div style={{background:'white'}}>
      <Mytoolbar/>
      <Cartprodlist/>
    </div>
  )
}
