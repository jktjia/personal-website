import { ReactNode } from "react";
import { Alert, AlertsWrapper } from "./alert";
import { AlertContext, useAlertSetup } from "@/hooks/use-alerts";

export default function AlertsProvider({ children }: { children: ReactNode }) {
  const context = useAlertSetup();

  return (
    <AlertContext.Provider value={context}>
      <AlertsWrapper>
        {context.alerts.map((alert) => (
          <Alert
            key={alert.id || ""}
            id={alert.id || ""}
            {...alert}
            handleDismiss={() => {
              context.dismissAlert(alert.id || "");
            }}
          />
        ))}
      </AlertsWrapper>
      {children}
    </AlertContext.Provider>
  );
}
