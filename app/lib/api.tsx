import { buildUrl } from "./util";

export async function fetchConspiracyNodes() {
  const response = await fetch(buildUrl('/api/nodes'), {
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
