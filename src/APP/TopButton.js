import {useState,useEffect} from 'react';
import {Button} from "react-bootstrap";
import {faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopButton(){
    const [ScrollY, setScrollY] = useState(0);
    const [TopBtn, setTopBtn] = useState(false);

    const handleScroll = () =>{
        setScrollY(window.pageYOffset);
        if(ScrollY > 100){
            setTopBtn(true);
        }else {
            setTopBtn(false);
        }
    }

    const handleTopBtn = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
        setScrollY(0);
        setTopBtn(false);
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
      <div>
          <Button variant="outline-secondary" className={TopBtn ? "topBtn" : ""} onClick={handleTopBtn}>
                <FontAwesomeIcon icon={faAngleDoubleUp} />
          </Button>
      </div>
    );
}
