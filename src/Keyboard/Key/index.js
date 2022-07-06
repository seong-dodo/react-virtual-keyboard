const Key = ({
  value, className, isActive, onClick, onMouseUp, onMouseDown
}) =>{ 

  return (
    <div className={isActive ? className + ' active' : className} 
      onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      <div className="keyValue">{value}</div>
    </div>
  )
}

export default Key;