import fsPromises from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "json/quotes.json");

export default async function handler(req, res) {
  if (req.method === "GET") {
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);

    res.status(200).json(objectData);
  } else if (req.method === "POST") {
    saveData();
  }

  const saveData = async () => {
    const response = await fetch("/api/quotesDataJson");
  };
}
