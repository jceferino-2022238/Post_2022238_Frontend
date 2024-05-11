import { Carousel } from 'react-bootstrap';

export const CarouselB = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
            className='d-block w-100'
            src='src/assets/tecnologia.png'
        />
        <Carousel.Caption>
          <h3>Tareas de Tecnología III</h3>
          <p>Tareas realizadas con el fin de comprender los conceptos introducidos cada semana, necesarios para la realización de proyectos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className='d-block w-100'
            src='src/assets/practicaS.png'
        />
      <Carousel.Caption>
          <h3>Tareas de Práctica Supervisada</h3>
          <p>Proyectos en los cuales se recopilan los temas y conocimientos adquiridos en cada bimestre, con el fin de practicar habilidades de programación y análisis</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className='d-block w-100'
            src='src/assets/taller.png'
        />
      <Carousel.Caption>
          <h3>Tareas de Taller III</h3>
          <p>Materia técnica principal, los proyectos en esta sección son aquellos los cuales incorporan los conceptos enseñados por el docente, conformando estos la zona de cada bimestre</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
