const BASE_URL = "http://localhost:1337/";
export async function getRoom(id) {
  const data = await fetch(`${BASE_URL}api/rooms/${id}?populate=*`);

  if (data === undefined) throw new Error("Can't fetch data");
  const room = await data.json();

  return room.data;
}
