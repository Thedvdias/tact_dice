Hooks.once("diceSoNiceInit", (dice3d) => {
  dice3d.addTexture("Tactician", {
    name: "tactician",
    composite: "source-over",
    source: "modules/tactician-dice/images/tactician_swirl.png",
    bump: "modules/tactician-dice/images/tactician_swirl.png",
  });
});
