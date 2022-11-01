function SquareClickable(handleClick) {
  return (
    <rect onClick={handleClick} width="100" height="100" fillOpacity="0"></rect>
  );
}

export default SquareClickable;