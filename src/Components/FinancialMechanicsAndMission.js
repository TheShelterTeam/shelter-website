 const stats = [
//  { label: 'Expected royalties every 24 hours', value: '1 SOL' },
//  { label: 'Expected distribution per month', value: '1 SOL' },
 ]

const FinancialMechanicsAndMission = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:mt-0 lg:px-8 " id="financial-mechanics-and-mission">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 data-aos="fade-up" className="text-3xl font-bold tracking-tight text-gold sm:text-4xl">Financial Mechanics And Mission</h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div data-aos="fade-up" className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl leading-8 text-white">
              The revenue generated from royalties and transaction fees is allocated to a dedicated treasury. This fund is the lifeblood of Shelter, underpinning both the project's growth and its philanthropic activities.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-white">
              <p className="mt-10">
                A significant portion of these funds is designated for Rescatapelos, an operational animal shelter in Colombia with plans to expand support to other nations that are home to committed animal welfare advocates.
              </p>
            </div>
          </div>

          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              {stats.map((stat) => (
                <div data-aos="fade-up" key={stat.label} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base leading-7 text-white">{stat.label}</dt>
                  <dd className="text-5xl font-semibold tracking-tight text-purple">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialMechanicsAndMission
