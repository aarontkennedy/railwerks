export const getGoogleSheetsData = async function (
  sheetId: string,
  pageId: string = "0",
  includeColumnNames: boolean = true
) {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&tq&gid=${pageId}`;

  const response = await fetch(url);
  const text = await response.text();
  const jsonStringMatch = text.match(/(?<="table":).*(?=}\);)/g);
  const json = JSON.parse(
    jsonStringMatch && jsonStringMatch.length > 0 ? jsonStringMatch[0] : "{}"
  );

  let table = [];
  if (includeColumnNames) {
    let row: any[] = [];
    json.cols.forEach((column: { label: any }) => row.push(column.label));
    table.push(row);
  }
  json.rows.forEach((r: { c: any[] }) => {
    let row: string[] = [];
    r.c.forEach((cel) => {
      let value = "";
      try {
        value = cel.f ? cel.f : cel.v;
      } catch (e) {}
      row.push(value);
    });
    table.push(row);
  });

  return table;
};
