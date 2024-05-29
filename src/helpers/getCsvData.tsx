// @ts-nocheck
const csvStringToArray = (data) => {
  const re = /(,|\r?\n|\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^,\r\n]*))/gi;
  const result = [[]];
  let matches;
  while ((matches = re.exec(data))) {
    if (matches[1].length && matches[1] !== ",") result.push([]);
    result[result.length - 1].push(
      matches[2] !== undefined ? matches[2].replace(/""/g, '"') : matches[3]
    );
  }
  return result;
};

export const getCsvData = async function (
  url: string,
  includeColumnNames: boolean = true
) {
  const response = await fetch(url);
  const text = await response.text();
  let data = csvStringToArray(text);
  if (!includeColumnNames) {
    data.shift();
  }
  return data;
};
