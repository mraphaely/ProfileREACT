import './App.css'
import avatar from '/img.png'

const Titulo = (props) => {
    return (
        <h2 style={{color: props.cor}}> {props.texto} </h2>
    )
}
const Subtitulo = ({color, text}) => {
    return(
        <p style={{color: color}}>{text}</p>
        )
  }
  

const Body = () => {
    return(
        <div style={{backgroundColor: '#171717'}}>
            <img src={avatar} alt="avatarpng" />
            
            <p id='inf'>
            <Titulo cor="white" texto="Maryana Raphaely" />
            <Subtitulo color="green" text="Desenvolvedor Web fullStack"/>
            </p>

            <p id='btns'>
              <button href="">GitHub</button>
              <button href="">FrontEnd Mentor</button>
              <button href="">Linkedin</button>
              <button href="">Twitter</button>
              <button href="">Instagram</button>
            </p>
        </div>
    )
}

export default Body