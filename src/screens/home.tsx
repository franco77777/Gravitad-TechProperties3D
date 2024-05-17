import Vector1 from '../assets/vector1.png'
import Vector2 from '../assets/vector2.png'
import Dicon1 from '../assets/dicon1.png'
import Dicon2 from '../assets/dicon2.png'
import Dicon3 from '../assets/dicon3.png'
import Rectangle from '../assets/rectangle.png'
import Landing from '@/modules/home/components/landing'
import FeatureIntro from '@/modules/home/components/featureIntro'
import HomeResult from '@/modules/home/components/result'
import HomeEstrategy from '@/modules/home/components/estrategy'
import HomeCard from '@/modules/home/components/card'

export default function Home() {
  return (
    <div>
      <div className="min-h-[100vh] w-full h-full    ">
        <Landing />
        <FeatureIntro />
        <HomeResult />
        <HomeEstrategy />
        <HomeCard />
      </div>
    </div>
  )
}
