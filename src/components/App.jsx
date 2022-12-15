import User from './User';
import usersList from '../gallary.json';
import Counter from './Class';

export default function App() {
  return (
    <div>
      <User
        key={usersList[0].id}
        // url={usersList[0].url}
        // name={usersList[0].name}
        title={usersList[0].title}
        price={usersList[0].price}
      />

      <User
        key={usersList[1].id}
        url={usersList[1].url}
        name={usersList[1].name}
        title={usersList[1].title}
        price={usersList[1].price}
      />

      <User
        key={usersList[2].id}
        url={usersList[2].url}
        name={usersList[2].name}
        title={usersList[2].title}
        price={usersList[2].price}
      />

      <Counter />
    </div>
  );
}
