
import './App.css';
import titulo from '../src/img/titulo.png';

class Usuario{
  nombres: string;
  apellidos:string;
  correoElectronico:string;
  password:string;

  constructor(){
    this.nombres = "juan";
    this.apellidos = "perez";
    this.correoElectronico = "juanito@juanit.cl"
    this.password = "juanito.password"
  }
}

function App() {
  return (
    <div className="App">
      <div className="App">
        <img src={titulo} alt="titulo" />
        <div className='formulario'>
          <form className ='entradas'>
            <div className='input'>
              <label>Nombres</label> <br></br>
              <input className='datos'></input>  
            </div>
            <div className='input'>
              <label>Apellidos</label><br></br>
              <input className='datos'></input>
            </div>
            <div className='input'>
              <label>Contraseña</label><br></br>
              <input className='datos' type="password"></input>
            </div>
            <div className='input'>
              <label>Correo Electronico</label><br></br>
              <input className='datos' type = "email"></input>
            </div>
            <div className='input'>
              <button className='boton'> Registrarse</button>
            </div>
            <div id='links'>
              <a target={"_blank"} href='https://github.com/EduardoPalma/nutrifoods'>Repositorio del Proyecto</a>
              <p><a href='#final'> Contactanos</a></p>
              <p>Copyright 2022</p>
            </div>
          </form>
        </div>
      </div>
      <div id = "final" className='final'>Autores: <br />
        <span>Bairon Tapia</span><br></br>
        <span>Eduardo Palma</span>
      </div>
    </div>  
  );
}

export default App;
