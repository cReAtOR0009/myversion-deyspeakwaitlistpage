// LOADER ANIMATION

export const loadercontainer = () => {
  return {
    hidden:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        type:"spring",
        when:"beforeChildren",
        delayChildren:0.1,
        staggerChildren:.3
      }
    },
    exit:{
      opacity:0,
      y:-200,
      scale:15,
      transition:{
        duration:1
        // delay:.2
      }
    }
  }
}


export const loadercontent = () => {
  return {
    hidden:{
      opacity:0,
      y:250,
      x:200,
      scale:0
    },
    show:{
      opacity:1,
      y:0,
      x:0,
      scale:[1, 1.5, 6, 1],
      transition:{
          type:"spring",
          duration:.5,
          ease:[0.6, 0.01, -0.05, 0.95]
      }
    }
  }
}


export const mainContainer = ()=>{
  return {
    hidden:{
      opacity:0
    },
    show:{
      opacity:1,
      transition:{
          staggerChildren:1
      }

    }
  }
}
export const textVariant = (delay) => {
    return {
      hidden: {
        y:20,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "linear",
          duration: .5,
          delay:delay
        },
      },
      exit:{
        y:200,
        transition: {
          type: "linear",
          duration: .5,
          delay:delay
      }
    }
  }
  };
  export const imageContainer = {
    show:{
      transition:{
        staggerChildren:0.35
      },
    },
  }

  // FOOTER STYLING

  export const screenImage = (fromX, fromY)=> {
   return {
    hidden:{
      scale:0,
      y:fromY,
      x:fromX
    },
    show:{
      scale:[ 1],
      x:0,
      y:0,
      transition:{
        // ease:[0.6, 0.01,-0.05,0.95],
        duration:1.2
      }
    },
    exit:{
      opacity:0,
      scale:10,
      transition:{
        ease:"easeInOut",
        duration:.5
      }
    }
   } 
  }


// SOCIAL MEDIA VS TERMS AND CONDITION 

  export  const socialIconContainer = () => {
        return {
          hidden:{
            opacity:0
          },
          show:{
            opacity:1,
            transition:{
              when:"beforeChildren",
              staggerChildren:.3
            }
          },
        }
  }

  export const socialContainerContent = () => {
    return {
      hidden : {
        y:-30,
        opacity:0,
        scale:0
      },
      show:{
        y:0,
        opacity:1,
        scale:1,
        transition:{
          ease:"easeInOut",
          duration:.7
        }
      },
    }
  }


  export const termsAnimate = () => {
    return {
      hidden:{
        opacity:0,
        scale:0,
        y:0
      },
      show:{
        opacity:1,
        scale:1,
        y:0,
        transition:{
          ease:"easeInOut",
          duration:1.5
        }
      },
     
    }
  }





 export const containerVariant ={
  
    hidden:{
      opacity:0,
      x:'100vw',
  
  },
  show: {
    x:'0',
    opacity:1,
    transition:{
    type:'spring',
    delay:.5
    },
    exit:{
      x:'-100vw',
      transition:{ease:'easeInOut'}
    }
  }}

export const buttonVariants= {
    initial:{

    },
    hover:{
      scale:1.1, 
      textShadow:'0px 0px 8px rgb(255, 255, 255)',
     boxShadow:'0px 0px 8px rgb(8, 34, 102)',
     transition:{
      duration:.3,
      yoyo:Infinity
     }
    }
  }

  export const animateImage = () => {
    return {
      hidden: {
        x:200,
        opacity: 1,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring", 
          ease: "linear",
          duration: .5,
          delay: .5,
        },
      },
    };
  };


  const backdrop ={
    hidden:{
        opacity:0
    },
    show:{
        opacity:1
    }
}
const modal = {
    hidden:{
        y:"-100vh",
        opacity:0
    },
    show:{
        y:"200px",
        opacity:1,
        transition:{
            delay:.5
        },
    },
}