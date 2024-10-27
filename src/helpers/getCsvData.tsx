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

/**
 * Convert a 2D array into a CSV string
 */
export const arrayToCsv = (data): string => {
  return data
    .map(
      (row) =>
        row
          .map(String) // convert every value to String
          .map((v) => v.replaceAll('"', '""')) // escape double quotes
          .map((v) => `"${v}"`) // quote it
          .join(",") // comma-separated
    )
    .join("\r\n"); // rows starting on new lines
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

const setItemWithExpiration = (
  key: string,
  value: any,
  expirationTimeInHours: number
) => {
  try {
    const now = new Date().getTime();
    const expirationTimeInMilliseconds = expirationTimeInHours * 60 * 60 * 1000;
    const item = {
      value: value,
      expiry: now + expirationTimeInMilliseconds,
    };
    localStorage.setItem(key, JSON.stringify(item));
  } catch (e) {
    /* do nothing, unsupported? */
  }
};

const getItemWithExpiration = (key: string) => {
  try {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date().getTime();

    if (now > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (e) {
    /* do nothing, unsupported? */
  }
};

export const getCsvDataWithCookieCaching = async function (
  url: string,
  includeColumnNames: boolean = true,
  expirationTimeInHours: number = 3
) {
  const cached = getItemWithExpiration(url);
  if (cached) {
    return cached;
  }

  const response = await fetch(url);
  const text = await response.text();
  let data = csvStringToArray(text);
  if (!includeColumnNames) {
    data.shift();
  }

  setItemWithExpiration(url, data, expirationTimeInHours);

  return data;
};
