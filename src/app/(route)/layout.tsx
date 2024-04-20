"use client";

import React from 'react'
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Login from '../components/auth/Login';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <>
        <GlobalStyle/>
        <Header/>
        {children}
        <Login/>
        <Footer/>
    </>
  )
}