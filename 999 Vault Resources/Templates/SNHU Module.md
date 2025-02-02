<%* 
const root = "/400 Education/410 SNHU/"
const className = await tp.system.prompt("Name of Class");
const moduleName = await tp.system.prompt("Name of the Module")
const moduleNumber = await tp.system.prompt("Module Number")
const moduleWithNumber = `Module ${moduleNumber}`

let titleName = `${className} - ${moduleWithNumber}`
if (tp.file.title.startsWith("Untitled"))
	await tp.file.rename(titleName)

const classFolder = `${root}/${className}`
if (!tp.file.exists(classFolder)) {
	await this.app.vault.createFolder(classFolder)
}
const moduleFolder = `${classFolder}/${moduleWithNumber}`
await tp.file.move(moduleFolder);
-%>
---
fileClass: SnhuModule
parent: <% className %>
space: SNHU
courseName: <% className %>
courseModuleName: 
date_created: 
date_modified: 
title: "<% titleName %>"
tags: [SNHU] 
---
# <% titleName %>
	< % tp.file.cursor() % >