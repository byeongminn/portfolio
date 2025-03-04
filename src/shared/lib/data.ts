import fs from "fs";
import path from "path";

export function loadJsonData(fileName: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      `src/shared/data/${fileName}.json`
    );
    const jsonData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error(`Error loading JSON file: ${fileName}`, error);
    return null;
  }
}
