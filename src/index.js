import kaboom from "kaboom";
import { constants } from "./contants.mjs";
import Game from "./scenes/game.mjs";
import { scenesName } from "./scenes/scenesName.mjs";
import { sprites } from "./scenes/sprites.mjs";
import Title from "./scenes/title.mjs";

(() => {
  kaboom({
    global: true,
  });

  loadRoot("sprites/");

  //load sprites
  loadSprite(sprites.commander.name, sprites.commander.src);

  // Load Scenes
  scene(scenesName.title, Title);
  scene(scenesName.game, Game);

  go(scenesName.title);
  focus();
})();
