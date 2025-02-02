---
file_type: CodeSnippet
parent: "[[Template Snippet MOC]]"
space:
  - Vault Resources
tags:
  - CodeSnippet
date_created: 2025-01-30
date_modified: 01-30-2025, 1:30:42 pm
---
# Create Folder and Move File
- Creates a folder and moves newly created file
- use in conjunction with [[Name Note and Create H1]]
```javascript
	const dir = "/path/to/folder/";
	if (!tp.file.exists(dir)) {
	  await this.app.vault.createFolder(dir);
	}	
	await tp.file.move(dir + titleName);
```

- Or have a prompt to ask what the path
```javascript
	const dir = await tp.system.prompt("Path to Folder (e.g. /parentFolder/childFolder/)")
```