const Mission = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:mt-0 lg:px-8 " id="mission">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 data-aos="fade-up" className="text-3xl font-bold tracking-tight text-gold sm:text-4xl"><br />Mission Rescatapelos</h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div data-aos="fade-up" className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl leading-8 text-white">
What is our mission? Simply put, helping animals around the world. We are starting by helping Jorge at Rescatapelos with funds for different improvements.<br />
<img src={`${process.env.PUBLIC_URL}/images/Rescatapelos.jpg`} className="w-[80%] max-w-[700px] rounded-xl mx-auto lg:w-auto" alt='Rescatapelos' /><br />
The animals on this picture were all in poor condition or strays needing care. Jorge never thought twice about taking them in. People like him is why this project exists! We all want to do good for animals suffering no matter where they live.<br />
Since we started our community has helped Jorge get money to repair Rescatapelos from damages after several storms. Fallen trees, hails so big they destroyed roofs and sadly killed a few of his animals.. and that is just two examples of where Shelter made a difference for the animals at Rescatapelos. <br />
<img src={`${process.env.PUBLIC_URL}/images/Rescatapelos flees.jpg`} className="w-[80%] max-w-[700px] rounded-xl mx-auto lg:w-auto" alt='Rescatapelos fleas' /><br />
Recently a flea infestation got rooted among the pack which induced the need for a emergency donation fund! In less than a week the community came together and the animals got their needed treatment.<br />
This is our mission! Helping animals any way we can to make sure they have food, shelter and all medicine they might need! We do this in the best way possible by creating a working ecosystem with Token, NFTs, Games and real life services at the participating shelters! Be sure to join us if you also want to help shelters worldwide take care of more animals and help us in our mission!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
