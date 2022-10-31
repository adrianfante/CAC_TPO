import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
const textarea = document.querySelector("textarea");
  textarea.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
