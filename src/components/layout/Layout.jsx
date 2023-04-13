import React from 'react'
import Header from './Header'
import Footer from './Footer'
 
const Layout = ({props,  setShowWalletModal, setShowCurrentModal, showFunc, isAdminLogged, children}) => {
  return (
    <>
        <Header props={props}  setShowWalletModal={setShowWalletModal} setShowCurrentModal={setShowCurrentModal} showFunc={showFunc} isAdminLogged={isAdminLogged}/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout