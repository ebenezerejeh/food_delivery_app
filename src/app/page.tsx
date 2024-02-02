import Slider from './components/Slider'
import Featured from './components/Featured'
import Offer from './components/Offer'

export default function Home() {
  return (
    <main className='w-screen'>
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  )
}
