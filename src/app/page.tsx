// import React from "react";
"use server"
import { getData } from "./utilities";
import MainFC from "./components/MainFC";



const HeaderFC = () => {
  return (
    <header>
      <h1 className="vertical-lr text-8xl mt-40 sticky">中国传统色</h1>
    </header>
  );
};

const FooterFC = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Zhongguo Colors. All rights reserved.
      </p>
      <p>
        Color names and values used on this website is for educational and
        practice purposes only and is sourced from 中国传统色——故宫里的色彩美学
        by 郭浩 and 李建明.
      </p>
    </footer>
  );
};

const App = async () => {
  const data = await getData();
  // const res = await fetch("./api/getData");
  // const data = await res.json();
  return (
    <>
      <HeaderFC />
      <MainFC data={data} />
      {/* <FooterFC /> */}
    </>
  );
};

export default App;
