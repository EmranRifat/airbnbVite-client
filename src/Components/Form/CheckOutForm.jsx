/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { getPaymentIntent, saveBooking } from '../../Api/Bookings'

const CheckoutForm = ({ bookingData }) => {
  const navigate = useNavigate()
  const stripe = useStripe()
  const elements = useElements()
  const [cardError, setCardError] = useState('')
  const [processing, setProcessing] = useState(false)
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState('')

  const { price, title, hostEmail } = bookingData;
  console.log(bookingData)
 
  useEffect(() => {
    getPaymentIntent(price).then(data => {
        console.log(data)
      if (data?.clientSecret) {
        setClientSecret(data.clientSecret)
      }
    })
  }, [price])

  const handleSubmit = async event => {
    event.preventDefault()
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)

    if (card === null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    setCardError(error?.message || '')
    setProcessing(true)
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: title,
            email: hostEmail,
          },
        },
      })

    if (intentError) {
      setCardError(intentError?.message)
      setProcessing(false)
    } else {
      setCardError('')
      setTransactionId(paymentIntent.id)
      console.log(paymentIntent)

      //store payment on database
      const data = {
        transactionId: paymentIntent.id,
        ...bookingData,
      }
    

      saveBooking(data)
      .then(data=>{
        console.log(data)
        setProcessing(false);
        toast.success("Your Booking Successfull...!");
         navigate('/dashboard/my-bookings')
      })
     .catch(err=>console.log(err))





    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='my-10 max-w-lg'>
        <CardElement
          className='border p-4 rounded-md shadow-md'
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className=' mt-4 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-md text-white px-4 py-1'
          type='submit'
        //   disabled={!stripe || !clientSecret || processing}
        >
          Pay 
        </button>
      </form>
      {cardError && <p className='text-red-500'>{cardError}</p>}
    </>
  )
}

export default CheckoutForm