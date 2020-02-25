console.log('OK');


gsap.timeline()
    .from('#bbLeaves', 
          {  opacity: 0,
            scale: 0,
            transformOrigin:"bottom",
            duration: .7, }
         )
         
    .from('#bb',
         { opacity: 0,
            scale: 0,
            transformOrigin:"bottom",
            duration: 1,
            delay: .007,
         }
         );


gsap.timeline()
    .from('#bunchesLeaves', 
    {   opacity: 0,
        scale: 0,
        transformOrigin:"bottom",
        duration: 1,
        delay: .001,
     } )
     .from('#bunches', 
     { opacity: 0,
        scale: 0,
        transformOrigin:"bottom",
        duration: 1,
        delay: 0,
     }

    );








 
    