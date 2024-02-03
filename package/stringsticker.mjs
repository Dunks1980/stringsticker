export default function ss(inputStr, origFormat, targetFormat) {
  const placeholderPattern = /\{\{[^\}]+\}\}/g;
  const placeholders = origFormat.match(placeholderPattern);
  let regexSafeOrigFormat = origFormat.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  placeholders.forEach((placeholder) => {
    const escapedPlaceholder = placeholder.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );
    regexSafeOrigFormat = regexSafeOrigFormat.replace(
      escapedPlaceholder,
      "(.*?)"
    );
  });
  const extractionRegex = new RegExp("^" + regexSafeOrigFormat + "$");
  const extractedValues = inputStr.match(extractionRegex);
  if (!extractedValues) {
    console.log("Format mismatch or error in input string.");
    return inputStr;
  }
  extractedValues.shift();
  let formatMap = {};
  placeholders.forEach((placeholder, index) => {
    formatMap[placeholder] = extractedValues[index];
  });
  let output = targetFormat;
  placeholders.forEach((placeholder) => {
    const placeholderRegex = new RegExp(
      placeholder.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "g"
    );
    output = output.replace(placeholderRegex, formatMap[placeholder]);
  });
  return output;
}
