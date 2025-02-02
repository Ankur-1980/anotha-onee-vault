module.exports = async function (params) {
  const { app, quickAddApi } = params;

  // Step 1: Prompt the user for the note title
  const title = await quickAddApi.inputPrompt(
    'Enter the title for the new note:'
  );
  if (!title) {
    new Notice('No title provided. Aborting!');
    return;
  }

  // Step 2: Define the file path and template content
  const filePath = `000 Inbox/${title}.md`; // Adjust the path as needed
  const templateContent = `---
title: ${title}
tags: []  # Placeholder for tags
created: ${new Date().toISOString().split('T')[0]}
---
`;

  // Step 3: Create the new note
  const file = await app.vault.create(filePath, templateContent);
  if (!file) {
    new Notice('Failed to create the note.');
    return;
  }

  // Step 4: Use MetaEdit to update additional metadata, including tags
  const newFileAbstract = app.vault.getAbstractFileByPath(filePath); // Required for MetaEdit
  app.fileManager.processFrontMatter(newFileAbstract, (frontmatter) => {
    console.log('newFileAbstract frontMatter:', frontmatter);
    frontmatter['tags'] = ['quickadd', 'metaedit', 'automation'];
    console.log('updated frontmatter', frontmatter);
  });

  if (!newFileAbstract) {
    new Notice(`Failed to retrieve the file: ${filePath}`);
    return;
  }

  // Step 5: Notify the user and optionally open the file
  new Notice(`Note "${title}" created successfully!`);
  await app.workspace.openLinkText(filePath, '/', true);
};
