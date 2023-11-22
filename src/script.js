// selecting our elements
var psBuyBtn = document.getElementsByClassName("ps-buy-Btn")[0];
var xboxBuyBtn = document.getElementsByClassName("xbox-buy-Btn")[0];
var headerPage = document.getElementsByClassName("header")[0];
// our functions
var psHandler = function () {
    headerPage.innerHTML = "";
    headerPage.innerHTML = "\n  <section class=\"plays-Wrapper\">\n      <div class=\"plays-Text-Wrapper\">\n        <h1>PLAYSTATION</h1>\n        <ol>\n          <li>BEST CONSOLE</li>\n          <li>BEST SELLER</li>\n          <li>BEST DLC</li>\n        </ol>\n        <button>\n          <a href=\"https://www.playstation.com/nl-nl/en-en/\" target=\"_blank\"\n            >BUY NOW</a\n          >\n        </button>\n        <button>\n          <a href=\"./index.html\">GO BACK</a>\n        </button>\n      </div>\n    </section>\n  ";
};
var xbHandler = function () {
    headerPage.innerHTML = "";
    headerPage.innerHTML = "\n    <section class=\"Xboxs-Wrapper\">\n        <div class=\"Xboxs-Text-Wrapper\">\n          <h1>XBOX SERIES X</h1>\n          <ol>\n            <li>BEST CONSOLE</li>\n            <li>BEST SELLER</li>\n            <li>BEST DLC</li>\n          </ol>\n          <button>\n            <a href=\"https://www.xbox.com/en-US?xr=mebarnav\" target=\"_blank\"\n              >BUY NOW</a\n            >\n          </button>\n          <button>\n            <a href=\"./index.html\">GO BACK</a>\n          </button>\n        </div>\n      </section>\n    ";
};
// our eventlinsters
psBuyBtn.addEventListener("click", psHandler);
xboxBuyBtn.addEventListener("click", xbHandler);
