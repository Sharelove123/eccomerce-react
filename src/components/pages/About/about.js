import React from 'react'
import Mytoolbar from './smallcomponents/mytoolbar';
import Mycrousel from './smallcomponents/mycrousel';
import BotComp from './smallcomponents/bottomcomp';
import ProdDetail from './smallcomponents/proddetail';

export default function About() {
  return (
    <>
      <Mytoolbar/>
      <Mycrousel/>
      <ProdDetail/>
      <BotComp/>
    </>
  )
}

