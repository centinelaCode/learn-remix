import { useLoaderData } from '@remix-run/react'

import { getGuitarraUrl } from '~/models/guitarras.server';
import styles from '~/styles/guitarras.css'


export async function loader({params}) {
   // obtenemos el params de la url
   const { guitarraUrl } = params;
   const guitarra = await getGuitarraUrl(guitarraUrl);

   if(guitarra.data.length === 0) {
      throw new Response('', {
         status: 404,
         statusText: 'Guitarra no encontrada'
      })
   }

   console.log(guitarra)

   return guitarra
}


export function meta({data}) {

   if(!data) {
      return {
         title: 'GuitarLA - Guitarra no encontrada',
         description: `Guitarras, venta de guitarras, guitarra no encontrada`
      }
   }
   
   return (
      {      
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
      }     
    )
}


export function links() {
   return [
     {
       rel: 'stylesheet',
       href: styles
     }
   ]
 }
 

function Guitarra() {
   // obtenemos los dato del loader
   const guitarra = useLoaderData();
   // console.log(guitarra.data[0].attributes)

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