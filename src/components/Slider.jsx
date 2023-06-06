import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Slider = () => {
  return (
    <div>
    <Carousel >
    <Carousel.Item interval={1000}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/first.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Самый большой выбор комплексов для игр и спорта</h3>
        <p>Особого внимания заслуживает высокое качество предлагаемой продукции. Данная игровая площадка изготовлена из красного дерева и кедра, которые были обработаны специальными средствами от насекомых и гниения древесины.</p>
         
          <Link exact to={'/form'}>
          <Button variant="primary">
            Обратная связь 
          </Button>
          </Link>



      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/second.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Самый большой выбор комплексов для игр и спорта</h3>
        <p>Особого внимания заслуживает высокое качество предлагаемой продукции. Данная игровая площадка изготовлена из красного дерева и кедра, которые были обработаны специальными средствами от насекомых и гниения древесины.</p>
         
          <Link exact to={'/form'}>
          <Button variant="primary">
            Обратная связь 
          </Button>
          </Link>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  width={'100%'}height={800}
        className="d-block w-100"
        src="./img/three.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Самый большой выбор комплексов для игр и спорта</h3>
        <p>Особого внимания заслуживает высокое качество предлагаемой продукции. Данная игровая площадка изготовлена из красного дерева и кедра, которые были обработаны специальными средствами от насекомых и гниения древесины.</p>
         
          <Link exact to={'/form'}>
          <Button variant="primary">
            Обратная связь 
          </Button>
          </Link>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/four.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Самый большой выбор комплексов для игр и спорта</h3>
        <p>Особого внимания заслуживает высокое качество предлагаемой продукции. Данная игровая площадка изготовлена из красного дерева и кедра, которые были обработаны специальными средствами от насекомых и гниения древесины.</p>
         
          <Link exact to={'/form'}>
          <Button variant="primary">
            Обратная связь 
          </Button>
          </Link>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider