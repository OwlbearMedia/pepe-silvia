export async function fetchConspiracyNodes() {
  const response = await fetch(`${process.env.URL}/api/nodes`, {
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
