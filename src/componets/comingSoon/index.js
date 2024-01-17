
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './index.scss';
import Img from '../../assets/images/icons/coming-soon-7154976_1920.png'
import "../../scss/app.scss";

const Level = () => {
  
  return (
    <div className="level-container">
      <div className="links">
        
        <Link to="/">
          <MdHome />
        </Link>
        <img  className='img-coming' to="../comingSoon" src={Img} alt="COMMIN SOON" />
      </div>
    
    </div>
  );
};

export default Level;
