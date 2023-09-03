import { useState } from "react";


const Form = () => {

  const [nombre, setNombre] = useState('')

  const handleonSubmit = (e) => {
    e.preventDefault()
    console.log('enviado form')
  }

  return (
    <>
      <form onSubmit={handleonSubmit} className="date__form">
        <div className="date__field">
          <label htmlFor="pet" className="date__label">
            Nombre Mascota {nombre}
          </label>
          <input
            id="pet"
            className="date__input"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="date__field">
          <label htmlFor="owner" className="date__label">
            Nombre Propietario
          </label>
          <input
            id="owner"
            className="date__input"
            type="text"
            placeholder="Nombre del propietario"
          />
        </div>
        <div className="date__field">
          <label htmlFor="email" className="date__label">
            Email
          </label>
          <input
            id="email"
            className="date__input"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="date__field">
          <label htmlFor="symptoms" className="date__label">
            Sintomas
          </label>
          <textarea
            id="symptoms"
            className="date__input"
            placeholder="Describe los sintomas"
          />
        </div>

        <input
          type="submit"
          className="date__submit"
          value="agregar paciente"
        />
      </form>
    </>
  );
};

export default Form;