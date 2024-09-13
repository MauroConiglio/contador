import 'bootstrap/dist/css/bootstrap.min.css'
import Informacion from './components/Informacion.jsx'
import Contador from './components/Contador.jsx'
function App() {
 

  return (
    <main className='container my-4'>
      <h1 className='text-center'>Primer proyecto React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione
         vitae, fugiat harum accusamus quaerat ipsum deleniti labore adipisci 
         repellat. Incidunt quo quae nobis. Commodi esse sint quo, nulla,
          debitis a quaerat dignissimos eum illo, nobis aliquam voluptates! 
          Atque dicta quisquam quasi rerum labore tenetur, corrupti deserunt
           architecto non eligendi!</p>
          <Informacion></Informacion>
          <Contador></Contador>
    </main>
   
  )
}

export default App
