const Paciente = ({  pacientes, setPaciente, eliminarPaciente }) => {

  const handlerEliminar = (id) => {
    // eslint-disable-next-line no-restricted-globals
    const respuesta = confirm("Deseas eliminar este paciente?");

    if (respuesta) {
      eliminarPaciente(id);
    }
  }

  return (
    <>
      {pacientes.map((paciente) => {
        return (
          <div key={paciente.id} className="date__date">
            <p className="date__content">
              Nombre:{""} {""}
              <span className="date__result">{paciente.nombre}</span>
            </p>
            <p className="date__content">
              Propietario:{""} {""}
              <span className="date__result">{paciente.propietario}</span>
            </p>
            <p className="date__content">
              Email:{""} {""}
              <span className="date__result">{paciente.email}</span>
            </p>
            <p className="date__content no-margin">
              Sintomas:{""} {""}
              <span className="date__result">{paciente.sintomas}</span>
            </p>

            <div className="date__buttons">
              <button onClick={()=> setPaciente(paciente)} className="date__btn" type="button">
                editar
              </button>
              <button onClick={() => handlerEliminar(paciente.id)} className="date__btn date__btn--borrar" type="button">
                borrar
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Paciente;
