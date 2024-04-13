import React, { useState, useEffect } from "react";
import HomepageBanner from "../components/HomepageBanner";
import ListProductClientComponent from "../components/ListProductClientComponent";
import ProductSearchComponent from "../components/ProductSearchComponent";
import { listProducts } from "../services/admin/ProductService";

const Home = () => {
  return (
    <div>
      <HomepageBanner />
      <ListProductClientComponent />
    </div>
  );
};

export default Home;
