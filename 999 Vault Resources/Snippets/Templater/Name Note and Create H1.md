---
file_type: CodeSnippet
parent: "[[Template Snippet MOC]]"
space: [Vault Resources]
date_created: 
date_modified: 
title: "Code Snippet"
tags: [CodeSnippet]
---
# Name Note and Create H1
- this prompts to name the file and will automatically create H1 with title name
```javascript
	let titleName = tp.file.title;
	if (tp.file.title.startsWith("Untitled")) {
	  titleName = await tp.system.prompt("Note Title");
	}
	await tp.file.rename(titleName);
```

- Remove spaces
- # < % titleName % >