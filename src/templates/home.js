import React from "react";
import { Link, graphql } from "gatsby";
import parse from "html-react-parser";

// import Bio from "../components/bio";
import Layout from "../components/App/Layout";
import Seo from "../components/App/Seo";
import Banner from "../components/Home/Banner";
import Services from "../components/Home/Services";
import AboutUs from "../components/Home/AboutUs";
// import Clients from "../components/Home/Clients";
import Contact from "../components/Home/Contact";

const Home = ({
  data
}) => {
  return (
    <Layout isHomePage>
      <Seo title="Homepage" />
      <Banner />
      <Services />
      <AboutUs />
      {/* <Clients /> */}
      <Contact />
    </Layout>
  )
}

export default Home
