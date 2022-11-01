function Grid(size) {
  const lines = Array(size-1).fill().map((_, i) => {
    const lineOffset = (i+1) * 100;
    return <g key={i}>
      <line x1="0" y1={lineOffset} x2={size*100} y2={lineOffset}></line>
      <line x1={lineOffset} y1="0" x2={lineOffset} y2={size*100}></line>
    </g>
  });

  return (
    <g strokeWidth="10" stroke="black">
      {lines}
    </g>
  );
}

export default Grid;