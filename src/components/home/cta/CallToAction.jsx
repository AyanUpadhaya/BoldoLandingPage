import './cta.css'
const CallToAction = () => {
  return (
    <div className='max-w-[1200px] mx-auto cta-bg lg:rounded-2xl py-[72px] mb-10 lg:mb-[84px]'>
        <h2 className="text-white font-manrope text-3xl lg:text-5xl text-center lg:leading-[72px]">
        An enterprise template to ramp up your company website
        </h2>
        <div className='flex flex-col lg:flex-row gap-4 justify-center items-center mt-[48px]'>
            <input type="email" placeholder='Enter email address' className='py-4 px-14 bg-white text-darkBlue rouned rounded-[56px] border-2 border-darkBlue text-xl font-normal' />
        <button className="py-4 px-14 bg-white text-darkBlue rouned rounded-[56px] border-2 border-darkBlue text-xl font-bold ">
                Start Now
        </button>
        </div>
    </div>
  )
}

export default CallToAction