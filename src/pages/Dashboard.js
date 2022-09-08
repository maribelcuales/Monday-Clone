import TicketCard from '../components/TicketCard.js';

const Dashboard = () => {

  const tickets = [
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'NFT Safety 101 Video',
      owner: 'Ania Kubow',
      avatar: 'https://d1fdloi71mui9q.cloudfront.net/OGHtZ46nRBquvQmfuWhj_aFpRV9xJxRB8QVHI',
      status: 'done',
      priority: 5,
      progress: 40,
      description: 'Make a video showcasing how to work with NFTs safely, including how to know if one is not genuine.',
      timestamp: '2022-02-11T07:36:17+0000',
    },
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'Build and Sell AI Model',
      owner: 'Ania Kubow',
      avatar: 'https://d1fdloi71mui9q.cloudfront.net/OGHtZ46nRBquvQmfuWhj_aFpRV9xJxRB8QVHI',
      status: 'working on it',
      priority: 2,
      progress: 70,
      description: 'Make a video about AI.',
      timestamp: '2022-02-13T07:36:17+0000',
    },
    {
      category: 'Q2 2022',
      color: 'blue',
      title: 'Build a bot',
      owner: 'Ania Kubow',
      avatar: 'https://d1fdloi71mui9q.cloudfront.net/OGHtZ46nRBquvQmfuWhj_aFpRV9xJxRB8QVHI',
      status: 'working on it',
      priority: 3,
      progress: 10,
      description: 'Make a video about making a bot.',
      timestamp: '2022-02-15T07:36:17+0000',
    }
  ]

  // Create function to extract unique categories in the array 
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category))
  ]

  console.log(uniqueCategories); 



  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        <TicketCard /> 

      </div>
      
    </div>
  )

};

export default Dashboard; 