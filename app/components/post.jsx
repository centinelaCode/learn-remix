import { Link } from '@remix-run/react'

import { formatearFecha, formatearHora } from '~/utils/helpers';

function Post({post}) {

   const {titulo, contenido, url, imagen, publishedAt} = post
   // console.log(post)

   return (
      <article className="post">
         <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`Imagnen blog ${titulo}`} />

         <div className="contenido">
            <h3>{titulo}</h3>
            <p className="resumen">{contenido}</p>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <span className="hora">{formatearHora(publishedAt)}</span>

            <Link className='enlace' to={`/posts/${url}`}>Leer Post</Link>                     
         </div>
      </article>
   )
}

export default Post