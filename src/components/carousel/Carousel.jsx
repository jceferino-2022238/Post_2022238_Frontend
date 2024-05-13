import { Carousel } from 'react-bootstrap';
import './carousel.css'
export const CarouselB = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.tooltyp.com/wp-content/uploads/2019/09/1900x920-bootstrap-4-como-funciona-la-ultima-version.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Tareas de Tecnología III</h3>
            <p>Tareas realizadas con el fin de comprender los conceptos introducidos cada semana, necesarios para la realización de proyectos</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.freecodecamp.org/news/content/images/2022/12/main-image.png'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Tareas de Práctica Supervisada</h3>
            <p>Proyectos en los cuales se recopilan los temas y conocimientos adquiridos en cada bimestre, con el fin de practicar habilidades de programación y análisis</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://res.cloudinary.com/practicaldev/image/fetch/s--Qhu3PUis--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y63ie8bmktwik5w3mhlg.png'
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Tareas de Taller III</h3>
            <p>Materia técnica principal, los proyectos en esta sección son aquellos los cuales incorporan los conceptos enseñados por el docente, conformando estos la zona de cada bimestre</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};