// const SHEET_URL =
//   "https://docs.google.com/spreadsheets/d/1UGBK79-TVd0Ii4DsygIn0B0cldqLvwKSW5x3cqS1LlM/gviz/tq?tqx=out:json";

// export const getContent = async () => {
//   const response = await fetch(SHEET_URL);
//   if (!response.ok) throw new Error("Failed to fetch content");

//   const text = await response.text();

//   // Google wraps JSON inside function call, so we clean it
//   const json = JSON.parse(
//     text.substring(47).slice(0, -2)
//   );

//   const rows = json.table.rows;

//   // Convert to normal JSON array
//   const data = rows.map((row: any) => ({
//     section: row.c[0]?.v,
//     key: row.c[1]?.v,
//     value: row.c[2]?.v,
//   }));

//   return data;
// };



import { SheetRow } from "../type/content";

const SHEET_ID = "1UGBK79-TVd0Ii4DsygIn0B0cldqLvwKSW5x3cqS1LlM";
const BASE_URL = `https://opensheet.elk.sh/${SHEET_ID}/Sheet1`;

export const getContent = async (): Promise<SheetRow[]> => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch content");
  }

  return response.json();
};
