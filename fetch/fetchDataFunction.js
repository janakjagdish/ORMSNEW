export default async function fetchData(place, params = { method: "GET" }) {
  const data = await (
    await fetch(
      `https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/${place}/`,
      params
    )
  ).json();
  console.log(data);
  return data;
}
