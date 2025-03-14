import { AlertContextType, AlertType } from "@/lib/types";
import { createContext, useContext, useState } from "react";

const AlertContext = createContext<AlertContextType>({
  alerts: [],
  addAlert: (alert: AlertType) => alert.id || "",
  dismissAlert: (id: string) => console.log(id),
});

function useAlertSetup() {
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  const addAlert = (alert: AlertType) => {
    const id =
      Math.random().toString(36).slice(2, 9) +
      new Date().getTime().toString(36);
    setAlerts((prev) => [{ ...alert, id: id }, ...prev]);
    return id;
  };

  const dismissAlert = (id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return { alerts, addAlert, dismissAlert };
}

function useAlerts() {
  return useContext(AlertContext);
}

export { useAlertSetup, useAlerts, AlertContext };
