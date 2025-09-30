import { ToolType } from "./types";

export const toolInfo: Record<string, ToolType> = {
  azure: {
    logo: "tool-assets/azure-logo.svg",
    name: "Microsoft Azure",
    href: "https://azure.microsoft.com/en-us/get-started/azure-portal/",
  },
  docker: {
    logo: "tool-assets/docker-mark-blue.svg",
    name: "Docker",
    href: "https://www.docker.com/",
  },
  flask: {
    logo: "tool-assets/flask-programming-logo.svg",
    name: "Flask",
    href: "https://flask.palletsprojects.com/en/stable/",
  },
  git: {
    logo: "tool-assets/git-logo.svg",
    name: "Git",
    href: "https://git-scm.com/downloads",
  },
  java: {
    logo: "tool-assets/java-logo.svg",
    name: "Java",
    href: "https://www.java.com/en/",
  },
  mysql: {
    logo: "tool-assets/mysql-logo.svg",
    name: "MySQL",
    href: "https://www.mysql.com/",
  },
  python: {
    logo: "tool-assets/python-logo.svg",
    name: "Python",
    href: "https://www.python.org/",
  },
  react: {
    logo: "tool-assets/react.svg",
    name: "React",
    href: "https://react.dev/",
  },
  tailwind: {
    logo: "tool-assets/tailwind-logo.svg",
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  ts: {
    logo: "tool-assets/ts-logo.svg",
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  vite: {
    logo: "tool-assets/vite.svg",
    name: "Vite",
    href: "https://vite.dev/",
  },
};
