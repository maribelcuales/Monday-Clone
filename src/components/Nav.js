import logo from '../images/crm-logo.png'; 
import { useNavigate } from 'react-router-dom';

const Nav = () => {

	const navigate = useNavigate();

	return (
		<nav>
			<div className="logo=container">
				<img className="crm-logo" src={logo} alt="logo" />
			</div>
			<div className="conttrols-container">
				<div className="icon" onClick={() => navigate('/ticket')}>Add</div>
				<div className="icon" onClick={() => navigate('/')}>Home</div>
			</div>
		</nav>
	)
};

export default Nav; 
