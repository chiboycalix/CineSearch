import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import { useNavigate } from "react-router"


const NoResult = ({ query }: { query: string }) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="w-full text-white flex flex-col items-center justify-center py-10">
        <div className="p-8 bg-[#311717] rounded-full relative">
          <Icon icon="mdi:film-off-outline" width={40} height={40} className='text-[#ec1313]' />

          <div className="p-4 bg-[#221010] rounded-full absolute -bottom-4 -right-4">
            <Icon icon="material-symbols:search-off" width={20} height={20} className='text-[#ec1313]' />
          </div>
        </div>
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold text-white">No results found</h1>
          <p className="text-[#94A3B8] w-[55%] mx-auto mt-4">Sorry we couldn't find any results for <span className="text-[#ec1313] font-bold">"{query}"</span>. Try checking your spelling or searching for something more general.</p>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            onClick={() => navigate('/search-result?query=')}
            className="bg-[#ec1313] hover:bg-[#ec1313]/80 text-white rounded-lg py-6 px-10 cursor-pointer">
            Clear Search
          </Button>
          <Button
            onClick={() => navigate('/')}
            className="bg-[#371011] hover:bg-[#371011]/80 text-white rounded-lg py-6 px-10 cursor-pointer border border-[#5b1110]">
            Browse Popular
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NoResult