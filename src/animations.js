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
          delay: delay,
        },
      },
    };
  };

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
      // x:'50px',
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
        x:20,
        opacity: 1,
      },
      show: {
        // x: 20,
        opacity: 1,
        transition: {
          type: "spring",
          duration: .5,
          delay: 1,
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
        }
    }
}