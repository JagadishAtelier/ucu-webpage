// combine_geojson.js
// Usage: node combine_geojson.js
// Output folder: ./geojson

const https = require("https");
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "geojson");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const repoBase = "raw.githubusercontent.com/johan/world.geo.json/master/countries";

const countryUrls = {
  eu: [
    "DEU.geo.json",
    "FRA.geo.json",
    "ITA.geo.json",
    "NLD.geo.json",
    "DNK.geo.json",
    "FIN.geo.json",
    "ESP.geo.json",
    "SWE.geo.json"
  ],
  apac: [
    "AUS.geo.json",
    "JPN.geo.json",
    "PHL.geo.json",
    "SGP.geo.json",
    "KOR.geo.json",
    "HKG.geo.json",
    "CHN.geo.json"
  ],
  middleEast: [
    "ARE.geo.json",
    "BHR.geo.json",
    "OMN.geo.json",
    "SAU.geo.json",
    "QAT.geo.json",
    "ISR.geo.json"
  ]
};

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      let data = "";
      res.on("data", (chunk) => data += chunk);
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed);
        } catch (err) {
          reject(err);
        }
      });
    }).on("error", reject);
  });
}

async function buildCollection(list) {
  const features = [];
  for (const file of list) {
    const url = `https://${repoBase}/${file}`;
    console.log("Fetching", url);
    try {
      const json = await fetchJson(url);
      if (json.type === "FeatureCollection" && Array.isArray(json.features)) {
        json.features.forEach(f => features.push(f));
      } else if (json.type === "Feature") {
        features.push(json);
      } else {
        console.warn("Unexpected JSON structure in", file);
      }
    } catch (err) {
      console.error("Failed:", file, err.message);
    }
  }
  return {
    type: "FeatureCollection",
    features
  };
}

(async () => {
  try {
    for (const [key, list] of Object.entries(countryUrls)) {
      const collection = await buildCollection(list);
      const outPath = path.join(outDir, `${key}.json`);
      fs.writeFileSync(outPath, JSON.stringify(collection));
      console.log("Saved", outPath, "with", collection.features.length, "features");
    }
    console.log("All done. Files written to ./geojson");
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
})();
