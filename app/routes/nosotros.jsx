import imagenNosotros from '../../public/img/nosotros.jpg'

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagenNosotros} alt="imagen sobre nosotros" />

        <div>
          <p>Phasellus blandit luctus rhoncus. Ut ac lectus dignissim nisi mattis sagittis vitae in massa. Aenean elit nibh, scelerisque vel porta vel, cursus vitae est. Pellentesque euismod leo ut justo varius, in vulputate dui mollis. Vestibulum mattis turpis sit amet nisi dignissim, et rhoncus massa porttitor. Curabitur varius ipsum vitae mi rhoncus, at luctus orci scelerisque. Phasellus a nunc sagittis velit luctus malesuada.</p>
          
          <p>Phasellus blandit luctus rhoncus. Ut ac lectus dignissim nisi mattis sagittis vitae in massa. Aenean elit nibh, scelerisque vel porta vel, cursus vitae est. Pellentesque euismod leo ut justo varius, in vulputate dui mollis. Vestibulum mattis turpis sit amet nisi dignissim, et rhoncus massa porttitor. Curabitur varius ipsum vitae mi rhoncus, at luctus orci scelerisque. Phasellus a nunc sagittis velit luctus malesuada.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros