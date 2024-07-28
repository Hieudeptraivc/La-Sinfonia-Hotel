const BASE_URL = "http://localhost:1337/";
export async function getRooms() {
  const data = await fetch(`${BASE_URL}api/rooms?populate=*`);

  if (data === undefined) throw new Error("Can't fetch data");
  const rooms = await data.json();
  return rooms.data;
}
