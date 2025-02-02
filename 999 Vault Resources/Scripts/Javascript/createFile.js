module.exports = async function createFile(
  app,
  folderPath,
  title,
  templateContent
) {
  // Create file
  const targetPath = `${folderPath}/${title}`;
  const filePath = `${targetPath}.md`;
  console.log('filepath', filePath);
  const file = await app.vault.create(filePath, templateContent);
  if (!file) {
    new Notice('Failed to create the note.');
    return;
  }

  return file;
};
