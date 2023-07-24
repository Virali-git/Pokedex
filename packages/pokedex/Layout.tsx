import React, { PropsWithChildren } from "react";
import { Header, Footer } from "@pokedex/components";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header data="Welcome to the Pokedex!" />
      {children}
      <Footer data="Welcome to the Pokedex!" />
    </>
  );
};
export default Layout;
