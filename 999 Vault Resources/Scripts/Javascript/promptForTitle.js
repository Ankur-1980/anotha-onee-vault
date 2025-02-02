module.exports = async function promptForTitle(quickAddApi) {
  // Prompt for name of file
  const title = await quickAddApi.inputPrompt(
    'Enter the title for the new note:'
  );
  if (!title) {
    new Notice('No title provided. Aborting!');
    return null; // Return null to indicate no input
  }
  return title; // Return the entered title
};
