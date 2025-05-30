import React from 'react'

const Success = () => {
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&family=Roboto+Mono&display=swap" rel="stylesheet" />

  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal text-midGray font-body px-4">
      <div className="bg-[#2A2A2A] border border-midGray rounded-xl p-8 max-w-md w-full text-center shadow-2xl space-y-6">
        
        <div className="flex justify-center">
          <div className="bg-safetyOrange p-4 rounded-full">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl text-yellow-600 font-heading uppercase">Payment Successful</h2>
        <p className="text-sm text-white">
          Your payment was processed successfully. A receipt has been sent to your email.
        </p>

        <div className="bg-charcoal border border-midGray rounded-lg p-4 text-left space-y-2 text-sm">
          <div><span className="text-white">Amount:</span> <span className="text-yellow-600">$1</span></div>
          <div><span className="text-white">Transaction ID:</span> <span className='text-yellow-600'>yusuf12345</span></div>
          
        </div>

       
      </div>
    </div>
  )
}

export default Success

