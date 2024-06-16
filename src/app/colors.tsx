// import { NextApiRequest, NextApiResponse } from "next";
// import path from "path";
// import { promises as fs } from "fs";
// import {
//   Data,
//   Season,
//   Month,
//   SolarTerm,
//   Card,
//   Color,
//   Text,
//   Type,
// } from "./types";

// let data: Data | null = null;
// let seasons: Text[] = [];
// let months: Text[] = [];
// let solarTerms: Text[] = [];
// let cards: Text[] = [];
// let colors: Color[] = [];

// const loadJsonData = async () => {
//   if (data === null) {
//     const jsonDirectory = path.join(process.cwd(), "src/data");
//     const fileContents = await fs.readFile(
//       jsonDirectory + "/color.json",
//       "utf8"
//     );
//     data = JSON.parse(fileContents);
//   }
// };

// const extractJsonData = async () => {
//   await loadJsonData();

//   data?.seasons.map((season: Season) => {
//     seasons.push(season.name);
//     season.months.map((month: Month) => {
//       months.push(month.name);
//       month.solar_terms.map((solarTerm: SolarTerm) => {
//         solarTerms.push(solarTerm.name);
//         solarTerm.cards.map((card: Card) => {
//           cards.push(card.name);
//           card.colors.map((color: Color) => {
//             colors.push(color);
//           });
//         });
//       });
//     });
//   });

//   if (seasons.length !== data?.total_season_count) {
//     throw new Error(
//       `Seasons length does not match the preset length. Expected ${data?.total_season_count}, but got ${seasons.length}`
//     );
//   }
//   if (months.length !== data?.total_month_count) {
//     throw new Error(
//       `Months length does not match the preset length. Expected ${data?.total_month_count}, but got ${months.length}`
//     );
//   }
//   if (solarTerms.length !== data?.total_solar_term_count) {
//     throw new Error(
//       `Solar Terms length does not match the preset length. Expected ${data?.total_solar_term_count}, but got ${solarTerms.length}`
//     );
//   }
//   if (cards.length !== data?.total_card_count) {
//     throw new Error(
//       `Cards length does not match the preset length. Expected ${data?.total_card_count}, but got ${cards.length}`
//     );
//   }
//   if (colors.length !== data?.total_color_count) {
//     throw new Error(
//       `Colors length does not match the preset length. Expected ${data?.total_color_count}, but got ${colors.length}`
//     );
//   }
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     await extractJsonData();

//     if (!data) {
//       return res.status(500).json({ error: "Failed to load color data" });
//     }

//     const { type, id } = req.query;
//     if (!type || !id) {
//       return res.status(400).json({ error: "Missing type or id" });
//     }

//     const typeNumber = Array.isArray(type)
//       ? parseInt(type[0], 10)
//       : parseInt(type, 10);
//     const idNumber = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);

//     if (isNaN(typeNumber) || isNaN(idNumber)) {
//       return res.status(400).json({ error: "Invalid type or id" });
//     }

//     const enumType = typeNumber as Type;

//     const getData = (array: any[], id: number) =>
//       id - 1 < array.length
//         ? res.status(200).json(array[id - 1])
//         : res.status(400).json({ error: "Invalid id" });

//     switch (enumType) {
//       case Type.SEASON:
//         return getData(seasons, idNumber);
//       case Type.MONTH:
//         return getData(months, idNumber);
//       case Type.SOLAR_TERM:
//         return getData(solarTerms, idNumber);
//       case Type.CARD:
//         return getData(cards, idNumber);
//       case Type.COLOR:
//         return getData(colors, idNumber);
//       default:
//         return res.status(400).json({ error: "Unknown type" });
//     }
//   } catch (error) {
//     return res.status(500).json({ error: (error as Error).message });
//   }
// }
