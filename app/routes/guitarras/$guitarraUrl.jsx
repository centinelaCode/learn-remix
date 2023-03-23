import { useLoaderData } from '@remix-run/react'

import { getGuitarraUrl } from '~/models/guitarras.server';


export async function loader({params}) {
   // obtenemos el params de la url
   const { guitarraUrl } = params;

   const guitarra = await getGuitarraUrl(guitarraUrl);
   return guitarra
}

function Guitarra() {

   const guitarra = useLoaderData();
   console.log(guitarra.data[0].attributes.nombre)

   return (
      <div>xxx</div>
   )
}

export default Guitarra