interface CatContextType {
  isCatFound: (n: number) => boolean;
  findCat: (n: number) => void;
  catsRemaining: () => number;
  reset: () => void;
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

export type { CatContextType, AlertType, AlertProps, AlertContextType };

export enum AlertSeverity {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}
