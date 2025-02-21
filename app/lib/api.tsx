

export async function login({ email, password }: { email: string, password: string }) {
  const response = await fetch(`/api/user/login`, {
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
  const response = await fetch(`/api/user/logout`, {
    method: 'GET',
  });

  if (response.ok) {
    return true;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
}
