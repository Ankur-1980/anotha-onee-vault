`<%*
	const dir = await tp.system.prompt("Path to Folder (e.g. /parentFolder/childFolder/)")
	if (!tp.file.exists(dir)) {
		await this.app.vault.createFolder(dir)
	}
	let titleName = tp.file.title
	if (tp.file.title.startsWith("Untitled")) {
		titleName = await tp.system.prompt("Name of MOC")
	}
	await tp.file.rename(titleName + " MOC")
	await tp.file.move(dir + titleName);
-%>`
---
file_type: MOC
parent: 
space: MOCs
date_created: 
date_modified: 
title: "<% titleName %>"
tags: [MOC] 
---
# <% tp.file.cursor() %>
- Creates a list of MOCs that live within a folder
- Need to copy entire code block and replace `javascript` with `dataviewjs`

```javascript
let pages = dv.pages('"path/to/folder"').where(p => p.file_type === "MOC");
	pages.sort(p => p.file.name, 'asc').forEach(p => dv.paragraph(dv.fileLink(p.file.path)));
```
`