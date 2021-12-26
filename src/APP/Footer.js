import {Container} from "react-bootstrap";

import {faDragon} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer(){
    return(
      <Container>
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <p className="col-sm-7 col-md-6 mb-0 text-muted">© 2021. Hyunbae Jeon</p>
              <a className="col-sm-5 col-md-6 d-flex align-items-end justify-content-center px-5 link-dark ">
                  <FontAwesomeIcon className="mx-3 fa-lg" icon={faDragon } />
              </a>
          </footer>
      </Container>
    );
}