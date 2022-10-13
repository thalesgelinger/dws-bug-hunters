import read from "../resources/read.js";
import { createCharacter } from "./controllers/createCharacter.js";
import { selectCharacter } from "./controllers/selectCharacter.js";

const menu = async () => {
  console.log("1 - Criar personagem");
  console.log("2 - Selecionar personagem");
  console.log("0 - Sair");

  const options = buildOptions();

  const option = await read("O que gostaria de fazer? ");

  if (Object.keys(options).includes(option)) {
    await options[option]();
  } else {
    console.clear();
    await menu();
  }
};

const buildOptions = () => {
  return {
    0: exit,
    1: createCharacter,
    2: selectCharacter,
  };
};

const exit = () => {
  return;
};

export default menu;
