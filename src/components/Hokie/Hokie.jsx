import { useState } from 'react';

export default function Hokie() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  //   const handleInputEmail = e => setEmail(e.target.value);
  //   const handleInputName = e => setName(e.target.value);

  const handleInputValue = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;

      case 'name':
        setName(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <form action="">
      <label htmlFor="">
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputValue}
        />
      </label>
      <label htmlFor="">
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputValue}
        />
      </label>
      <button type="submit">Push me</button>
    </form>
  );
}
