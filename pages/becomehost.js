import Header from "../components/Header";
import Footer from "../components/Footer";
import FormBecomeHost from "../components/FormBecomeHost";

function BecomeHost() {
  return (
    <div className="h-screen">
      <Header/>
      <main className="flex">
        <FormBecomeHost/>
      </main>
      <Footer/>
    </div>
  )
}

export default BecomeHost
