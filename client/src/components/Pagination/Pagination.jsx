const Paginado = ({ current, setCurrent, max, input, setInput }) => {
  const next = () => {
    setCurrent(current + 1);
    setInput(input + 1);
  };
  const previous = () => {
    setCurrent(current - 1);
    setInput(input + 1);
  };

  return (
    <div>
        <button disabled={current === 1} onClick={previous}>
            {"<"}
        </button>
        <input type="text" maxLength="2" name="page" autoComplete="off" onChange={(event)=> setInput(event)} value={input} />
        <span>of {max}</span>
        <button disabled={current === max} onClick={next}>
            {">"}
        </button>
    </div>
  )
};

export default Paginado;
