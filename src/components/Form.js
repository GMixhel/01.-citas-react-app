import { useEffect, useState } from "react";
import Error from "./Error";


const Form = ({pacientes, setPacientes, paciente, setPaciente}) => {


  const [nombre, setNombre] = useState('');
  const [propietario, setPropetario] = useState('');
  const [email, setEmail] = useState('');
  const [sintomas, setSintomas] = useState('');


  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length) {
      setNombre(paciente.nombre);
      setPropetario(paciente.propietario);
      setEmail(paciente.email);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);
  


  
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha

  }
  

  const handleonSubmit = (e) => {
    e.preventDefault()
    //Validar Form

    if ([nombre, propietario, email, sintomas].includes('')) {
      setError(true)
      return
    } 
    setError(false)   

    //Objeto Paciente

    const objetoPacientes = {
      nombre,
      propietario,
      email,
      sintomas,
     
    }

    if (paciente.id) {
      //edtar el registro

      objetoPacientes.id = paciente.id
      const pacientesActualizados = pacientes.map(pacientesState =>  pacientesState.id === paciente.id ? objetoPacientes : pacientesState)      
      setPacientes(pacientesActualizados)
      setPaciente({})
      
    } else {
      //Nuevo registro


      //Generar nuevo ID
      objetoPacientes.id = generarId()

      //Agregando mas pacientes con el spreed
      setPacientes([...pacientes, objetoPacientes]);
    }
    
 

    //reiniciar el state pacientes en el form
    setNombre('');
    setPropetario('')
    setEmail('')
    setSintomas('')

  }




  return (
    <>
      <form onSubmit={handleonSubmit} className="date__form">
        {error && <Error mensaje="Todos los campos son obligatorios" />}
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
            value={propietario}
            onChange={(e) => setPropetario(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="date__submit"
          value={paciente.id ? 'editar paciente' : 'agregar paciente'}
        />
      </form>
    </>
  );
};

export default Form;