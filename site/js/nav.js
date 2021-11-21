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
            <img src="https://limonyess.github.io/coursera-test/site/images/LOGOLONG-03.png" alt="" class="logo-nav">
          </a>
          <button class="navbar-toggler menu-button" href="homepage.html" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse left" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="homepage.html" aria-current="page">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="journal.html">Journal</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="challenges.html">Challenges</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="gossip.html">Ranking</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="user.html">Profile</a>
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
