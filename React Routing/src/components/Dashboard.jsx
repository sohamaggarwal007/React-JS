import { useNavigate, Outlet } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <div>
        Dashboard Page
        <br/>
        <button onClick={handleClick}>
          Move to Home Page
        </button>
        <Outlet/>
    </div>
  )
}

export default Dashboard