import "@/lib/globals.css";
import { ReactNode, useEffect } from "react";
import { AlertProps, AlertSeverity } from "@/lib/types";

const classNames = {
  [AlertSeverity.INFO]: "bg-blue-100 border-blue-500 text-blue-700",
  [AlertSeverity.SUCCESS]: "bg-green-100 border-green-500 text-green-700",
  [AlertSeverity.WARNING]: "bg-yellow-100 border-yellow-500 text-yellow-700",
  [AlertSeverity.ERROR]: "bg-red-100 border-red-500 text-red-700",
};

const svgFillColors = {
  [AlertSeverity.INFO]: "text-blue-500",
  [AlertSeverity.SUCCESS]: "text-green-500",
  [AlertSeverity.WARNING]: "text-yellow-500",
  [AlertSeverity.ERROR]: "text-red-500",
};

const svgPaths = {
  [AlertSeverity.INFO]:
    "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z",
  [AlertSeverity.SUCCESS]:
    "M5.64 13.36l-2.28-2.28-1.28 1.28 3.56 3.56 7.72-7.72-1.28-1.28z",
  [AlertSeverity.WARNING]:
    "M10 4.5a1 1 0 0 1 2 0v5a1 1 0 1 1-2 0V4.5zm0 8a1 1 0 1 1 2 0v.5a1 1 0 1 1-2 0v-.5z",
  [AlertSeverity.ERROR]:
    "M10 1C4.48 1 0 5.48 0 11s4.48 10 10 10 10-4.48 10-10S15.52 1 10 1zm1 15H9v-2h2v2zm0-4H9V5h2v7z",
};

const Alert = ({
  message = "",
  severity = AlertSeverity.INFO,
  timeout = 0,
  handleDismiss = () => console.log("handleDismiss"),
}: AlertProps) => {
  useEffect(() => {
    if (timeout > 0 && handleDismiss) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, timeout * 1000);
      return () => clearTimeout(timer);
    }
  }, [timeout, handleDismiss]);

  return (
    message?.length && (
      <div
        className={
          classNames[severity] +
          " rounded-b px-4 py-3 mb-4 shadow-md pointer-events-auto"
        }
        role="alert"
      >
        <div className="flex">
          <div className="py-1">
            <svg
              className={"fill-current h-6 w-6 mr-4 " + svgFillColors[severity]}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d={svgPaths[severity]} />
            </svg>
          </div>
          <div>
            <p className="font-bold">{severity.toUpperCase()}</p>
            <p className="text-sm">{message}</p>
          </div>
          <div className="ml-auto">
            {handleDismiss && (
              <button
                className="text-sm font-bold"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleDismiss();
                }}
              >
                <svg
                  className="fill-current h-6 w-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.83 5L10 8.17 13.17 5 15 6.83 11.83 10 15 13.17 13.17 15 10 11.83 6.83 15 5 13.17 8.17 10 5 6.83 6.83 5z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

const AlertsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed top-0 right-0 p-4 z-50 pointer-events-none max-w-sm min-w-fit w-full">
      {children}
    </div>
  );
};

export { Alert, AlertsWrapper };
