import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server';
import Guitarra from '~/components/guitarra'

export async function loader() {
  // ==== forma de hacer una petición a una api ====
  // const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  // const resultado = await respuesta.json();


  // ==== Otra forma de hacer una petición a una api ====
  const guitarras = await getGuitarras();
  // console.log(guitarras) // solo se muestran en la consola del servidor
  
  return guitarras.data;
}



function Tienda() {

  //obtenemos las guitarras
  const guitarras = useLoaderData();
  // console.log(guitarras)
  

   return (
     <main className="contenedor">
      <h2 className="heading">Nuestra Colección</h2>

      { guitarras.length && (
        <div className="guitarras-grid">
          {guitarras.map(guitarra => (
            <Guitarra 
              key={guitarra?.id}
              guitarra={guitarra?.attributes}

            />
          ))}
        </div>
      )}

     </main>
   )
 }
 
 export default Tienda