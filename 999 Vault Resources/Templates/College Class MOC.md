<%* 
	const rootDir = "/400 Education/410 SNHU/"
	const className = await tp.system.prompt("Name of Class");
	let titleName = tp.file.title
	if (tp.file.title.startsWith("Untitled")) {
		titleName = await tp.system.prompt(className)
	}
	await tp.file.rename(titleName)
	const folderName = rootDir + titleName + "/"
	if (!tp.file.exists(folderName)) {
		await this.app.vault.createFolder(folderName)
	}
	await tp.file.move(folderName);
-%>
# Copy/Pasta code snippets then delete everything
- Template to create templates
## Name and Move
- place at the top of the page
- code to name the file and move it to a specific folder
- insert path to the folder
- prompt for naming
- wrap code with `< % *` and `- % >`

```javascript
	const dir = "/path/to/folder/"
	if (!tp.file.exists(dir)) {
		await this.app.vault.createFolder(dir)
	}
	let titleName = tp.file.title
	if (tp.file.title.startsWith("Untitled")) {
		titleName = await tp.system.prompt("Note Title")
	}
	await tp.file.rename(titleName)
	await tp.file.move(dir + titleName);
```
- Or have a prompt to ask what the path
```javascript
	const dir = await tp.system.prompt("Path to Folder (e.g. /parentFolder/childFolder/)")
```
## Properties
- Base properties that every file has
	- double check with `GLOBAL` fileClass in case something changed
- Date created and modified will be automatically added on save
- Add whatever other properties that are necessary
- fileClass/file_type
	- use one or the other
	- fileClass is used with the metadata menu plugin
		- when there is a file class template
	- file type when there isn't a file class
### REMOVE SPACES FROM TITLE

```
---
fileClass: 
file_type: 
parent: [[SNHU MOC]]
space: [[SNHU]]
date_created: 
date_modified: 
title: "<% className %>"
tags: [ ] 
class: "<% className %>"
---
```

## Body
- Will add the title as a H1 header
- Will set the cursor to this position
	- Remove spaces 
```
# < % titleName % >
	< % tp.file.cursor() % >
```

# <% className %>
## General Overview
- General overview of the class
## Modules and Assignments
### [[<% tp.user.courseModuleHeadings() %>]]
