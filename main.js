document.addEventListener("DOMContentLoaded", () => {
  const idx1 = Math.floor(Math.random() * 96);
  const idx2 = Math.floor(Math.random() * 4);
  const cards = document.querySelectorAll(".card");
  setBackground(cards[idx1]);
  const colors = cards[idx1].querySelectorAll(".color");
  setBackgroundColor(colors[idx2]);
});

function addColor(element) {
  const target_color = element.querySelector(".hex-value").textContent;
  setColor(target_color, element);
}

function removeColor(element) {
  const target_color = "#FFFFF0";
  setColor(target_color, element);
}

function setColor(target_color, element) {
  element.querySelector(".color-name").style.color = target_color;
  element.querySelector(".pinyin").style.color = target_color;
  element.querySelector(".hex-value").style.color = target_color;
  const rgb_value = element.querySelectorAll(".rgb-value");
  rgb_value.forEach((rgb_value) => {
    rgb_value.style.color = target_color;
  });
  const ring = element.querySelectorAll("path");
  ring.forEach((ring) => {
    ring.setAttribute("fill", target_color);
  });
  const cmyk = element.querySelectorAll(".cmyk-value");
  cmyk.forEach((cmyk) => {
    cmyk.style.color = target_color;
  });
  const cmyk_bar_opaque = element.querySelectorAll(".cmyk-bar-opaque");
  cmyk_bar_opaque.forEach((cmyk_bar_opaque) => {
    cmyk_bar_opaque.style.backgroundColor = target_color;
  });
  const cmyk_bar_solid = element.querySelectorAll(".cmyk-bar-solid");
  cmyk_bar_solid.forEach((cmyk_bar_solid) => {
    cmyk_bar_solid.style.backgroundColor = target_color;
  });
}

function setBackgroundColor(element) {
  const hexs = element.querySelector(".hex-value");
  document.documentElement.style.setProperty(
    "--background-color1",
    hexs.textContent
  );
}

function setBackground(element) {
  const hexs = element.querySelectorAll(".hex-value");

  const solar_name = element.querySelector(".card-name").textContent;
  document.querySelector(".solar-term-des-name").textContent = solar_name;

  const color_name = element.querySelectorAll(".color-name");
  document.querySelectorAll(".color-des-name")[0].textContent =
    color_name[0].textContent;
  document.querySelectorAll(".color-des-name")[1].textContent =
    color_name[1].textContent;
  document.querySelectorAll(".color-des-name")[2].textContent =
    color_name[2].textContent;
  document.querySelectorAll(".color-des-name")[3].textContent =
    color_name[3].textContent;

  document.querySelectorAll(".line-horizontal-color")[0].style.backgroundColor =
    hexs[0].textContent;
  document.querySelectorAll(".line-horizontal-color")[1].style.backgroundColor =
    hexs[1].textContent;
  document.querySelectorAll(".line-horizontal-color")[2].style.backgroundColor =
    hexs[2].textContent;
  document.querySelectorAll(".line-horizontal-color")[3].style.backgroundColor =
    hexs[3].textContent;

  document.querySelectorAll(".color-value-hex")[0].textContent =
    hexs[0].textContent;
  document.querySelectorAll(".color-value-hex")[1].textContent =
    hexs[1].textContent;
  document.querySelectorAll(".color-value-hex")[2].textContent =
    hexs[2].textContent;
  document.querySelectorAll(".color-value-hex")[3].textContent =
    hexs[3].textContent;

  const rgb = element.querySelectorAll(".rgb-value");
  document.querySelectorAll(".color-value-value")[0].textContent =
    rgb[0].textContent.trim().slice(1);
  document.querySelectorAll(".color-value-value")[1].textContent =
    rgb[1].textContent.trim().slice(1);
  document.querySelectorAll(".color-value-value")[2].textContent =
    rgb[2].textContent.trim().slice(1);
  document.querySelectorAll(".color-value-value")[13].textContent =
    rgb[3].textContent.trim().slice(1);
  document.querySelectorAll(".color-value-value")[14].textContent =
    rgb[4].textContent.trim().slice(1);
  document.querySelectorAll(".color-value-value")[15].textContent =
    rgb[5].textContent.trim().slice(1);
  document.querySelectorAll(".color-value-value")[26].textContent =
    rgb[6].textContent.trim().slice(1);
  document.querySelectorAll(".color-value-value")[27].textContent =
    rgb[7].textContent.trim().slice(1);
  document.querySelectorAll(".color-value-value")[28].textContent =
    rgb[8].textContent.trim().slice(1);
  document.querySelectorAll(".color-value-value")[39].textContent =
    rgb[9].textContent.trim().slice(1);
  document.querySelectorAll(".color-value-value")[40].textContent =
    rgb[10].textContent.trim().slice(1);
  document.querySelectorAll(".color-value-value")[41].textContent =
    rgb[11].textContent.trim().slice(1);

  const cmyks = element.querySelectorAll(".cmyk-value");
  //   console.log(cmyks);
  document.querySelectorAll(".color-value-value")[3].textContent =
    cmyks[0].textContent.trim().split(" ")[1];
  document.querySelectorAll(".color-value-value")[4].textContent =
    cmyks[0].textContent.trim().split(" ")[2];
  document.querySelectorAll(".color-value-value")[5].textContent =
    cmyks[0].textContent.trim().split(" ")[3];
  document.querySelectorAll(".color-value-value")[6].textContent =
    cmyks[0].textContent.trim().split(" ")[4];
  document.querySelectorAll(".color-value-value")[7].textContent =
    cmyks[1].textContent.trim().split(" ")[1];
  document.querySelectorAll(".color-value-value")[8].textContent =
    cmyks[1].textContent.trim().split(" ")[2];
  document.querySelectorAll(".color-value-value")[9].textContent =
    cmyks[1].textContent.trim().split(" ")[3];
  document.querySelectorAll(".color-value-value")[10].textContent =
    cmyks[2].textContent.trim().split(" ")[1];
  document.querySelectorAll(".color-value-value")[11].textContent =
    cmyks[2].textContent.trim().split(" ")[2];
  document.querySelectorAll(".color-value-value")[12].textContent =
    cmyks[2].textContent.trim().split(" ")[3];

  document.querySelectorAll(".color-value-value")[16].textContent =
    cmyks[3].textContent.trim().split(" ")[1];
  document.querySelectorAll(".color-value-value")[17].textContent =
    cmyks[3].textContent.trim().split(" ")[2];
  document.querySelectorAll(".color-value-value")[18].textContent =
    cmyks[3].textContent.trim().split(" ")[3];
  document.querySelectorAll(".color-value-value")[19].textContent =
    cmyks[3].textContent.trim().split(" ")[4];
  document.querySelectorAll(".color-value-value")[20].textContent =
    cmyks[4].textContent.trim().split(" ")[1];
  document.querySelectorAll(".color-value-value")[21].textContent =
    cmyks[4].textContent.trim().split(" ")[2];
  document.querySelectorAll(".color-value-value")[22].textContent =
    cmyks[4].textContent.trim().split(" ")[3];
  document.querySelectorAll(".color-value-value")[23].textContent =
    cmyks[5].textContent.trim().split(" ")[1];
  document.querySelectorAll(".color-value-value")[24].textContent =
    cmyks[5].textContent.trim().split(" ")[2];
  document.querySelectorAll(".color-value-value")[25].textContent =
    cmyks[5].textContent.trim().split(" ")[3];

  document.querySelectorAll(".color-value-value")[29].textContent =
    cmyks[6].textContent.trim().split(" ")[1];
  document.querySelectorAll(".color-value-value")[30].textContent =
    cmyks[6].textContent.trim().split(" ")[2];
  document.querySelectorAll(".color-value-value")[31].textContent =
    cmyks[6].textContent.trim().split(" ")[3];
  document.querySelectorAll(".color-value-value")[32].textContent =
    cmyks[6].textContent.trim().split(" ")[4];
  document.querySelectorAll(".color-value-value")[33].textContent =
    cmyks[7].textContent.trim().split(" ")[1];
  document.querySelectorAll(".color-value-value")[34].textContent =
    cmyks[7].textContent.trim().split(" ")[2];
  document.querySelectorAll(".color-value-value")[35].textContent =
    cmyks[7].textContent.trim().split(" ")[3];
  document.querySelectorAll(".color-value-value")[36].textContent =
    cmyks[8].textContent.trim().split(" ")[1];
  document.querySelectorAll(".color-value-value")[37].textContent =
    cmyks[8].textContent.trim().split(" ")[2];
  document.querySelectorAll(".color-value-value")[38].textContent =
    cmyks[8].textContent.trim().split(" ")[3];

  document.querySelectorAll(".color-value-value")[42].textContent =
    cmyks[9].textContent.trim().split(" ")[1];
  document.querySelectorAll(".color-value-value")[43].textContent =
    cmyks[9].textContent.trim().split(" ")[2];
  document.querySelectorAll(".color-value-value")[44].textContent =
    cmyks[9].textContent.trim().split(" ")[3];
  document.querySelectorAll(".color-value-value")[45].textContent =
    cmyks[9].textContent.trim().split(" ")[4];
  document.querySelectorAll(".color-value-value")[46].textContent =
    cmyks[10].textContent.trim().split(" ")[1];
  document.querySelectorAll(".color-value-value")[47].textContent =
    cmyks[10].textContent.trim().split(" ")[2];
  document.querySelectorAll(".color-value-value")[48].textContent =
    cmyks[10].textContent.trim().split(" ")[3];
  document.querySelectorAll(".color-value-value")[49].textContent =
    cmyks[11].textContent.trim().split(" ")[1];
  document.querySelectorAll(".color-value-value")[50].textContent =
    cmyks[11].textContent.trim().split(" ")[2];
  document.querySelectorAll(".color-value-value")[51].textContent =
    cmyks[11].textContent.trim().split(" ")[3];
}
