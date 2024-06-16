import React, { useEffect, useState } from "react";
import path from "path";
import { promises as fs } from "fs";
import { GetStaticProps } from "next";
import {
  Data,
  Season,
  Month,
  SolarTerm,
  Card,
  Color,
  Text,
  Type,
} from "./types";

const getData = async (): Promise<Data> => {
  const filePath = path.join(process.cwd(), "public", "color.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
};

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
  return (
    <>
      <HeaderFC />
      <MainFC data={data} />
      <FooterFC />
    </>
  );
};

const MainFC: React.FC<{ data: Data }> = ({ data }) => {
  return (
    <main className="flex flex-col justify-start my-20 mx-40">
      <SeasonFC seasons={data.seasons} />
    </main>
  );
};

const SeasonFC: React.FC<{ seasons: Season[] }> = ({ seasons }) => {
  return (
    <>
      {seasons.map((season, index) => {
        return (
          <div key={index} className="flex">
            <p key={index} className="text-7xl vertical-lr">
              {season.name.zh}
            </p>
            <div key={index} className="bg-rose-300 w-0.5 mx-2 mb-8"></div>
            <MonthFC months={season.months} />
          </div>
        );
      })}
    </>
  );
};

const MonthFC: React.FC<{ months: Month[] }> = ({ months }) => {
  return (
    <div className="flex flex-col">
      {months.map((month, index) => {
        return (
          <div key={index} className="flex">
            <p key={index} className="text-6xl vertical-lr">
              {month.name.zh}
            </p>
            <div key={index} className="bg-rose-300 w-0.5 mx-2 mb-8"></div>
            <SolarTermFC solarTerms={month.solar_terms} />
          </div>
        );
      })}
    </div>
  );
};

const SolarTermFC: React.FC<{ solarTerms: SolarTerm[] }> = ({ solarTerms }) => {
  return (
    <div className="flex flex-col">
      {solarTerms.map((solarTerm, index) => {
        return (
          <div key={index} className="flex">
            <p key={index} className="text-5xl vertical-lr">
              {solarTerm.name.zh}
            </p>
            <div key={index} className="bg-rose-300 w-0.5 mx-2 mb-8"></div>
            <CardFC cards={solarTerm.cards} />
          </div>
        );
      })}
    </div>
  );
};

const CardFC: React.FC<{ cards: Card[] }> = ({ cards }) => {
  return (
    <div className="flex flex-col">
      {cards.map((card, index) => {
        return (
          <div key={index} className="flex">
            <p key={index} className="text-4xl vertical-lr">
              {card.name.zh}
            </p>
            <div key={index} className="bg-rose-300 w-0.5 mx-2 mb-8"></div>
            <ColorFC colors={card.colors} />
          </div>
        );
      })}
    </div>
  );
};

const ColorFC: React.FC<{ colors: Color[] }> = ({ colors }) => {
  return (
    <div className="flex">
      {colors.map((color, index) => {
        return (
          <div key={index} className="flex">
            <p key={index} className="text-4xl vertical-lr">
              {color.name.zh}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
