import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
        <div className='col mb-3'>
          <a className=''>
            <img src='/img/222.jpg' className='bi-me-2' width={1400} height={300}>

            </img>
            {/* <img src="/img/logo1.png">

            </img> */}

          </a>
          <p>
          Гарантия:На все приобретенные у нас товары распространяется заводская гарантия. На комплексы собранные нашим персоналом может даваться дополнительная гарантия.
          </p>
          </div>
            <div className='col-mb-3'>

            </div>

          <div className='col-mb-4'>
            <h5>
              Колонка1
            </h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>
                  Надпись
                  </a>
                  
                </li>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>
                    Надпись
                  </a>
                </li>
              </ul>
            
          </div>

          <div className='col-mb-4'>
            <h5>
              Колонка2
            </h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>
                  Надпись
                  </a>
                  
                </li>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>
                    Надпись
                  </a>
                </li>
              </ul>
            
          </div>

        
      </footer>
        
    </div>
  )
}

export default Footer