import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "json", "works.json");
    const jsonData = fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    res.status(200).json(data);
  } else if (req.method === "POST") {
    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const year = req.body.year;
    const category = req.body.category;
    const tags = req.body.tags;
    const weblink = req.body.weblink;
    const image = req.body.image;
    const body = req.body.body;

    const newWork = {
      title: title,
      subtitle: subtitle,
      year: year,
      category: category,
      tags: [tags],
      category: category,
      weblink: weblink,
      images: [image],
      body: body,
    };

    const filePath = path.join(process.cwd(), "json", "works.json");
    const fileData = fs.readFileSync(filePath);
    console.log(fileData);
    const data = JSON.parse(fileData);

    data.worksData.push(newWork);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "Succès!" });
  }
}
