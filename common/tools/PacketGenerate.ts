import * as fs from "fs";
import * as handlebars from "handlebars";

const packetJsons = fs.readdirSync("./packets", {
  withFileTypes: true,
  recursive: false,
}).filter(file => file.isFile() && file.name.match(/\?*.json/));    // JSONファイルのみ列挙

handlebars.registerHelper("initialValue", (type: string) => {
  switch (type) {
    case "number": return "0";
    case "string": return `""`;
  }
  return `new ${type}()`;
});

handlebars.registerHelper("upperSnakeCase", (str: string) => {
  // スネークケースに変換してからtoUpperCase()する
  str = str.replace(/([A-Z])/g, '_$1').toUpperCase();
  if (str[0] === "_") {
    str = str.substring(1);
  }
  return str;
});

const packets: any[] = [];

{
  const template = handlebars.compile(fs.readFileSync("./packets/PacketTemplate.hbs").toString());

  packetJsons.forEach(json => {
    const jsonData = JSON.parse(fs.readFileSync("./packets/" + json.name).toString());
    packets.push(jsonData);
    const result = template(jsonData);
    fs.writeFileSync("./src/packets/" + json.name.replace(/.json/, ".ts"), result);   // 拡張子書き換え
  });
}

{
  const template = handlebars.compile(fs.readFileSync("./packets/PacketIdTemplate.hbs").toString());
  const result = template({ packets });
  fs.writeFileSync("./src/packets/PacketId.ts", result);
}

{
  const template = handlebars.compile(fs.readFileSync("./packets/PacketExportTemplate.hbs").toString());
  const result = template({ packets });
  fs.writeFileSync("./src/exports.ts", result);
}

