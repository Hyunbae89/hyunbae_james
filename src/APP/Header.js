import {Navbar, Nav, Container, Offcanvas} from 'react-bootstrap';
import {faDragon} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import {Link} from 'react-scroll';

export default function Header(){
    const [ScrollY, setScrollY] = useState(0);
    const [ScrollActive, setScrollActive] = useState(false);
    const size = useWindowSize();

    const handleScroll = () =>{
        setScrollY(window.pageYOffset);
        if(ScrollY > 100){
            setScrollActive(true);
        }else {
            setScrollActive(false);
        }
    }
    useEffect(()=>{
        const watch = () => {
            window.addEventListener('scroll',handleScroll)
        }
        watch();
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return(
        <header className="page-header shadow-sm" id="navbar-main" >
            <Navbar collapseOnSelect fixed="top" className={ScrollActive ? "nav-background":""}
                    bg={ScrollActive ? "dark":""} variant='dark' expand="lg" >
                <Container fluid>
                    <Navbar.Brand as={Link} to="mainPage-chapter1" eventKey={1} spy={true} smooth={true} duration={100} offset={-400} >
                        <FontAwesomeIcon className="mx-3" icon={faDragon} />
                        James lives Busan
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-offcanvas"/>
                    {size.width > 991 ?
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="mainPage-chapter1" eventKey={1} spy={true} smooth={true} duration={100} offset={-400}>Home</Nav.Link>
                            <Nav.Link as={Link} to="mainPageAboutMeOuter" eventKey={2} spy={true} smooth={true} duration={100} offset={-80} >About</Nav.Link>
                            <Nav.Link as={Link} to="#projects" eventKey={3} spy={true} smooth={true} duration={100} offset={-50}>Projects</Nav.Link>
                            <Nav.Link as={Link} to="mainPageContact" eventKey={4} spy={true} smooth={true} duration={100} offset={50}>Contact</Nav.Link>
                        </Nav> : null}

                    <Navbar.Offcanvas aria-labelledby="navbar-offcanvas" placement="end" scroll={true} >
                        <Offcanvas.Header closeButton closeVariant={"white"}>
                            <Offcanvas.Title>
                                <FontAwesomeIcon className="mx-3" icon={faDragon} />
                                James lives Busan
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav>
                                <Nav.Link as={Link} to="mainPage-chapter1" eventKey={1} spy={true} smooth={true} duration={100} offset={-400}>Home</Nav.Link>
                                <Nav.Link as={Link} to="mainPageAboutMeOuter" eventKey={2} spy={true} smooth={true} duration={100} offset={-80} >About</Nav.Link>
                                <Nav.Link as={Link} to="#projects" eventKey={3} spy={true} smooth={true} duration={100} offset={-80}>Projects</Nav.Link>
                                <Nav.Link as={Link} to="mainPageContact" eventKey={4} spy={true} smooth={true} duration={100} offset={50}>Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}