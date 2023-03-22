//?   Importación de componente de REMIX
import {
   Meta,
   Links,
   Outlet,
   Scripts,
   LiveReload,
} from '@remix-run/react'


//?   Importacion de archivos propios
import styles from '~/styles/index.css'
import Header from '~/components/header'


//?   Carga de Etiquetas META 
export function meta() {
   return(
      {
         charset: 'utf-8',
         title: 'GuitarLA - Remix',
         viewport: 'width=device-width,initial-scale=1'
      }   
   )
}


//?   Carga de Etiquetas LINK (stylesheet, preconect)
export function links() {
   return [
      {
         rel: 'stylesheet',
         href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
      },
      {
         rel: 'preconnect',
         href: 'https://fonts.googleapis.com',
      },
      {
         rel: 'preconnect',
         href: 'https://fonts.gstatic.com',
         crossOrigin: 'true',
      },
      {
         rel: 'stylesheet',
         href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
      },
      {
         rel: 'stylesheet',
         href: styles,
      },
   ]
}


//?   Funcion que carga el contenido
export default function App() {
   return(
      <Document>
         <Outlet />
      </Document>
   )
}


//?   Funcion con la estructura HTML
function Document({children}) {
   return(
      <html lang='es'>
         <head>
            <Meta />
            <Links />
         </head>

         <body>
            <Header />
            { children }

            <Scripts />
            <LiveReload />
         </body>
      </html>
   )
}