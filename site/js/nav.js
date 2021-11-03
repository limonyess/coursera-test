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
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
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
                Physical challenge
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="walk.html">Walk</a></li>
                <li><a class="dropdown-item" href="yoga.html">Yoga</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mental challenge
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="memory.html">Memory</a></li>
                <li><a class="dropdown-item" href="math.html">Math</a></li>
                <li><a class="dropdown-item" href="trivia.html">Trivia</a></li>
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

     `;
  }
}

customElements.define('footer-component', Footer);
