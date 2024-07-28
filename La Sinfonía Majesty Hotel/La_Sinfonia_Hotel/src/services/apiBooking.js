import { API, BEARER } from "../utils/constant";
import { getToken } from "../utils/helpers";
import { PAGE_SIZE } from "../utils/constant";
export async function createBooking(newBooking) {
  const authToken = getToken();
  if (!authToken) return null;
  const res = await fetch(`${API}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${BEARER} ${authToken}`,
    },
    body: JSON.stringify(newBooking),
  });
  const data = await res.json();
  if (data?.error) throw new Error(data?.error.message);

  return data;
}

export async function getBookings({ userId, filter, sortBy, page }) {
  const authToken = getToken();
  if (!authToken) return null;
  const response = await fetch(
    `${API}/bookings?filters[guestId][$eq]=${userId}&${filter ? `${filter}&` : ""}${sortBy ? `sort=${sortBy.field}:${sortBy.direction}&` : ""}${page ? `pagination[start]=${(page - 1) * PAGE_SIZE}&pagination[limit]=${(page - 1) * PAGE_SIZE + PAGE_SIZE}&` : ""}populate=*`,
    {
      headers: { Authorization: `${BEARER} ${authToken}` },
    }
  );

  const data = await response.json();

  if (data?.error) throw new Error(data?.error.message);
  return data;
}
export async function getBookingsByRoom({ roomId }) {
  const today = new Date().toISOString();
  const authToken = getToken();
  if (!authToken) return null;
  const response = await fetch(
    `${API}/bookings?filters[room][$eq]=${roomId}&filters[dateEnd][$gte]=${today}}`,
    {
      headers: { Authorization: `${BEARER} ${authToken}` },
    }
  );

  const data = await response.json();

  if (data?.error) throw new Error(data?.error.message);
  return data;
}

export async function getBooking(id) {
  const authToken = getToken();
  if (!authToken) return null;
  const response = await fetch(`${API}/bookings/${id}?populate=*`, {
    headers: { Authorization: `${BEARER} ${authToken}` },
  });

  const data = await response.json();

  if (data?.error) throw new Error(data?.error.message);
  return data;
}
export async function deleteBooking(id) {
  const authToken = getToken();
  if (!authToken) return null;
  const res = await fetch(`${API}/bookings/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${BEARER} ${authToken}`,
    },
  });
  const data = await res.json();
  if (data?.error) throw new Error(data?.error.message);
  return data;
}
export async function updateBooking({ edit, id }) {
  const authToken = getToken();
  if (!authToken) return null;
  console.log(edit, id);
  const res = await fetch(`${API}/bookings/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${BEARER} ${authToken}`,
    },
    body: JSON.stringify(edit),
  });
  const data = await res.json();
  if (data?.error) throw new Error(data?.error.message);

  return data;
}
