import { API, BEARER } from "../utils/constant";
import { getToken } from "../utils/helpers";

export async function login({ email, password }) {
  const res = await fetch(`${API}/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ identifier: email, password: password }),
  });
  const data = await res.json();

  if (data?.error) throw new Error(data?.error.message);

  return data;
}

export async function signup(newUser) {
  const res = await fetch(`${API}/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  const data = await res.json();

  if (data?.error) throw new Error(data?.error.message);

  return data;
}

export async function getCurrentUser() {
  const authToken = getToken();

  if (!authToken) return null;
  const res = await fetch(`${API}/users/me?populate=role`, {
    headers: { Authorization: `${BEARER} ${authToken}` },
  });

  const data = await res.json();
  if (data?.error) throw new Error(data?.error.message);

  return data;
}
export async function updateCurrentUser(updatedUser) {
  const authToken = getToken();

  if (!authToken) return null;

  const res = await fetch(`${API}/auth/change-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${BEARER} ${authToken}`,
    },
    body: JSON.stringify(updatedUser),
  });

  const data = await res.json();
  console.log(data);
  if (data?.error) throw new Error(data?.error.message);
  return data;
}
