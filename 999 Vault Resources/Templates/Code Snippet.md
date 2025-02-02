<%* 

	const snippetType = await tp.system.prompt(
    "What type of snippet (e.g. CSS, Dataview, Template, etc)"
  );
	const dir = `/999 Vault Resources/Snippets/${snippetType}/`
	console.log('directory path', dir)
	if (!tp.file.exists(dir)) {
		await this.app.vault.createFolder(dir)
	}
	let titleName = tp.file.title
	if (tp.file.title.startsWith("Untitled")) {
		titleName = await tp.system.prompt("Name of Snippet")
	}
	const parentName = `${snippetType} Snippet MOC`
	await tp.file.rename(titleName)
	await tp.file.move(dir + titleName);
	
-%>
---
file_type: CodeSnippet
parent: "[[<% parentName %>]]"
space: [Vault Resources]
date_created: 
date_modified: 
title: "<% titleName %>"
tags: [CodeSnippet]
---
# <% titleName %>
- What does the snippet do?
```javascript
	<% tp.file.cursor() %>
```