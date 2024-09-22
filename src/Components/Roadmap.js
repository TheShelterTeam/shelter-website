const ROADMAP_ITEMS = [
  { title: "Q-3 2024 *Ongoing*", description: "Token private and public Presale + Marketing push" },
  { title: "Q-1 2025", description: "Token generation event" },
  { title: "Q-2 2025", description: "NFT Collection Series 1 mint" },
  { title: "Q-3 2025", description: "Real World animal services launch" },
  { title: "Q-4 2025", description: "NFT Collection Series 2 mint" },
  { title: "2025", description: "Shelter game app beta release" },
  { title: "Q-1 2026", description: "Worldwide platform connected" },
]

const Roadmap = () => {
  // return (
  //   <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8" id="roadmap">
  //     <div data-aos="fade-up" className="mx-auto max-w-2xl lg:mx-0">
  //       <h2 className="text-3xl font-bold tracking-tight text-purple sm:text-4xl">Roadmap</h2>
  //     </div>
  //     <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
  //       {ROADMAP_ITEMS.map((value) => (
  //         <div data-aos="fade-up" key={value.name}>
  //           <dt className="font-semibold text-gold">{value.title}</dt>
  //           <dd className="mt-1 text-white">{value.description}</dd>
  //         </div>
  //       ))}
  //     </dl>
  //   </div>
  // )

  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8" id="roadmap">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 data-aos="fade-up" className="text-3xl font-bold tracking-tight text-gold sm:text-4xl">Roadmap</h2>

        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-5 mt-16">
          {ROADMAP_ITEMS.map((item, index) => (
            <div data-aos="fade-left" key={`roadmap_${index}`}>
              <div class="flex items-center text-sm font-semibold leading-6 text-white">
                <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx="2" cy="2" r="2" fill="currentColor" />
                </svg>
                {item.title}
                <div
                  class="absolute -ml-2 h-px w-screen -translate-x-full bg-gold sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"></div>
              </div>
              <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Roadmap
