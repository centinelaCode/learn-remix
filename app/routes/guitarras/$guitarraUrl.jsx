import { useLoaderData } from '@remix-run/react'

import { getGuitarraUrl } from '~/models/guitarras.server';
import styles from '~/styles/guitarras.css'


export function links() {
   return [
     {
       rel: 'stylesheet',
       href: styles
     }
   ]
 }
 

export async function loader({params}) {
   // obtenemos el params de la url
   const { guitarraUrl } = params;

   const guitarra = await getGuitarraUrl(guitarraUrl);
   return guitarra
}

function Guitarra() {
   // obtenemos los dato del loader
   const guitarra = useLoaderData();
   console.log(guitarra.data[0].attributes)
   const { nombre, descripcion, imagen, precio} = guitarra.data[0].attributes;

   return (
      <main className="contendor guitarra">
         <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

         <div className="contenido">
            <h3>{nombre}</h3>
            <p className="texto">{descripcion}</p>
            <p className="precio">${precio}</p>
         </div>
      </main>
   )
}

export default Guitarra