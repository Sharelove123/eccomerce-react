import React from 'react'
import { useLocation } from 'react-router-dom'
import Mytoolbar from './smallcomponents/mytoolbar';
import Mycrousel from './smallcomponents/mycrousel';
import BotComp from './smallcomponents/bottomcomp';
import ProdDetail from './smallcomponents/proddetail';

export default function About() {
  const location = useLocation();
  return (
    <>
      <Mytoolbar/>
      <Mycrousel/>
      <ProdDetail/>
      <BotComp/>
    </>
  )
}

