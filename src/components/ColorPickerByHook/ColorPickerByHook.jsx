import { useState } from 'react';
import css from './ColorPickerByHook.module.css';

export default function ColorPickerByHook({ colors }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const makeOptionClasses = index => {
    const classes = [css.button];

    if (activeOptionIdx === index) {
      classes.push(css.buttoActive);
    }

    return classes.join(' ');
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <div className={css.wrapper}>
        <p>{colors[activeOptionIdx].label}</p>
        {colors.map(({ label, color }, index) => (
          <button
            type="button"
            className={makeOptionClasses(index)}
            key={label}
            style={{
              backgroundColor: color,
            }}
            onClick={() => {
              setActiveOptionIdx(index);
            }}
          >
            Click me
          </button>
        ))}
      </div>
    </div>
  );
}
