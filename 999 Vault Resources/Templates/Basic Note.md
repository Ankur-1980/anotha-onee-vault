<%*
const dir = await tp.system.prompt("Path to Folder (e.g. /parentFolder/childFolder/)")
if (!tp.file.exists(dir)) {
	await this.app.vault.createFolder(dir)
}

let titleName = tp.file.title
if (tp.file.title.startsWith("Untitled"))
	titleName = await tp.system.prompt("Note Title")
	await tp.file.rename(titleName)
await tp.file.move(dir + titleName);
-%>
---
fileClass: "Basic Note"
parent:
space: 
date_created: 
date_modified: 
title: "<% titleName %>"
tags: [quickNote]
---
# <% titleName %>