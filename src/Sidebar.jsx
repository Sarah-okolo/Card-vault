 import { useCardDetailsStore } from './store'

function Sidebar() {
  const { cardNumber, cardHolder, expiryMonth, expiryYear, cvc } = useCardDetailsStore()

  return (
    <>
      <div className='h-60 w-full bg-[url("/images/bg-main-mobile.png")] larger:bg-[url("/images/bg-main-desktop.png")] bg-cover bg-center grid place-items-center larger:h-screen larger:w-[350px]'>
        <div className="w-[286px] h-[157px] relative tracking-widest">
          <div className='h-full w-full bg-[url("/images/bg-card-back.png")] bg-cover bg-center absolute top-0 left-10 larger:top-24 larger:left-40'>
            <span className="absolute right-10 top-[70px] text-white font-medium text-[10px]">
              {`${cvc[0] && !isNaN(cvc[0]) ? cvc[0] : '-'}${cvc[1] && !isNaN(cvc[1]) ? cvc[1] : '-'}${cvc[2] && !isNaN(cvc[2]) ? cvc[2] : '-'}`}
            </span>
          </div>

          <div className='h-full w-full bg-[url("/images/bg-card-front.png")] bg-cover bg-center absolute top-[89px] right-10 shadow-2xl text-white p-4 flex flex-col justify-between gap-2 larger:top-[-89px] larger:right-[-100px]'>
            <div>
              <img src="/images/card-logo.svg" alt="card logo" className="scale-[.58] relative right-4 bottom-2"/>
            </div>
            <p className="text-xl">
              <span>{cardNumber[0] && !isNaN(cardNumber[0]) ? cardNumber[0] : '-'}</span>
              <span>{cardNumber[1] && !isNaN(cardNumber[1]) ? cardNumber[1] : '-'}</span>
              <span>{cardNumber[2] && !isNaN(cardNumber[2]) ? cardNumber[2] : '-'}</span>
              <span>{cardNumber[3] && !isNaN(cardNumber[3]) ? cardNumber[3] : '-'}</span>
                  &nbsp;
              <span>{cardNumber[4] && !isNaN(cardNumber[4]) ? cardNumber[4] : '-'}</span>
              <span>{cardNumber[5] && !isNaN(cardNumber[5]) ? cardNumber[5] : '-'}</span>
              <span>{cardNumber[6] && !isNaN(cardNumber[6]) ? cardNumber[6] : '-'}</span>
              <span>{cardNumber[7] && !isNaN(cardNumber[7]) ? cardNumber[7] : '-'}</span>
                  &nbsp;
              <span>{cardNumber[8] && !isNaN(cardNumber[8]) ? cardNumber[8] : '-'}</span>
              <span>{cardNumber[9] && !isNaN(cardNumber[9]) ? cardNumber[9] : '-'}</span>
              <span>{cardNumber[10] && !isNaN(cardNumber[10]) ? cardNumber[10] : '-'}</span>
              <span>{cardNumber[11] && !isNaN(cardNumber[11]) ? cardNumber[11] : '-'}</span>
                  &nbsp;
              <span>{cardNumber[12] && !isNaN(cardNumber[12]) ? cardNumber[12] : '-'}</span>
              <span>{cardNumber[13] && !isNaN(cardNumber[13]) ? cardNumber[13] : '-'}</span>
              <span>{cardNumber[14] && !isNaN(cardNumber[14]) ? cardNumber[14] : '-'}</span>
              <span>{cardNumber[15] && !isNaN(cardNumber[15]) ? cardNumber[15] : '-'}</span>
            </p>
            <div className='flex justify-between text-[11px]'>
              <p className='uppercase'>{ cardHolder ? cardHolder : 'card holder' }</p>
              <p>{`${expiryMonth[0] && !isNaN(expiryMonth[0]) ? expiryMonth[0] : '-'}${expiryMonth[1] && !isNaN(expiryMonth[1])? expiryMonth[1] : '-'}/${expiryYear[0] && !isNaN(expiryYear[0]) ? expiryYear[0] : '-'}${expiryYear[1] && !isNaN(expiryYear[1]) ? expiryYear[1] : '-'}`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
