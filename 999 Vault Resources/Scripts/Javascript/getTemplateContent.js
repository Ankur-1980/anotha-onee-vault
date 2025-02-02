module.exports = async function getTemplateFile(app, templatePath) {
  console.log('templatePath', templatePath);
  const templateFile = app.vault.getAbstractFileByPath(templatePath);

  if (!templateFile) {
    console.warn(`Template file not found: ${templatePath}`);
    return null;
  }
  const templateContent = await params.app.vault.read(templateFile);

  return templateContent;
};
