
      document.addEventListener('click', function(e) {
      const menu = document.querySelector('.hamburger-menu');
      const toggle = document.getElementById('menu-toggle');
      if (menu && !menu.contains(e.target)) {
        toggle.checked = false;
      }
      });