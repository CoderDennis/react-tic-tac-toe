function SquareClickable(callback) {
  return (
    <rect onClick={callback} width="100" height="100" fillOpacity="0"></rect>
  );
}

export default SquareClickable;