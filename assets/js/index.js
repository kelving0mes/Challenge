const title_page = document.getElementById("title_page");
const titles = ["DevSpot", "Challenge", "Porto Seguro"];
let indiceMensagem = 0;
const updateText = () => {
    title_page.innerText = titles[indiceMensagem];
    indiceMensagem++;

    if (indiceMensagem == titles.length) {
      indiceMensagem = 0;
    }
}

updateText();
setInterval(updateText, 3000);