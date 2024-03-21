import {Hero,Products,Testimonials,Services,Offers,Subscribe,About,Footer} from './sections'
import Navbar from './components/Navbar';

const App = () => (
  <main className="relative">
    <Navbar />
    <section className="x1:padding-l wide:padding-r padding-b">
      <Hero/>

    </section>
    <section className="padding">
      <Products/>
    </section>
    <section className="padding">
      <About/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <Offers/>
    </section>
    <section className=" bg-pale-blue padding">
      <Testimonials/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
)





export default App;