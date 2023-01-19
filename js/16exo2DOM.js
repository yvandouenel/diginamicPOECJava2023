function createMarkup(markupDatas) {
  const markup = document.createElement(markupDatas.name);
  markup.textContent = markupDatas.text;
  markupDatas.parent.appendChild(markup);
  for (let attribute of markupDatas.attributes) {
    if (attribute && attribute.hasOwnProperty("name")) {
      markup.setAttribute(attribute.name, attribute.value);
    }
  }
  return markup;
}

let nav = document.createElement("nav");
for (let i = 1; i < 5; i++) {
  let button = createMarkup({
    name: "button",
    text: "Item " + i,
    parent: nav,
    attributes: i == 1 ? [{ name: "style", value: "color : red" }] : [],
  });
  nav.appendChild(button);
}

document
  .querySelector("body")
  .appendChild(document.createElement("header"))
  .appendChild(nav);
