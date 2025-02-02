<%*
const dir = "/300 Hobbies/310 EDH/Infinite Combos/"
if (!tp.file.exists(dir)) {
	await this.app.vault.createFolder(dir)
}

let titleName = tp.file.title
if (tp.file.title.startsWith("Untitled"))
	titleName = await tp.system.prompt("Combo Name")
	await tp.file.rename(titleName)
await tp.file.move(dir + titleName);
-%>
---
parent: "[[EDH Infinite Combo MOC]]"
space: "[[EDH]]"
date_created: 
date_modified: 
title: "<% titleName %>"
tags: [EDH, EDH/InfiniteCombo] 
---
# <% titleName %>
## Prerequisites
## Steps
## Results