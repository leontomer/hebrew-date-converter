export const ConvertDate = async (date: string) => {
  const res = await fetch(
    `https://www.hebcal.com/converter?cfg=json&date=${date}&g2h=1&strict=1`
  );
  const jsonData = await res.json();
  return jsonData?.hebrew;
};
