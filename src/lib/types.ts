import { JSX } from "react";

interface CatContextType {
  isCatFound: (n: number) => boolean;
  findCat: (n: number) => void;
  catsRemaining: number;
  reset: () => void;
  hasSeenCatPage: boolean;
  setCatPageSeen: () => void;
}

interface AlertType {
  id?: string;
  severity: AlertSeverity;
  message: string;
  timeout: number;
}

interface AlertProps extends AlertType {
  id: string;
  handleDismiss: () => void;
}

interface AlertContextType {
  alerts: AlertType[];
  addAlert: (alert: AlertType) => string;
  dismissAlert: (id: string) => void;
}

interface ProjectType {
  name: string;
  timespan: string;
  header: JSX.Element;
  image: string;
  tags?: string[];
  content: string;
  tools: string[];
}

interface WorkType {
  employer: string;
  position: string;
  timespan: string;
  header: JSX.Element;
  content: JSX.Element;
  logo?: string;
}

interface ToolType {
  logo: string;
  name: string;
  href?: string;
}

export type {
  CatContextType,
  AlertType,
  AlertProps,
  AlertContextType,
  ProjectType,
  ToolType,
  WorkType,
};

export enum AlertSeverity {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}
