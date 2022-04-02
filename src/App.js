import RouterSetup from './router/index';

const App = () => {
  let users = localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users'))
    : [];

  let admin = users.find((item) => item.username === 'admin');

  if (!admin) {
    localStorage.setItem(
      'users',
      JSON.stringify([
        ...users,
        { name: 'Admin manager', username: 'admin', password: 'admin' },
      ])
    );
  }

  return <RouterSetup />;
};

export default App;
