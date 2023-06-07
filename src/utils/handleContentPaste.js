import htmlToMarkdown from "./htmlToMarkdown";

const handleContentPaste = async (event, setContent) => {
  const text = event.clipboardData.getData("text/html");
  console.log(text);
  // TODO: implement solid html check
  let regexForHTML = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/;
  const isHtml = regexForHTML.test(text);
  console.log(isHtml);
  if (isHtml) {
    event.preventDefault();
    const markdown = htmlToMarkdown(text);
    setContent(markdown);
  }
};

export default handleContentPaste;
