---
file_type: CodeSnippet
parent: "[[Dataview Snippet MOC]]"
space:
  - Vault Resources
  - Dataview
date_created: 2025-01-30
date_modified: 01-30-2025, 1:30:42 pm
title: MOC List
tags:
  - CodeSnippet
---
# MOC List
- Creates a list of MOCs that live within a folder
- Need to copy entire code block and replace `javascript` with `dataviewjs`

```javascript
let pages = dv.pages('"path/to/folder"').where(p => p.file_type === "MOC");
	pages.sort(p => p.file.name, 'asc').forEach(p => dv.paragraph(dv.fileLink(p.file.path)));
```
`