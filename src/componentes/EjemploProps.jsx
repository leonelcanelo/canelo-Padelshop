import {useState} from 'react'

const EjemploProps = ({biemvenido, texto}) =>{
    const [text, setText] = useState('hola ')
    //usando props solo en el parametro del componente
    //console.log(props)
    console.log('me actualizo')
    const changeText = () =>{
        setText('Chau')
    }
    
    return(
        <div>
            {/*<p>{biemvenido}</p>
            <p>{texto}</p>*/}
            <p>{text}</p>
            <button onClick={changeText} >Cambiar</button>
        </div>
       
    )
}

export default EjemploProps