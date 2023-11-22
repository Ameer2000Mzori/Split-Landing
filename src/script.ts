// selecting our elements
const psBuyBtn = document.getElementsByClassName(
  "ps-buy-Btn"
)[0] as HTMLElement;
const xboxBuyBtn = document.getElementsByClassName(
  "xbox-buy-Btn"
)[0] as HTMLElement;
const headerPage = document.getElementsByClassName("header")[0] as HTMLElement;

// our functions

const psHandler = (): void => {
  headerPage.innerHTML = "";
  headerPage.innerHTML = `
  <section class="plays-Wrapper">
      <div class="plays-Text-Wrapper">
        <h1>PLAYSTATION</h1>
        <ol>
          <li>BEST CONSOLE</li>
          <li>BEST SELLER</li>
          <li>BEST DLC</li>
        </ol>
        <button>
          <a href="https://www.playstation.com/nl-nl/en-en/" target="_blank"
            >BUY NOW</a
          >
        </button>
        <button>
          <a href="./index.html">GO BACK</a>
        </button>
      </div>
    </section>
  `;
};

const xbHandler = (): void => {};

// our eventlinsters
psBuyBtn.addEventListener("click", psHandler);
xboxBuyBtn.addEventListener("click", xbHandler);
