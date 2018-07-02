import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from './Site'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Layout = ({ children }) => (
    <Site>
      <Helmet
        title="The Web3.js playGround"
        meta={[
          { name: 'description', content: 'Rubin Njagi web3.api playgroud developed in react.js'},
          { name: 'keywords', content: 'web3.js, solidity, blockchain developer portfolio' },
        ]}
        script={[
          { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
        ]}
        link={[
          {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
        ]}
      />
      <Header />
       <Content> 
      {/* {children()}  */}
       </Content> 
      <Footer />
    </Site>
  )
  
  Layout.propTypes = {
    children: PropTypes.func,
  }
  
  export default Layout