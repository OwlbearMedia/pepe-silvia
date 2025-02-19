import { cookies } from 'next/headers'
const baseUrl = 'http://localhost:5328/api'

export async function fetchConspiracyBoard(boardId: number) {
  const cookieStore = await cookies();
  const remember_token = cookieStore.get('remember_token');
  let cookie = '';

  if (remember_token) {
    cookie = `${remember_token.name}=${remember_token.value}`;
  }

  const response = await fetch(`${baseUrl}/board/${boardId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': cookie,
      'Access-Control-Allow-Credentials': 'true',
    },
  });

  console.log(cookie);

  if (response.ok) {
    const json = await response.json();
    return json;
  }
}

export async function login({ email, password }: { email: string, password: string }) {
  const response = await fetch(`${baseUrl}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
}

export async function logOut() {
  const response = await fetch(`${baseUrl}/user/logout`, {
    method: 'GET',
  });

  if (response.ok) {
    return true;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
}
