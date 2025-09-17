import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function SinglePage() {
  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== "undefined") {
      OneSignal.init({
        appId: "c6b44891-d5c5-4df9-b49e-a29aa07bbee6",
        safari_web_id:
          "web.onesignal.auto.34e4584e-b851-4129-9188-f0d7c790d3df",
        // You can add other initialization options here
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      });
    }
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}
