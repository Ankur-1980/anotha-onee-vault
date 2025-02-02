const path = require('path');
const fs = require('fs');

// Dynamically require the newTitle.js file based on the vault path
const scriptDir = path.join(
  app.vault.adapter.basePath,
  '999 Vault Resources/Scripts/JavaScript'
);
const promptForTitle = require(path.join(scriptDir, 'promptForTitle.js'));
const createFolder = require(path.join(scriptDir, 'createFolder.js'));
const createFile = require(path.join(scriptDir, 'createFile.js'));
const getTemplateContent = require(path.join(
  scriptDir,
  'getTemplateContent.js'
));

module.exports = async function (params) {
  const { app, quickAddApi } = params;

  // Prompt for name of file
  const title = await promptForTitle(quickAddApi);

  // Check for folder
  const folderPath = '300 Hobbies/311 EDH TEST';
  await createFolder(app, folderPath);
  // console.log('newFolder', newFolder);

  // get template content
  const templateName = 'Quick Note Template';
  const templatePath = `999 Vault Resources/Templates/${templateName}.md`;
  const templateFile = app.vault.getAbstractFileByPath(templatePath);

  if (!templateFile) {
    console.warn(`Template file not found: ${templatePath}`);
    return null;
  }
  const templateContent = await params.app.vault.read(templateFile);
  // const templateName = 'Quick Note Template';
  // const templatePath = `999 Vault Resources/Templates/${templateName}.md`;
  // console.log('first', templatePath);
  // const templateContent = await getTemplateContent(app, templatePath);

  //   Create file
  await createFile(app, folderPath, title, templateContent);
  // const targetPath = `${folderPath}/${title}`;
  // const filePath = `${targetPath}.md`;
  // console.log('filepath', filePath);
  // const file = await app.vault.create(filePath, templateContent);
  // if (!file) {
  //   new Notice('Failed to create the note.');
  //   return;
  // }

  new Notice(`Note "${title}" created successfully!`);
};
