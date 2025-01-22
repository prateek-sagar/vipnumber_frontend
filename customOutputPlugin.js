import fs from "fs-extra";

export default function customOutpoutPlugin() {
  return {
    name: "output-file-path-plugin",
    closeBundle() {
      const source = "dist/src/about";
      const destination = "dist/about";
      fs.moveSync(source, destination, { overwrite: true });

      fs.removeSync("dist/src");
    },
  };
}
