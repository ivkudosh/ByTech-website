



for ( let i of document.querySelectorAll(".finsh_title") ) {

    let numberTop = i.getBoundingClientRect().top,
        start = +i.innerHTML,
        end = +i.dataset.max;
  
    window.addEventListener('scroll', function onScroll() {
      if(window.pageYOffset > numberTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        let interval = this.setInterval(function() {
          i.innerHTML = ++start;
          if(start == end) {
            clearInterval(interval);
          }
      }, 80);
      }
    });
  }

		let number = document.querySelector('.finsh_title_fast'),
		numberTop = number.getBoundingClientRect().top,
		start = +number.innerHTML, end = +number.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				let interval = setInterval(function() {
					number.innerHTML = ++start;
					if(start == end) {
						clearInterval(interval);
					}
				}, 1);
			}
		});