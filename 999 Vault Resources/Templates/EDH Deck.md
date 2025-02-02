<%*
let titleName = tp.file.title;
if (tp.file.title.startsWith("Untitled")) {
  titleName = await tp.system.prompt("Deck Name");
}

await tp.file.rename(titleName);
const dir = "/300 Hobbies/310 EDH/Decks/";
if (!tp.file.exists(dir)) {
  await this.app.vault.createFolder(dir);
}
let commanders = [];
const commander1 = await tp.system.prompt("Commander 1");
if (commander1) {
  commanders.push(commander1);
  const addSecondCommander = await tp.system.prompt(
    "Is there a partner commander? (yes/no)"
  );
  if (addSecondCommander && addSecondCommander.toLowerCase() === "yes") {
    const commander2 = await tp.system.prompt("Commander 2");
    if (commander2) {
      commanders.push(commander2);
    }
  }
}

let commanderString = "";
if (commanders.length > 0) {
  commanderString = `commander: [${commanders
    .map((commander) => `"${commander}"`)
    .join(", ")}]`;
} else {
  commanderString = `commander: ""`;
}

const colorIdentity = await tp.system.prompt("Color Identity");
const deckOrigin = await tp.system.prompt("Deck Origin (e.g. My Idea, Netdecked, Precon, Upgraded Precon)");
const deckListLink = await tp.system.prompt("Link to decklist");

await tp.file.move(dir + titleName);

-%>
---
parent: "[[EDH Decks]]"
fileClass: "EDH"
title: "<% titleName %>"
<%* tR += "\n" + commanderString %>
color_identity: "<% colorIdentity %>"
deck_origin: "<% deckOrigin %>"
deck_building_status:
kindred:
deck_themes:
tags: [EDH, EDH/Decks]
---
# <% titleName %>
- [Deck List](<% deckListLink %>)
## Inspiration
- Deck Idea: <% tp.file.cursor() %>
- Restrictions:
- Resources:
## What is the deck trying to do?
### Primary Strategy
-
### Secondary Strategy
-
### Win Conditions
-
## Key Synergies
### Interesting Card Interactions
-
### Tutor Targets
-
### Weirdos
-
## Combos
### Infinite Combos
-
## Potential Changes

### Upgrades
-
### Potential Cuts
-
### Proxies Used
-
## Achievements
-
## Game Notes

| Date | Opponents | Outcome | Notes |
| ---- | --------- | ------- | ----- |
|      |           |         |       |
