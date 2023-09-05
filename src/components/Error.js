import React from 'react'

const Error = ({mensaje}) => {
  return (
    <>
      <div>
        <p className="date__error">{mensaje}</p>
      </div>
    </>
  );
}

export default Error