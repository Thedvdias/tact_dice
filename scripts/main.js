Hooks.once("diceSoNiceInit", (dice3d) => {
  dice3d.addTexture("Tactician", {
    name: "Tactician",
    composite: "source-over",
    source: "modules/tactician-dice/images/tactician.webp",
    bump: "modules/tactician-dice/images/tactician.webp",
  });
  dice3d.addTexture("Eleementalist Transparent", {
    name: "Elementalist Transparent",
    composite: "destination-in",
    source: "modules/tactician-dice/images/elementalist_transparent.webp",
    bump: "modules/tactician-dice/images/elementalist_transparent.webp",
  });
  dice3d.addTexture("Eleementalist", {
    name: "Elementalist",
    composite: "source-over",
    source: "modules/tactician-dice/images/elementalist.webp",
    bump: "modules/tactician-dice/images/elementalist.webp",
  });
});
