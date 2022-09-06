import { Link } from 'react-router-dom';
import AvatarDisplay from './AvatarDisplay.js';
import StatusDisplay from './StatusDisplay.js';
import PriorityDisplay from './PriorityDisplay.js';
import ProgessDisplay from './ProgressDisplay.js';
import DeleteBlock from './DeleteBlock.js';


const TicketCard = () => {
  return (
    <div className="ticket-card">
      <Link>
        <div className='ticket-color'></div>
        <h3>{title}</h3>
        <AvatarDisplay />
        <StatusDisplay />
        <PriorityDisplay />
        <ProgessDisplay />
      </Link>
      <DeleteBlock />
    </div>
  )

};

export default TicketCard; 
