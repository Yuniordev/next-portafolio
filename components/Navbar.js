import Link from '../node_modules/next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow" >
    <div className="container-fluid mx-4">
      <Link href="/">
        <img src={`/logo.png`} alt="port" className="logoImg" />
      </Link>
      <button 
        
        className="navbar-toggler "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"   />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item ">
            <Link href="/blog">
              <a className="nav-link">Blog</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/portafolio">
              <a className="nav-link">
                Portafolio
              </a>
          </Link> 
          </li>

          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
        
        <form class="d-flex">
        <input class="buscador form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
        <button class="boton-buscar btn btn-outline-primary" type="submit">Search</button>
        </form>

      </div>
    </div>
  </nav>
);
       
       

export default Navbar;