import { buildUrl } from "./util";

export async function fetchConspiracyBoard(boardId: number) {
  const response = await fetch(buildUrl(`/api/board/${boardId}`), {
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
