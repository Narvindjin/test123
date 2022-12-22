import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import { Outlet } from "react-router-dom";
import { Main, Wrapper } from "./style";

function PageWrapper({ ...prop }) {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet {...prop} />
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default PageWrapper;
