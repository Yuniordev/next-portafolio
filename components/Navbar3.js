import Link from '../node_modules/next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div className="container">
      <Link href="/">
      <img
                      src={`/logo.png`}
                      alt="port"
                      className="logoImg"
                    />
      </Link>    
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link href="/blog">
            <a className="nav-link">
              Blog
            </a>
          </Link>  
        </li>
        <li className="nav-item">
          <Link href="/portafolio">
            <a className="nav-link">
              Portafolio
            </a>
          </Link>  
        </li>
      </ul>
    </div>
   </div>

  </nav>


);
       
       

export default Navbar;