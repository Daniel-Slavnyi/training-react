export default function Controls({ onIncrement, onDecrement }) {
  return (
    <div>
      <button type="button" onClick={onIncrement}>
        Plus 1
      </button>
      <button type="button" onClick={onDecrement}>
        Minus 1
      </button>
    </div>
  );
}
