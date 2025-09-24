import React from "react";
import Script from "next/script";

const Plugin = () => {
  return (
    <div>
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
                var $title = jQuery("head").find("title");
                if ($title.length) $title.remove();
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
    </div>
  );
};

export default Plugin;
