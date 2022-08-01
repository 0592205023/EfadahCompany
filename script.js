 var splide = new Splide('.splide', {
   direction: 'ttb',
   height: '10rem',
   wheel: true,
   arrows: false,
   height: '300px',
   width: '500px',
   autoplay: true,
   classes: {
     pagination: 'splide__pagination your-class-pagination',
     page: 'splide__pagination__page your-class-page',
   },
 });
 splide.on('pagination:mounted', function (data) {
   data.list.classList.add('splide__pagination--custom');
 });
 
 splide.mount();
 var splide2 = new Splide('.splide2', {
   type: 'loop',
   perPage: 3,
   perMove: 1,
   pagination: false,
   arrows: false,
   height: '400px',
   breakpoints: {
     480: {
       perPage: 1,
     },
     768: {
       perPage: 2,
     },
   },
 });
 
 splide2.mount();
 
 var splide3 = new Splide('.splide3', {
   type: 'loop',
   perPage: 3,
   perMove: 1,
   pagination: false,
   arrows: false,
   height: '400px',
   breakpoints: {
     480: {
       perPage: 1,
     },
     768: {
       perPage: 2,
     },
   },
 });
 splide3.mount();
 var splide4 = new Splide('.splide4', {
   type: 'loop',
   perPage: 3,
   perMove: 1,
   pagination: false,
   arrows: false,
   height: '400px',
   breakpoints: {
     480: {
       perPage: 1,
     },
     768: {
       perPage: 2,
     },
   },
 });
 splide4.mount();