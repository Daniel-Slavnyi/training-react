import User from './user';
import user from '../gallary.json';

export default function App() {
  return (
    <div>
      {user.map(user => (
        <User
        key={user.id}
        url = {user.url}
        name={user.name}
        title={user.title}
        price={user.price}
      />
      ))}
    </div>
  );
};
