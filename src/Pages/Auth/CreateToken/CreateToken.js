import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { commerce } from '../../../commerce'
import Loading from '../../../components/Loading/Spinner/Spinner'


const CreateToken = () => {
  const navigate = useNavigate()
  const { token } = useParams();
  console.log(token);
  console.log('salam');
  useEffect(() => {
    commerce.customer.getToken(`${token}`, 'save=true')
      .then(() => navigate('/', { replace: true }));
  }, [token, navigate])
  return (
    <div>
      <Loading />
    </div>
  )
}

export default CreateToken