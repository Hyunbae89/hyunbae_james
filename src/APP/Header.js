
import {faDragon} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';

export default function Header(){

    return(
      <header className="page-header shadow-sm">
          <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark">
              <Link className="navbar-brand" to="/">
                  <FontAwesomeIcon className="mx-3" icon={faDragon} />
                  James-Busan
              </Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"/>
              </button>

              <div className="collapse navbar-collapse navbar-items" id="navbarNav">
                  <ul className="navbar-nav ">
                      <li className="nav-item">
                          <Link to="/" className="nav-link p-3"> Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/about" className="nav-link p-3"> About</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/projects" className="nav-link p-3"> Projects</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/contact" className="nav-link p-3"> Contact</Link>
                      </li>
                  </ul>
              </div>

          </nav>


      </header>
    );
}