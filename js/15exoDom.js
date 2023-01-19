/**
 * Crée un élément du dom, lui ajoute du texte, le place comme dernier
 * enfant de parent et ajoute un attribut en utilisant le paramètre attribute
 * @param {String} markup_name
 * @param {String} text
 * @param {domElement} parent
 * @param {Object} attribute  (doit comprendre les propriétés name et value)
 * @returns domElement
 */
function createMarkup(markup_name, text, parent, attribute) {
  const markup = document.createElement(markup_name);
  markup.textContent = text;
  parent.appendChild(markup);
  if (attribute && attribute.hasOwnProperty("name")) {
    markup.setAttribute(attribute.name, attribute.value);
  }
  return markup;
}

const headerElement = document.querySelector("header");

const navElement = createMarkup("nav", "", headerElement, { id: "id" });

for (let i = 1; i <= 4; i++) {
  createMarkup("button", "Item " + i, navElement, null);
}

document.querySelector("nav > button").style.color = "red";
