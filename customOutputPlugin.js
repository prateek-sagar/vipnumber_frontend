import fs from "fs-extra";
import path from "path";

export default function customOutpoutPlugin() {
  return {
    name: "output-file-path-plugin",
    closeBundle() {
      const source = "dist/src";
      if (fs.existsSync(source)) {
        const folders = fs.readdirSync(source).filter((item) => {
          return fs.lstatSync(path.join(source, item)).isDirectory();
        });

        folders.forEach((folder) => {
          const sourceCurr = path.join(source, folder);
          const destination = path.join("dist", folder);
          fs.moveSync(sourceCurr, destination, { overwrite: true });
        });

        if (fs.readdirSync(source).length === 0) {
          fs.removeSync("dist/src");
        }
      }
    },
  };
}
