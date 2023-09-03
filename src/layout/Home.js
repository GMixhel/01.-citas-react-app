import React from 'react'
import Paciente from '../components/Paciente';
import Form  from '../components/Form';

const Home = () => {
  return (
    <>

      <div className="date container">
        <h1 className="date__title">
          Seguimiento Pacientes
          <span className="date__title date__color"> Veterinaria</span>
        </h1>

        <div className="date__container">
          <div className="date__managment">
            <h2 className="date__subtitle">Seguimiento Pacientes</h2>
            <h3 className="date__details">
              Añade Pacientes y
              <span className="date__details date__color"> Administralos</span>
            </h3>

           <Form />
          </div>

          <div className="date__register">
            <h2 className="date__subtitle">Listado de Pacientes</h2>
            <p className="date__details">
              Administra tus{" "}
              <span className="date__details date__color">
                Pacientes y Citas
              </span>
            </p>

            <div className="date__date--container">
              <Paciente />
              <Paciente />
              <Paciente />
              <Paciente />
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
}

export default Home