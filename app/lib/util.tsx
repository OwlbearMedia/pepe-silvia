export function buildUrl(link: string): string {
  let url = '';

  switch (process.env.VERCEL_ENV) {
    case 'preview':
      url = `https://${process.env.VERCEL_BRANCH_URL}/${link}`;
      break;
    case 'production':
      url = `https://pepe-silvia.vercel.app/${link}`;
      break;
    default:
      url = `http://localhost:3000/${link}`;
  }

  return url;
}
