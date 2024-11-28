import { useCardDetailsStore } from './store'
import { Button } from "./components/ui/button"
import { useState, useRef } from 'react'

function Card_form() {
  const { setCardNumber, setCardHolder, setExpiryMonth, setExpiryYear, setCvc } = useCardDetailsStore();
  const [ isAllValid, setIsAllValid ] = useState(false);
  const holder = useRef(null);
  const number = useRef(null);
  const month = useRef(null);
  const year = useRef(null);
  const cvc = useRef(null);

  const rmNonNumeric = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  };

  const handleReset = () => {
    setIsAllValid(false);
    setCardHolder('');
    setCardNumber('');
    setCvc('');
    setExpiryMonth('');
    setExpiryYear('');

    holder.current.value = '';
    number.current.value = '';
    month.current.value = '';
    year.current.value = '';
    cvc.current.value = '';
  }


  return (
    <>
      <div className='w-full max-w-[327px] my-3 mx-auto text-very-dark-violet'>
        { !isAllValid ?
        <form action="#" onSubmit={(e) => { e.preventDefault(); setIsAllValid(true)}} className='font-medium'>
          <label htmlFor='card-holder' className='text-xs'>CARDHOLDER NAME</label>
          <input type="text" ref={holder} name="card-holder" id='card-holder' required placeholder='e.g. Jane Appleseed' pattern="^[A-Za-z]{2,} [A-Za-z]{2,}$"  title='First and last name must be separated by a single space, with each containing at least 2 letters' onInput={(e) => setCardHolder(e.target.value)} className='w-full border-[1px] rounded-md p-2 mb-3 mt-2 outline-none hover:border-light-grayish-violet focus:border-dark-grayish-violet' />
          
          <label htmlFor='card-number' className='text-xs'>CARD NUMBER</label>
          <input type="text" name="card-number" inputMode="numeric" ref={number} id='card-number' placeholder='e.g. 1234 5678 9123 0000' pattern="^\d{16}$" title="Must contain at least 16-digits" required maxLength={16} onInput={(e) => {setCardNumber(e.target.value); rmNonNumeric(e)}} className='w-full border-[1px] rounded-md p-2 appearance-textfield mb-6 mt-2 outline-none hover:border-light-grayish-violet focus:border-dark-grayish-violet' />
          
          <div className='flex justify-between gap-3 mb-4 w-full'>
            <div className='w-1/2'>
              <label className='text-xs flex gap-2 mb-1'>EXP. DATE (MM/YY)</label>
              <div className='flex gap-2'>
                <input type="text" name="exp-month" inputMode="numeric" pattern="^(0[1-9]|1[0-2])$" title="Must contain at least 2-digits ranging from 01 to 12"  ref={month} required maxLength={2} placeholder='MM' onInput={(e) => {setExpiryMonth(e.target.value); rmNonNumeric(e)}} className='w-1/2 border-[1px] rounded-md p-2 mb-3 mt-2 outline-none hover:border-light-grayish-violet focus:border-dark-grayish-violet' />
                <input type="text" name='exp-year' inputMode="numeric" pattern="^\d{2}$" title="Must contain at least 2-digits" required maxLength={2} ref={year} placeholder='YY' onInput={(e) => {setExpiryYear(e.target.value); rmNonNumeric(e)}} className='w-1/2 border-[1px] rounded-md p-2 mb-3 mt-2 outline-none hover:border-light-grayish-violet focus:border-dark-grayish-violet' />
              </div>
            </div>
            
            <div className='w-1/2'>
              <label className='text-xs'>CVC</label> <br />
              <input type="text" ref={cvc} placeholder='e.g. 123' inputMode="numeric" pattern="^\d{3}$" title="Must contain at least 3-digits" required maxLength={3} name="cvc" onInput={(e) => {setCvc(e.target.value); rmNonNumeric(e)}} className='w-full border-[1px] rounded-md p-2 appearance-none outline-none hover:border-light-grayish-violet focus:border-dark-grayish-violet' />
            </div>
          </div>
          <Button size='full'>Confirm</Button>
        </form>
        :
        <div className='text-center w-full flex flex-col gap-5 justify-center items-center'>
          <img src="/images/icon-complete.svg" alt="check icon" className='w-20 object-contain'/>
          <p className='text-3xl font-bold'>Thank You!</p>
          <p className='text-sm text-grayish-violet'>We've added your card details</p>
          <Button onClick={() => handleReset()} size='full' className='mt-4'>Continue</Button>
        </div>
        }

      </div>
    </>
  )
}

export default Card_form