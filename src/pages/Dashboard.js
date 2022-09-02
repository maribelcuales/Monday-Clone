import TicketCard from '../components/TicketCard.js';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>My Project</h1>
      <div className="ticket-container">
        <TicketCard /> 

      </div>
      
    </div>
  )

};

export default Dashboard; 