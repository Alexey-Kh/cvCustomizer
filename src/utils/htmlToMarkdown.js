// utils/htmlToMarkdown.js
import TurndownService from "turndown";

const htmlToMarkdown = (htmlText) => {
  const turndownService = new TurndownService();
  let markdown = turndownService.turndown(htmlText);

  // Remove extra empty lines
  markdown = markdown.replace(/^\s*\n/gm, "");

  return markdown;
};

export default htmlToMarkdown;
