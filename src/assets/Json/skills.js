const iconFiles = import.meta.glob("../assets/Icons/*.svg", { eager: true });

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

const skills = iconNames.map((name) => {
  const filename = `skill-icons--${name}.svg`;
  const path = `../assets/Icons/${filename}`;
  const icon = iconFiles[path]?.default ?? null; // ✅ no more empty string

  return {
    name: name
      .replace(/-/g, " ")
      .replace(/(dark|light)/gi, "")
      .trim()
      .toUpperCase(),
    icon,
  };
});

export { skills };
