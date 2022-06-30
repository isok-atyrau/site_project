document.addEventListener('DOMContentLoaded', function() {
    //Side Nav
    var sideNav = document.querySelectorAll('.sidenav');
    var instancesNav = M.Sidenav.init(sideNav);

    //Modal
    var modal = document.querySelectorAll('.modal');
    var instancesModal = M.Modal.init(modal);

    // Gallery
    var Gallery = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(Gallery );
  });

  