class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
        
        <a class="navbar-brand">
          <img src="https://limonyess.github.io/coursera-test/site/images/happy_face.png" alt="" class="logo-nav">
        </a>
        <button class="navbar-toggler menu-button" href="homepage.html" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse left" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="homepage.html" aria-current="page">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="journal.html">Journal</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="gossip.html">Gossip</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Challenges
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="physical.html">Physical</a></li>
                <li><a class="dropdown-item" href="mental.html">Mental</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User profile
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="badges.html">Badges</a></li>
                <li><a class="dropdown-item" href="progress.html">Progress</a></li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark footer">
      <div class="container">
        <div class="row">
          <ul class="navbar-nav">
            <li class="nav-item col-8">
              <a class="nav-link" href="about.html" aria-current="page">About Us</a>
            </li>
            <li class="nav-item col-8">
              <a class="nav-link" href="homepage.html" aria-current="page">Privacy Policy</a>
            </li>
            <li class="nav-item col-8">
              <a class="nav-link" href="homepage.html" aria-current="page">&copy;2021 Treelephant </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     `;
  }
}

customElements.define('footer-component', Footer);
