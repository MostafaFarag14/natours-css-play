import { Fragment } from "react";
import About from "../layout/about";
import Features from "../layout/features";
import Header from "../layout/header";


export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <About />
      <Features />
    </Fragment>
  )
}
