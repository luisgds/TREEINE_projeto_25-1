type QtdButtonProps = {
  quantidade: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export function UpdateButton({ quantidade, onIncrement, onDecrement }: QtdButtonProps) {
  return (
    <div className="mx-4 flex items-center gap-2">
      <button
        onClick={onDecrement}
        className="h-8 w-8 rounded-full border text-gray-600 hover:bg-gray-100"
        aria-label="Decrementar"
      >
        -
      </button>

      <span className="w-8 text-center font-medium" aria-live="polite">
        {quantidade}
      </span>

      <button
        onClick={onIncrement}
        className="h-8 w-8 rounded-full border text-gray-600 hover:bg-gray-100"
        aria-label="Incrementar"
      >
        +
      </button>
    </div>
  );
}