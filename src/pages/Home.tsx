import PopularMovies from '@/components/home/PopularMovies'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'


const Home = () => {
  return (
    <div className='text-white mt-10'>
      <div className=''>
        <Tabs defaultValue="popular" className='px-0'>
          <TabsList variant="line" className='px-0 flex gap-8'>
            <TabsTrigger value="popular"
              className='text-sm px-0 
            group-data-[variant=line]/tabs-list:data-[state=active]:text-[#EC1313]
            group-data-[variant=line]/tabs-list:data-[state=inactive]:text-[#6b7280]
            group-data-[variant=line]/tabs-list:data-[state=active]:underline
            group-data-[variant=line]/tabs-list:data-[state=active]:underline-offset-10
            group-data-[variant=line]/tabs-list:data-[state=active]:decoration-[3px]
            '>
              Popular
            </TabsTrigger>
            <TabsTrigger value="top-rated"
              className='text-sm px-0
              group-data-[variant=line]/tabs-list:data-[state=active]:text-[#EC1313]
              group-data-[variant=line]/tabs-list:data-[state=inactive]:text-[#6b7280]
            group-data-[variant=line]/tabs-list:data-[state=active]:underline
            group-data-[variant=line]/tabs-list:data-[state=active]:underline-offset-10
            group-data-[variant=line]/tabs-list:data-[state=active]:decoration-[3px]
            '>
              Top Rated
            </TabsTrigger>
            <TabsTrigger value="upcoming"
              className='text-sm px-0
              group-data-[variant=line]/tabs-list:data-[state=active]:text-[#EC1313]
              group-data-[variant=line]/tabs-list:data-[state=inactive]:text-[#6b7280]
            group-data-[variant=line]/tabs-list:data-[state=active]:underline
            group-data-[variant=line]/tabs-list:data-[state=active]:underline-offset-10
            group-data-[variant=line]/tabs-list:data-[state=active]:decoration-[3px]
            '>
              Upcoming
            </TabsTrigger>
          </TabsList>
          <div className='border-b border-[#4a1111] mb-4'></div>
          <TabsContent value="popular">
            <PopularMovies />
          </TabsContent>
          <TabsContent value="top-rated">Top Rated Movies</TabsContent>
          <TabsContent value="upcoming">Upcoming Movies</TabsContent>
        </Tabs>
      </div>

    </div>
  )
}

export default Home