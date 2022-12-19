import User from './User';
import usersList from '../gallary.json';
import Counter from './Class';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#36f436' },
  { label: 'blue', color: '#5936f4' },
  { label: 'grey', color: '#a89391' },
  { label: 'pink', color: '#f436a5' },
  { label: 'indigo', color: '#3F51B5' },
];

export default function App() {
  return (
    <div>
      <Dropdown />

      <ColorPicker options={colorPickerOptions} />

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

      <Counter initialValue={9} />
    </div>
  );
}
