const cardPrices = document.querySelectorAll(".price");
const selection = document.querySelectorAll(".select");

selection.forEach((select) => {
  select.addEventListener("change", () => {
    if(select.checked){
    const selectedValue = parseInt(select.value);
    console.log(selectedValue)
    compare(selectedValue);}
  });
});

const compare = (value) => {
  cardPrices.forEach((cardPrice) => {
    let parent=cardPrice.parentNode.parentNode.parentNode.parentNode.parentNode;
    parent.classList.remove("hidden");
    let price_full=cardPrice.textContent.slice(6,);
    const price = parseInt(price_full);
    console.log(price)
    if (price < value) {
      cardPrice.classList.add("red");
    } else {
      parent.classList.add("hidden");
    }
  });
};

