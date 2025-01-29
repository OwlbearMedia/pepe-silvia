const baseUrl = 'http://ec2-44-242-150-60.us-west-2.compute.amazonaws.com'

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
