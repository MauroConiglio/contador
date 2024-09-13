import { useState } from "react";
const Contador = () => {

//let numero = 1;

//crear un estado
const [numero, setNumero] = useState(1)

const sumar = ()=> {
    setNumero(numero + 1)
    //console.log(numero)
}
const restar =()=>{
    setNumero(numero - 1)

}
    return (
        <section className="text-center my-5">
            <h2>Contador</h2>
            <h4>{numero}</h4>
            <button className="btn btn-primary me-2" onClick={sumar}>+1</button>
            <button className="btn btn-warning" onClick={restar}>-1</button>
        </section>
    );
};

export default Contador;