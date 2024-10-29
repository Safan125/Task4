    // Show/Hide Back to Top button
    window.onscroll = function () {
        const button = document.getElementById('backToTop');
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          document.body.classList.add('scrolling-active');
        } else {
          document.body.classList.remove('scrolling-active');
        }
      };

      // Scroll to top when the button is clicked
      document.getElementById('backToTop').onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };