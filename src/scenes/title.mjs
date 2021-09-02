import { scenesName } from "./scenesName.mjs";

export default function Title() {
  //background
  add([rect(width(), height()), color(0, 1, 1)]);

  const button = add([
    text("Play", 16, { width: width() }, pos(550, 25)),
    pos(width() / 2, height() / 2),
  ]);

  button.action(() => {
    if (mouseIsClicked()) {
      go(scenesName.game);
    }
  });

  keyPress("space", () => {
    go(scenesName.game);
  });
}
