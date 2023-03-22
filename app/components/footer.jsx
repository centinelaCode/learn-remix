import Navegacion from '~/components/navegacion'

function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor contenido">
         <Navegacion />

         <p className="copyright">© Todos los derecjos reservados { new Date().getFullYear() }</p>
      </div>
    </footer>
  )
}

export default Footer