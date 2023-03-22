import { Link } from '@remix-run/react'

function Header() {
  return (
   <header className="header">
   <div className="contenedor barra">
      <div className="logo">

      </div>
      <div className="nav">
         <Link
            to="/"
         >Inicio</Link>

         <Link
            to="/nosotros"
         >Nosotros</Link>

         <Link
            to="/tienda"
         >Tienda</Link>

         <Link
            to="/blog"
         >Blog</Link>
      </div>
   </div>

 </header>
  )
}

export default Header