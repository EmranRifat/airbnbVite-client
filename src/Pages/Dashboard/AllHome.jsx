import { useEffect, useState } from 'react'
import { getAllHome } from '../../Api/Services'
import Spinner from '../../Components/Spinner/Spinner'
import HomeCard from '../../Components/Card/HomeCard'

const AllHome = () => {
  const [loading, setLoading] = useState(false)
  const [homes, setHomes] = useState([]);
  
  useEffect(() => {
    setLoading(true)
    getAllHome()
      .then(data => {
        console.log(data)
        setHomes(data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {loading ? (
        <Spinner />

      ) : (
        <section className='text-gray-600 body-font'>
          <div className='container pb-8 pt-2 mx-auto'>
            <div className='flex flex-wrap'>
              {homes.map(home => (
                <HomeCard home={home} key={home._id} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default AllHome