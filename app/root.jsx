//?   Importación de componente de REMIX
import {
   Meta,
   Links,
   Outlet,
   Scripts,
   LiveReload,
   useCatch,
   Link,
} from '@remix-run/react'


//?   Importacion de archivos propios
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'


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
         <Outlet 
            context={{
               
               
            }}
         />
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
            <Footer />

            <Scripts />
            <LiveReload />
         </body>
      </html>
   )
}

/** Manejo de errores */
export function CatchBoundary() {
   const error = useCatch();

   return (
      <Document>
         <p className="error">{error.status} - {error.statusText}</p>
         <Link className='error-enlace'  to="/">Ir a la página principal</Link>
      </Document>
   );
}

export function ErrorBoundary({error}) {
   return (
      <Document>
         <p className="error">{error.status} - {error.statusText}</p>
         <Link className='error-enlace' to="/">Ir a la página principal</Link>
      </Document>
   )
}
