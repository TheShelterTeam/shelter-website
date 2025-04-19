/* eslint-disable jsx-a11y/no-redundant-roles */

const TEAM_MEMBERS = [
  {
    image: "/images/team/jagudelo.webp",
    name: "Jorge Agudelo",
    title: "Chief Executive Officer",
    description: "Jorge Agudelo, a seasoned entrepreneur from Colombia, pivoted to the crypto space in 2021 to sustain his passion for animal welfare. With over two decades of experience in animal rescue, Jorge leverages the blockchain's meritocratic system to fund and expand his initiatives, His vision is clear: a self-sustaining project that benefits both animals and investors long-term.",
  },
  {
    image: "/images/team/luthar.webp",
    name: "Andreas Luthar",
    title: "Chief Technology Officer / Chief Marketing Officer",
    description: "A pioneer in the crypto mining scene, Andreas Luthar transitioned from a decade-long mining career to programming in 2022. With his roots in Sweden, Andreas applies his technical acumen to develop robust, scalable solutions for Shelter. His journey from managing automated manufacturing programs to spearheading blockchain development epitomizes a dynamic shift towards impactful technology.",
  },
  {
    image: "/images/team/kompresser.webp",
    name: "Rasmus Kompresser",
    title: "Chief Operating Officer",
    description: "Danish native Rasmus Kompresser embraced cryptocurrencies in 2017, motivated by a desire for financial independence and disillusionment with traditional banking inequities. As COO, Rasmus is committed to creating a strong, value-driven community that supports both equitable investment opportunities and animal welfare.",
  },
  {
    image: "/images/team/stephen.webp",
    name: "Stephen Martin",
    title: "Marketing and Project Advisor",
    description: "French expatriate in Scotland, Stephen Martin delved deep into the crypto world in 2021, quickly establishing himself as a key community figure. As CMO, Stephen's strategy revolves around community engagement and value creation, ensuring that every initiative under Shelter not only supports global animal welfare but also empowers the community.",
  },
  {
    image: "/images/team/rgy.webp",
    name: "Brian rgy",
    title: "Lead Programmer and Head of Cyber Security",
    description: "Brian has 15+ years experience in spreadsheet/database development, graphic design, video editing, and website development, and more recently, 2+ years working in Python and bot development. He's been traveling the world since 2017, sticking to unbeaten paths and exploring as much as he can. His crypto journey began in the hype of 2022, but his love for it started when he found Genopets, and learned how to gain insights from blockchain scraping. Now, he loves working remotely while traveling the world and finding amazing projects like Shelter to bring his creative bot-development skills to the test, all while helping one of his first loves - animals!",
  }
]

const Team = () => {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8" id="team">
      <div data-aos="fade-up" className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gold sm:text-4xl">Our team</h2>
      </div>

      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
        {TEAM_MEMBERS.map((member, index) => (
          <li data-aos="fade-up" key={`team_${index}}`} class="flex flex-col gap-6 xl:flex-row">
            <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={`${process.env.PUBLIC_URL}{member.image}`} alt={member.name} />
            <div class="flex-auto">
              <h3 class="text-lg font-semibold leading-8 tracking-tight text-gold">{member.name}</h3>
              <p class="text-base leading-7 text-purple">{member.title}</p>
              <p class="mt-6 text-base leading-7 text-white">{member.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Team
