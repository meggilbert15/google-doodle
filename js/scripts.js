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
         }
         )
    .from('#bunchesLeaves', { 
        opacity: 0,
        scale: 0,
        transformOrigin:"bottom",
        duration: 1,
     } )
     .from('#bunches', 
     { opacity: 0,
        scale: 0,
        transformOrigin:"bottom",
        duration: 1,
     }

    );
//     .from(".google", {
//   opacity: 0,
//   duration: 2,
//   stagger: {
//   each: .2,
//   from: 'edges',
//   }
// });


