const Tokenomics = () => {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8 flex flex-col gap-6" id="tokenomics">
      <div data-aos="fade-up" className="w-full text-center md:text-start">
        <h2 className="text-3xl font-bold tracking-tight text-gold sm:text-4xl">Tokenomics</h2>
      </div>

      <div data-aos="fade-up" className="flex flex-wrap flex-col gap-2 justify-between items-center bg-[#3b3b3b] rounded-xl shadow py-4">
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">Distribution</h2>
        <img src="/images/tokenomics/distribution.png" className="w-[80%] max-w-[700px] mx-auto lg:w-auto" alt='Tokenomics Distribution' />
      </div>

      <div data-aos="fade-up" className="flex flex-wrap flex-col gap-2 justify-between items-center bg-white rounded-xl shadow py-4">
        <h2 className="text-xl font-bold tracking-tight text-gold sm:text-2xl">Vesting Schedule</h2>
        <img src="/images/tokenomics/vesting.png" className="w-[80%] max-w-[700px] mx-auto lg:w-auto" alt='Tokenomics Vesting' />
      </div>
    </div>
  )
}

export default Tokenomics