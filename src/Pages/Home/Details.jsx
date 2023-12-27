import { useLoaderData } from 'react-router-dom'
import HomeDetails from '../../Components/Details/HomeDetails';
import DetailsCart from '../../Components/Details/DetailsCard';

const Details = () => {
  // const homeData = useLoaderData()
  const homeData = {
    _id: '60ehjhedhjdj3434',
    location: 'Dhaka, Bangladesh',
    title: 'Huge Apartment with 4 bedrooms',
    image: 'https://i.ibb.co/YPXktqs/Home1.jpg',
    from: '17/11/2022',
    to: '21/11/2022',
    host: {
      name: 'John Doe',
      image: 'https://i.ibb.co/6JM5VJF/photo-1633332755192-727a05c4013d.jpg',
      email: 'johndoe@gmail.com',
    },
    price: 98,
    total_guest: 4,
    bedrooms: 2,
    bathrooms: 2,
    ratings: 4.8,
    reviews: 64,
  }



  
  return (
    <div>
      {/* Header */}
      <div className='flex flex-wrap h-[400px]'>
        <div className='w-1/2 h-full overflow-hidden'>
          <img
            alt='feature'
            className='object-cover object-start h-full w-full'
            src={homeData.image}
          />
        </div>
        <div className='w-1/2 h-full overflow-hidden'>
          <img
            alt='feature'
            className='object-cover object-start h-full w-full'
            src='https://i.ibb.co/DCzG2cp/christine-roy-ir5-MHI6r-Pg0-unsplash-1.jpg'
          />
        </div>
      </div>

      {/* Main Content */}
      <div className='md:flex justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-12'>
        {/* Details */}
        <HomeDetails homeData={homeData} />
        {/* Cart */}
        <DetailsCart homeData={homeData} />
      </div>
    </div>
  )
}

export default Details;