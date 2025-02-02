module.exports = async function createFolder(app, targetPath) {
  // Check for folder
  if (!app.vault.getFolderByPath(targetPath)) {
    console.warn('Folder does not exist, creating a new one', targetPath);
    await app.vault.createFolder(targetPath);
  }
};
