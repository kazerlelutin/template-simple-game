import { scenesName } from "./scenesName.mjs";
import { sprites } from "./sprites.mjs";

export default function Game() {

  const player = add([
    sprite(sprites.commander.name),
    pos(90, 80),
    area(),
    body(),
  ]);

  // platform
  add([rect(width(), 20), pos(0, height() - 50), area(), solid()]);

  keyPress("space", () => {
    if (player.grounded()) {
      player.jump(constants.jumpForce);
    }
  });

  //CONTROL
  keyDown("left", () => {
    player.move(-constants.moveSpeed, 0);
  });

  keyDown("right", () => {
    player.move(constants.moveSpeed, 0);
  });

  //Return in home with Mithril Router
  keyPress("r", () => {
    go(scenesName.title);
  });
}
