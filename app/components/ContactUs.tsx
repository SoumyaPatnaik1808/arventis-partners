import React from 'react'
import Link from 'next/link'
const ContactUs = () => {
  return (
   <>
      <section className="relative w-full bg-[#fcbe03] py-6 md:py-8 px-6 md:px-16 text-center text-black z-20">
         <div className="max-w-4xl mx-auto space-y-4 scroll-fade-up">
           <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-white">
             Let's Start the Conversation
           </h2>
           <p className="font-sans text-xs sm:text-sm text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
             Establish a direct partner relationship or initiate a mandate. Our strategy and legal practices operate under strict NDA protocols.
           </p>
           <div className="pt-2">
             <Link
               href="/contact-us"
               className="inline-block bg-white hover:bg-black text-black hover:text-white font-bold text-xs tracking-[0.2em] uppercase px-10 py-3.5 transition-all duration-300 hover-target shadow-xl rounded-[1px]"
             >
               CONTACT US
             </Link>
           </div>
         </div>
      </section>
   </>
  )
}

export default ContactUs