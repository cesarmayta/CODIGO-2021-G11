import React,{useState} from "react";
import Chat from "./componentes/Chat";

function App() {
  const [nombre,setNombre] = useState("");
  const [registrado,setRegistrado] = useState(false);

  const registrar = (e) => {
    e.preventDefault();
    if(nombre !== ""){
      setRegistrado(true);
    }
  }
  return (
    <div className="container app">
      {!registrado && (
          <div className="row app-one">
            <div className="col-sm-12">
                <div className="row heading">
                  <div className="col-sm-3 col-xs-3 heading-avatar">
                    <div className="heading-avatar-icon">
                      <img src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                    </div>
                  </div>
                  
                </div>
                  <div className="col-sm-12 searchBox-inner">
                    <div className="form-group has-feedback">
                      <form onSubmit={registrar}>
                        <input id="searchText" type="text" className="form-control" 
                        value={nombre} onChange={(e) => setNombre(e.target.value)}
                        name="searchText" placeholder="Usuario"/>
                        <input type="submit" className="btn btn-success" aria-hidden="true" value="INGRESAR" />
                      </form>
                    </div>
                  </div>
            </div>
          </div>
        )}

        {registrado && <Chat nombre={nombre} />}
    </div>
  );
}

export default App;
