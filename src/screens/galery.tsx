import GaleryCards from '@/modules/galery/components/galeryCards'
import Searcher from '@/modules/galery/components/searcher'

const Galery = () => {
  return (
    <div className="w-[1114px] mx-auto min-h-screen ">
      <Searcher />
      <GaleryCards />
    </div>
  )
}
export default Galery
