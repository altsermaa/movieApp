type ProductionTeamProps = {
    dataCrew: {
      cast: Casttype[];
      crew: CrewType[];
    };
  };

  type Casttype = {
    name: string; 
    popularity: number; 
    order: number; 
  }
  
  type CrewType = {
    name: string; 
    job: string;
  }
  

export const ProductionTeam = ({dataCrew}: ProductionTeamProps) => {

  const directors = dataCrew.crew.filter(el=> el.job === "Director")
  const writers = dataCrew.crew.filter(el=> el.job === "Writer")
  const stars = dataCrew.cast.filter(el=> el.order < 3 )
    return (
          <div className="mt-5">
            <div className="flex gap-14">
              <h1 className="font-black text-base w-[64px]">Director</h1>
              {directors.map((el, index)=> 
                (
                  <p key={index}>{el.name}</p>
                )
                )}
              
            </div>
            <div className="border-b-1 solid border-gray-300 w-full mt-1 mb-5"></div>
            <div className="flex gap-14">
              <h1 className="font-black text-base w-[64px]">Writers</h1>
              {writers.map((el, index)=> 
                (
                  <p key={index}>{el.name}</p>
                )
                )}
            </div>
            <div className="border-b-1 solid border-gray-300 w-full mt-1 mb-5"></div>
            <div className="flex gap-14">
              <h1 className="font-black text-base w-[64px]">Stars</h1>
              <div className="flex flex-wrap">
              {stars.map((el, index)=> 
                (
                    <p key={index}>{el.name}</p>
                )
                )}
                </div>
            </div>
    </div>  
    )

}