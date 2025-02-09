import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import Footer from "./Footer";
import GoTop from "./GoTop";
import Navbar from "./Navbar";
import { RecoilRoot } from 'recoil';

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `);

  return (
    <RecoilRoot>
      <div className="global-wrapper" data-is-root-path={isHomePage}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GoTop scrollStepInPx="100" delayInMs="10.50" />
      </div>
    </RecoilRoot>
  )
}
export default Layout;