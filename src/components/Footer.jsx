import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top '>
        <div className='col mb-3 '>
          <a className=''>
            <img src='/img/222.jpg' className='bi-me-2' width={1200} height={600}>

            </img>
            {/* <img src="/img/logo1.png">

            </img> */}

          </a>
          <p>
          <h5>Гарантия:</h5>На все приобретенные у нас товары распространяется заводская гарантия. На комплексы собранные нашим персоналом может даваться дополнительная гарантия.
          </p>
          </div>
            <div className='col-mb-3'>

            </div>

          <div className='col-mb-4'>
            <h5>
             Сезонное хранение
            </h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-1 '>
                  Уважаемые посетители нашего магазина, для вас доступна услуга сезонного хранения
оборудования на нашем складе.Данная опция доступна как для клиентов нашего магазина, так и для тех, кто приобретал товар не
у нас.Часто бывает нужно складировать сезонное оборудование - это и есть цикл оборудования, которое по различным причинам, временно не используется.

                  </a>
                  
                </li>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 '>
                  Не ломайте голову куда его деть! Так же мы можем предложить вам демонтаж и транспортировку оборудования на наш склад для
хранения, что исключает ошибки и потерю частей оборудования.
                  </a>
                </li>
              </ul>
            
          </div>

          <div className='col-mb-4'>
            <h5>
              Доставка
            </h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 x'>
                  Не ломайте голову куда его деть! Так же мы можем предложить вам демонтаж и транспортировку оборудования на наш склад для
хранения, что исключает ошибки и потерю частей оборудования.
                  </a>
                  
                </li>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 x'>
                   
                  </a>
                </li>
                
              </ul>
            
          </div>

        
      </footer>
        
    </div>
  )
}

export default Footer