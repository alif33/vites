import Header from '@/components/Header'
import Packages from '@/components/Packages'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
      <Services/>
      <Packages/>
      <Contact/>
      <Footer/>
    </main>
  )
}
