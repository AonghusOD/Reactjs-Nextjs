import passport from 'passport';
import { getSession } from 'next-auth/client';

export default function withAuth(handler) {
  return async (req, res) => {
    const session = await getSession({ req });

    if (!session) {
      res.writeHead(302, { Location: '/login' });
      res.end();
      return { props: {} };
    }

    return await handler(req, res);
  };
}
