document.addEventListener('DOMContentLoaded', () => {
  let waypoint_down = new Waypoint({
    element: document.getElementById('ellipse'),
    handler: function(direction) {
      if (direction === 'down') {
        anime({
          targets: '#ellipse',
          borderRadius: ['50vw', '0vw'],
          width: ['30vw', '100vw'],
          height: ['30vw', '50vw'],
          translateY: 330,
          easing: 'easeInOutCubic',
          duration: 700,
        }),
        anime ({
          targets: '.description',
          opacity: 1,
          easing: 'easeInExpo',
          duration: 1200,
        }),
        console.log('Scrolled to waypoint!')
      }
    },
    offset: '80%',
  })

  let waypoint_up = new Waypoint({
    element: document.getElementById('ellipse'),
    handler: function(direction) {
      if (direction === 'up') {
        anime({
          targets: '#ellipse',
          borderRadius: ['0vw','50vw'],
          width: ['100vw', '30vw'],
          height: ['50vw', '30vw'],
          translateY: 0,
          easing: 'easeOutBack',
          duration: 700,
        }),
        anime ({
          targets: '.description',
          opacity: 0,
          easing: 'easeOutExpo',
          duration: 300,
        }),
        console.log('Scrolled up to waypoint!')
       }
    },
    offset: '10%',
  })

  let waypoint_middle_down = new Waypoint({
    element: document.getElementById('section_1'),
    handler: function(direction) {
      if (direction === 'down') {
        AOS.init({
          duration: 1000,
          easing: 'easeInOutCubic',
        });
        anime({
          targets: '#word',
          opacity: 1,
          duration: 1200,
        });
        anime({
          targets: '#silence',
          opacity: 1,
          duration: 500,
          easing: 'easeInOutCubic',
        });
        console.log('Scrolled down to waypointPUK-!')
      }
    },
    offset:'20%',
  })

  let waypoint_middle_up = new Waypoint({
    element: document.getElementById('section_1'),
    handler: function(direction) {
      if (direction === 'up') {
        anime({
          targets: '#word',
          opacity: 0,
          easing: 'easeOutExpo',
          duration: 700,
        });
        anime({
          targets: '#silence',
          opacity: 0,
          easing: 'easeOutExpo',
          duration: 700,
        })
        console.log('Scrolled down to waypointPUKI!')
      }
    },
    offset:'bottom-in-view',
  })

  let waypoint_medium_middle_down = new Waypoint({
    element: document.getElementById('word'),
    handler: function(direction) {
      if (direction === 'down') {
        anime({
          targets: '#silence',
          translateY: {
            value: 700,
            duration: 300,
          },
          translateX: {
            value: -1000,
            duration: 400,
          },
          borderRadius: {
            value: ['50vw', '0vw'],
            easing: 'easeInOutCubic',
            duration: 2000,
          },
          width: ['20vw', '110vw'],
          height: ['20vw', '50vw'],
          easing: 'easeInOutCubic',
        });
        anime ({
          targets: '#text_1',
          opacity: 1,
          easing: 'easeInExpo',
          duration: 1200,
        }),
        console.log('Scrolled down to waypointPUKI!')
      }
    },
    offset:'5%',
  })

  let waypoint_medium_middle_up = new Waypoint({
    element: document.getElementById('section_2'),
    handler: function(direction) {
      if (direction === 'up') {
        anime({
          targets: '#silence',
          borderRadius: ['0vw','50vw'],
          width: ['110vw', '20vw'],
          height: ['50vw', '20vw'],
          translateY: 0,
          translateX: 0,
          easing: 'easeOutBack',
          duration: 1500,
        }),
        anime ({
          targets: '#text_1',
          opacity: 0,
          easing: 'easeOutExpo',
          duration: 300,
        }),
        console.log('Scrolled down to waypointPUKI!')
      }
    },
    offset:'bottom-in-view',
  })

  let waypoint_last_middle_down = new Waypoint({
    element: document.getElementById('section_2'),
    handler: function(direction) {
      if (direction === 'down') {
        anime({
          targets: '#textarea_ul_1',
          translateX: {
            value: -285,
            duration: 2000,
            easing: 'easeOutExpo',
          },
        });
        anime({
          targets: '#textarea_ul_2',
          translateX: {
            value: 300,
            duration: 2000,
            easing: 'easeOutExpo',
          },
        });
        console.log('Scrolled down to waypointPUKI!')
      }
    },
    offset:'bottom-in-view',
  })

  let waypoint_last_middle_up = new Waypoint({
    element: document.getElementById('text_2'),
    handler: function(direction) {
      if (direction === 'up') {
        anime({
          targets: '#textarea_ul_1',
          translateX: {
            value: 0,
            duration: 1000,
            easing: 'easeOutExpo',
          },
        });
        anime({
          targets: '#textarea_ul_2',
          translateX: {
            value: 0,
            duration: 1000,
            easing: 'easeOutExpo',
          },
        });
        console.log('Scrolled down to waypointPUKI!')
      }
    },
    offset:'10%',
  })

  let waypoint_last_down = new Waypoint ({
    element: document.getElementById('section_silence'),
    handler: function(direction) {
      if (direction === 'down') {
        anime({
          targets: '#silence_2',
          translateX: {
            value: -700,
            duration: 1500,
            easing: 'easeOutExpo',
          },
          translateY: {
            value: 700,
            duration: 1500,
            easing: 'easeOutExpo',
          },
          width: ['10vw', '150vw'],
          height: ['10vw', '40vw'],
          borderRadius: ['50vw','0vw'],
          opacity: {
            value: 1,
            duration: 300,
            easing: 'easeOutExpo',
          },
          easing: 'easeInOutCubic',
        });
        anime({
          targets: '#text_2',
          opacity: 1,
          duration: 1500,
          easing: 'easeInExpo',
        })
        console.log('Scrolled down to waypointPUKI!')
      }
    },
    offset:'10%',
  })

  let waypoint_last_up = new Waypoint ({
    element: document.getElementById('section_3'),
    handler: function(direction) {
      if (direction === 'up') {
        anime({
          targets: '#silence_2',
          translateX: {
            value: 0,
            duration: 1000,
            easing: 'easeOutExpo',
          },
          translateY: {
            value: 0,
            duration: 1000,
            easing: 'easeOutExpo',
          },
          width: ['150vw', '10vw'],
          height: ['40vw', '10vw'],
          borderRadius: ['0vw','50vw'],
          opacity: {
            value: 0,
            duration: 1300,
            easing: 'easeOutExpo',
          },
          easing: 'easeInOutCubic',
        });
        anime({
          targets: '#text_2',
          opacity: 0,
          duration: 500,
          easing: 'easeInExpo',
        })
        console.log('Scrolled down to waypointPUKI1234567!')
      }
    },
    offset:'80%',
  })

  let waypoint_footer_down = new Waypoint ({
    element: document.getElementById('ships'),
    handler: function(direction) {
      if (direction === 'down') {
        anime({
          targets: '#text_last',
          translateX: {
            value: 200,
            duration: 1000,
            easing: 'easeOutExpo',
          },
        });
        console.log('Scrolled down to waypointPUKI1234567!')
      }
    },
    offset:'10%',
  })

  let waypoint_footer_up = new Waypoint ({
    element: document.getElementById('appstore'),
    handler: function(direction) {
      if (direction === 'up') {
        anime({
          targets: '#text_last',
          translateX: {
            value: 0,
            duration: 1000,
            easing: 'easeOutExpo',
          },
        });
        console.log('Scrolled down to waypointPUKI12345jgjf67!')
      }
    },
    offset:'90%',
  })
})
