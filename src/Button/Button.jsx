import './Button.css'


// eslint-disable-next-line react/prop-types
const Btn = ({texto, source}) => {
    return(
        <div>
            <button src={source}>{texto}</button>
        </div>
    )
}

export default Btn;
