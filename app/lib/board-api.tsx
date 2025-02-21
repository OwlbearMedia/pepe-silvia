import { cookies } from 'next/headers'

export async function fetchConspiracyBoard(boardId: number) {
  const cookieStore = await cookies();
  const remember_token = cookieStore.get('remember_token');
  let cookie = '';

  if (remember_token) {
    cookie = `${remember_token.name}=${remember_token.value}`;
  }

  const response = await fetch(`/api/board/${boardId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': cookie,
      'Access-Control-Allow-Credentials': 'true',
    },
  });

  if (response.ok) {
    const json = await response.json();
    return json;
  }
}
