import React, { useEffect, useState } from 'react'
import Paciente from '../components/Paciente';
import Form  from '../components/Form';


const Home = () => {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  );
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes))
  }, [pacientes])
  

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );

    setPacientes(pacientesActualizados);
  };

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

            <Form setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} setPaciente={ setPaciente} />
          </div>

          <div className="date__register">
            {pacientes && pacientes.length ? (
              <>
                <h2 className="date__subtitle">Listado de Pacientes</h2>
                <p className="date__details">
                  Administra tus{" "}
                  <span className="date__details date__color">
                    Pacientes y Citas
                  </span>
                </p>

                <div className="date__date--container">
                  <Paciente
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                  />
                </div>
              </>
            ) : (
              <>
                <h2 className="date__subtitle">No hay paciente</h2>
                <p className="date__details">
                  Comienza agragando pacientes{" "}
                  <span className="date__details date__color">
                    y apareceran aquí
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home