import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
      <div>
    <div>Description</div>

      <motion.img 
      width={'25%'}
      src='/img/001.jpg'
      alt=''

      // width={'25%'}
      // src='/img/002.jpg'
      // alt=''

        //анимация
        animate={{rotate:360}}
        transition={{
          delay:1,
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.1,
          
        }}
        />

        <motion.p
        initial={{
          x:-1000,
          repeat: Infinity,
          opacity:0.1
        }}

        animate={{
            x: 500,
            opacity: 1,
            repeat: Infinity,
          repeatDelay: 0.1,
          
        }}
        transition={{
          duration: 1,
          delay:1,
          
          type:'tween'
        }}

        
        >
            Текст который появится 
        </motion.p></div>
        
        <motion.div id='div1'
          
        initial={{
          repeat: Infinity,
          x:-1000,
          opacity: 0
        }}

        animate={{
          x:0,
          opacity: 1,
          x:1000
        }}
        
        transition={{
          repeat: Infinity,
          delay:3,
          duration:3
        }}
        >
          Complete documentation of the Framer Motion animation library. 
          A production-ready motion library for React.</motion.div>

          <motion.div id='div2'
          initial={{
            opacity:0
          }}
          animate={{
            y:-500,
            opacity:1
          }}
          transition={{
            delay:1,
            duration:2
          }}>
            <motion.img
            src='img/002.jpg'
            className='banner'
            width={850}

            initial={{
              opacity:0.9
            }}

            transition={{
              duration:5
            }}

            whileTap={{rotate:360}}/>

          </motion.div>
          <div id='divImg'>
          <motion.div id='div3'
          initial={{
            opacity:0,
            scale:0.5
          }}
          animate={{
            scale:1,
            opacity:1,            
              y:-1000,
              x:-100,
              
              
            
          }}
          transition={{
            duration:2
          }}>
            <motion.img
            src='img/logo1.png'
            className='ball'
            width={500}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration:5
            }}

            whileHover={{
              scale:1.5,
              transition:{
                duration:2
              }
            }}/>

          </motion.div>


          <motion.div id='div4'

        
          initial={{
            x:-500,
            y:-700,
            opacity:0,
            scale:1.9
          }}
          animate={{
            scale:1,
            opacity:1
          }}
          transition={{
            duration:2
          }}>
            <motion.img drag='x'
            src='img/003.jpg'
            className='ball'
            width={500}

            initial={{
              opacity:0.9
            }}

            

            transition={{
              duration:5
            }}

            whileDrag={{
              scale:1.5,
             
            }}/>

          </motion.div>

            <motion.button className='btn btn-primary'
            initial={{
              x:-500,
              y:-700,
              
            }}
            whileHover={{
              scale:3.2
            }}>
            Нажми</motion.button>
            </div>

    </div>
  )
}

export default Description