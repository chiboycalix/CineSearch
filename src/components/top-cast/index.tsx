import Mathew from "../../assets/top-cast/matthew.png";
import Anne from "../../assets/top-cast/anne.png";
import Jessica from "../../assets/top-cast/jessica.png";
import Michael from "../../assets/top-cast/michael.png";

const TopCast = () => {

  const topCast = [
    {
      castImage: Mathew,
      castOriginalName: "Matthew McConaughey",
      castMovieName: "Cooper"
    },
    {
      castImage: Anne,
      castOriginalName: "Anne Hathaway",
      castMovieName: "Brand"
    },
    {
      castImage: Jessica,
      castOriginalName: "Jessica Chastain",
      castMovieName: "Murph"
    },
    {
      castImage: Michael,
      castOriginalName: "Michael Caine",
      castMovieName: "Professor Brand"
    }
  ]


  return (
    <div className="flex items-start justify-between gap-4">
      {
        topCast.map((cast, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center gap-4 border border-[#4a1111] bg-[#2d1d1d] rounded-lg p-4 w-full h-60">
            <img src={cast.castImage} alt={cast.castOriginalName} className="w-24 h-24 object-cover rounded-full border-2 border-[#4a1111] " />
            <h1 className="text-white text-lg font-bold text-center">{cast.castOriginalName}</h1>
            <p className="text-[#94A3B8] text-sm font-bold text-center">{cast.castMovieName}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TopCast