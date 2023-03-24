import { useLoaderData } from '@remix-run/react'

import { getPostUrl } from '~/models/posts.server'
import {formatearFecha, formatearHora} from '~/utils/helpers'
import styles from '~/styles/blog.css'


export function meta({data}) {
   // console.log(data.titulo)

   if(!data) {
      return {
         title: 'GuitarLA - Entrada no encontrada',
         description: `Guitarras, venta de guitarras, entrada no encontrada`
      }
   }
   
   return (
      {      
        title: `GuitarLA - Nuestro Blog ${data.titulo}`,
        description: `GuitarLA , Blog de música y venta de guitarras ${data.titulo}`
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


export async function loader({params}) {
   // obtenemos el params de la url
   const { postUrl } = params;
   const post = await getPostUrl(postUrl);

   // cachamos el error en caso de que la respuesta venga como array vacio
   if(post.data.length === 0) {
      throw new Response('', {
         status: 404,
         statusText: 'Entrada no encontrado'
      })
   }

   // console.log(post)
   return post?.data[0]?.attributes
}

function Post() {

   const post = useLoaderData();
   // console.log(post)

   const { titulo, contenido, imagen, publishedAt } = post;

   return (
      <article className="contenedor post">
         <img className="imagen" src={imagen?.data?.attributes?.url} alt={`Imagnen blog ${titulo}`} />

         <div className="contenido">
            <h3>{titulo}</h3>
            <p className="texto">{contenido}</p>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <span className="hora">{formatearHora(publishedAt)}</span>
         </div>
      </article>
  )
}

export default Post