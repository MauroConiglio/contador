import Teoria from "./Teoria.jsx"

const Informacion = () => {
// aqui agrego la mayor parte de logica
const anio= new Date().getFullYear();

    return (
        //algo de logica
        <section>
            {/*aqui agrego comentario del maquetado*/}
            <h2>Introduccion a React</h2>
            <p> lskdgfmsld;knasdlknadsflk;asnd
                faskjdfnaskdfnadakjsdfnadskjfbalsdnfhsdkfjgndskfjgnsdfkgsdn
                fkgjdsfngkjlsdfgnlskdfjlksfmgsdfk;lgnsdkfjsdnflkdfsng
            </p>
            <Teoria comision='101i' anioActual={anio}></Teoria>
        </section>
        
    );
};

export default Informacion;