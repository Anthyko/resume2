export const SKILL_ICON_MAP = {
 
  // Programming Languages
  javascript: "devicon:javascript",
  typescript: "devicon:typescript",
  java: "devicon:java",
  c: "devicon:c",
  csharp: "devicon:csharp",
  cplusplus: "devicon:cplusplus",
  python: "devicon:python",
  ruby: "devicon:ruby",
  go: "devicon:go",
  rust: "devicon:rust",
  php: "devicon:php",

  // Web Development
  html: 'devicon:html5',
  css: 'devicon:css3',
  sass: 'devicon:sass',
  tailwind: 'devicon:tailwindcss',
  react: "devicon:react",
  node: "devicon:nodejs",
  svelte: "devicon:svelte",
  next: "devicon:nextjs",
  flutter: "devicon:flutter",
  express: "devicon:express",
  symfony: "devicon:symfony",
  astro: "devicon:astro",
  apache: "devicon:apache",
  nginx: "devicon:nginx",

  // Tools & Ecosystem
  git: 'devicon:git',
  github: 'devicon:github',
  linux: 'devicon:linux',
  docker: 'devicon:docker',
  k8s: 'devicon:kubernetes',
  grafana: 'devicon:grafana',
  ansible: 'devicon:ansible',
  ubuntu: 'devicon:ubuntu',
  debian: 'devicon:debian',
  nixos: 'devicon:nixos',
  bash: 'devicon:bash',

  // Databases
  mysql: 'devicon:mysql',
  postgresql: 'devicon:postgresql',
  mongodb: 'devicon:mongodb',
  sqlite: 'devicon:sqlite',

  // Mobile & App Dev
  swift: 'devicon:swift',
  kotlin: 'devicon:kotlin',
  flutter: 'devicon:flutter',

  // Scientific Computing
  matlab: 'devicon:matlab',
  jupyter: 'devicon:jupyter',
  julia: 'devicon:julia',
  r: 'devicon:r',
  pandas: 'deicon:pandas',
  numpy: 'devicon:numpy',

  // Creative / Interdisciplinary
  photoshop: 'devicon:photoshop',
  lightroom: 'devicon:lightroom',
  indesign: 'devicon:indesign',
  illustrator: 'devicon:illustrator',
  aftereffects: 'devicon:aftereffects',
  figma: 'devicon:figma',
  blender: 'devicon:blender',
  unity: 'devicon:unity',

};
  
const ALIASES = {
  'c++': 'cplusplus',
  'c#': 'csharp',
  'nextjs': 'next',
  'nodejs': 'node',
  'reactjs': 'react',
  'js': 'javascript',
  'ts': 'typescript',
  'x' : 'twitter',
  'golang': 'go'
};

export function getIconName(name) {
  if (!name) return null;

  // Normalize the name to lowercase and remove special characters
  name = name.toLowerCase().replace(/[\s.+#()\/\\]/g, '');

  // Check if the name is in the aliases map
  name = ALIASES[name] ?? name;

  return SKILL_ICON_MAP[name] ?? null;
}
  
