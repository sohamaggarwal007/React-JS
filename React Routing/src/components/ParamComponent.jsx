import { useParams } from 'react-router-dom'

const ParamComponent = () => {
    const {id} = useParams();
    
  return (
    <div>
        Params: {id}
    </div>
  )
}

export default ParamComponent