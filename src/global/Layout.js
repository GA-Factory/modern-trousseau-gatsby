import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
<<<<<<< HEAD

import GlobalStyle from "./GlobalStyle";
import variables from "../styles/styled-components";
import '../styles/fonts.css'

=======

import variables from "../styles/variables";

import GlobalStyle from "./GlobalStyle";
>>>>>>> slider

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
<<<<<<< HEAD
        <ThemeProvider theme={variables}>
          <>
            <Helmet>
              <title>{data.site.siteMetadata.title}</title>
              <meta
                name="apple-mobile-web-app-status-bar-style"
                content="default"
              />
            </Helmet>
            <GlobalStyle />
            <>{children}</>
          </>
        </ThemeProvider>
=======
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
        </Helmet>
        <GlobalStyle />
        <>{children}</>
>>>>>>> slider
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
