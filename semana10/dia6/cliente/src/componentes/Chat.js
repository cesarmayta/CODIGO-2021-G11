import React,{useState,useEffect} from "react";
import socket from "./Socket";


const Chat = ({nombre}) => {

    const [mensaje,setMensaje] = useState("");
    const [mensajes,setMensajes] = useState([]);
    
    /*useEffect(()=>{
        socket.emit("usuario",nombre);
    },[nombre]);*/

    useEffect(() => {
        socket.on("mensajes", (mensaje) => {
          setMensajes([...mensajes, mensaje]);
        });
    
        return () => {
          socket.off();
        };
      }, [mensajes]);

    console.log(mensajes);

    const submit = (e) => {
        e.preventDefault();
        socket.emit("mensaje",nombre,mensaje);
        setMensaje("");
    };
    
    return (
        <div className="row app-one">
            <div className="col-sm-4 side">
            <div className="side-one">
                <div className="row heading">
                <div className="col-sm-3 col-xs-3 heading-avatar">
                    <div className="heading-avatar-icon">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                    </div>
                </div>
                <div className="col-sm-1 col-xs-1  heading-dot  pull-right">
                    <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
                </div>
                <div className="col-sm-2 col-xs-2 heading-compose  pull-right">
                    <i className="fa fa-comments fa-2x  pull-right" aria-hidden="true"></i>
                </div>
                </div>

                <div className="row searchBox">
                <div className="col-sm-12 searchBox-inner">
                    <div className="form-group has-feedback">
                    <input id="searchText" type="text" className="form-control" name="searchText" placeholder="Search" />
                    <span className="glyphicon glyphicon-search form-control-feedback"></span>
                    </div>
                </div>
                </div>

                <div className="row sideBar">
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="side-two">
                <div className="row newMessage-heading">
                <div className="row newMessage-main">
                    <div className="col-sm-2 col-xs-2 newMessage-back">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </div>
                    <div className="col-sm-10 col-xs-10 newMessage-title">
                    New Chat
                    </div>
                </div>
                </div>

                <div className="row composeBox">
                <div className="col-sm-12 composeBox-inner">
                    <div className="form-group has-feedback">
                    <input id="composeText" type="text" className="form-control" name="searchText" placeholder="Search People" />
                    <span className="glyphicon glyphicon-search form-control-feedback"></span>
                    </div>
                </div>
                </div>

                <div className="row compose-sideBar">
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row sideBar-body">
                    <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" />
                    </div>
                    </div>
                    <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">John Doe
                        </span>
                        </div>
                        <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="col-sm-8 conversation">
            <div className="row heading">
                <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                <div className="heading-avatar-icon">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" />
                </div>
                </div>
                <div className="col-sm-8 col-xs-7 heading-name">
                <a className="heading-name-meta">{nombre}
                </a>
                <span className="heading-online">Online</span>
                </div>
                <div className="col-sm-1 col-xs-1  heading-dot pull-right">
                <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
                </div>
            </div>

            <div className="row message" id="conversation">
                <div className="row message-previous">
                <div className="col-sm-12 previous">
                    
                    Show Previous Message!
                   
                </div>
                </div>
                <div className="row message-body">
                <div className="col-sm-12 message-main-sender">
                    <div className="sender">
                    {mensajes && mensajes.map((e,i)=>{
                        <div key={i}>
                            <div className="message-text">hola</div>
                            <div className="message-time pull-right">jose</div>
                        </div>
                    })}
                    </div>
                </div>
                </div>
                <div className="row message-body">
                <div className="col-sm-12 message-main-sender">
                    <div className="sender">
                    <div className="message-text">
                        I am doing nothing man!
                    </div>
                    <span className="message-time pull-right">
                        Sun
                    </span>
                    </div>
                </div>
                </div>
            </div>

            <div className="row reply">
                <form onSubmit={submit}>
                    <div className="col-sm-1 col-xs-1 reply-emojis">
                    <i className="fa fa-smile-o fa-2x"></i>
                    </div>
                    <div className="col-sm-9 col-xs-9 reply-main">
                    <textarea className="form-control" rows="1" id="message" value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}></textarea>
                    </div>
                    <div className="col-sm-1 col-xs-1 reply-recording">
                    <i className="fa fa-microphone fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="col-sm-1 col-xs-1 reply-send">
                        <input type="submit" id="send" className="fa fa-send fa-2x" aria-hidden="true"/>
                    </div>
                </form>
            </div>
            </div>
    </div>
    );

}

export default Chat;