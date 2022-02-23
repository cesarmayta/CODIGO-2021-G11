import React,{Component} from 'react';
import axios from 'axios';

class App extends Component{

  constructor(props){
    super(props);
    this.state = ({
      alumnos :[]
    })
  }

  componentDidMount(){
    axios.get('http://localhost:5000/alumnos')
    .then(res=>{
      console.log(res.data);
      this.setState({
        alumnos:res.data
      })
    })
  }
  render(){
    return(
      <div><h1>Hola mundo react</h1>
      {
        this.state.alumnos.map(alumno => {
          return(
            <div>
              <p>{alumno.nombre}</p>
              <p>{alumno.email}</p>
            </div>
          )})
      }
      </div>
    )
  }
}

export default App;
