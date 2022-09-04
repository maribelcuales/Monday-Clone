import logo from '../images/crm-logo.png'; 
import homeButton from '../images/home-button.png';
import addButton from '../images/add-ticket-button.png'; 
import { useNavigate } from 'react-router-dom';

const Nav = () => {

	const navigate = useNavigate();

	return (
		<nav className="nav-side-bar">
			<div className="logo=container">
				<img className="crm-logo" src={logo} alt="logo" />
			</div>
			<div className="controls-container">
				<div className="icon" onClick={() => navigate('/ticket')}>
					<img className="add-icon" src={addButton} alt="add icon" />
				</div>
				<div className="icon" onClick={() => navigate('/')}>
					<img className="home-icon" src={homeButton} alt="home icon" />
				</div>
			</div>
		</nav>
	)
};

export default Nav; 
