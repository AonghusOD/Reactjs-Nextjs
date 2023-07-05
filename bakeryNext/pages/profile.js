import withAuth from '../middleware/withAuth';

function Profile({ user }) {
  return (
    <div>
      <h1>Welcome, {user.email}!</h1>
    </div>
  );
}

export default withAuth(Profile);
