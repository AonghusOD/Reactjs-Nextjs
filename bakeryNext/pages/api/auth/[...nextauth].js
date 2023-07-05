import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Implement your own authentication logic here
        // This is just a dummy example
        const { email, password } = credentials;
        if (email === 'user@example.com' && password === 'password') {
          return { email };
        } else {
          throw new Error('Invalid email or password');
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async session(session, user) {
      session.user = user;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

export default (req, res) => NextAuth(req, res, options);
