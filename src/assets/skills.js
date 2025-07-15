// src/data/skills.js

const iconNames = [
  "aiscript-light",
  "androidstudio-dark",
  "bootstrap",
  "c",
  "cpp",
  "css",
  "expressjs-dark",
  "figma-dark",
  "github-dark",
  "gradle-dark",
  "html",
  "idea-dark",
  "java-dark",
  "mongodb",
  "mysql-dark",
  "linux-dark",
  "nodejs-dark",
  "react-dark",
  "sass",
  "sqlite",
  "stackoverflow-dark",
  "vite-dark",
  "vscode-dark",
  "windows-light",
];

const skills = iconNames.map((name) => ({
  name: name
    .replace(/-/g, " ")
    .replace(/(dark|light)/gi, "")
    .trim()
    .toUpperCase(),
  icon: `/Icons/skill-icons--${name}.svg`,
}));
export { skills };
