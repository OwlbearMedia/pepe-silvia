const baseUrl = 'https://server-of-the-outer-gods.com'

export async function fetchConspiracyBoard(boardId: number) {
  const response = await fetch(`${baseUrl}/api/board/${boardId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const json = await response.json();
    return json;
  }
}
