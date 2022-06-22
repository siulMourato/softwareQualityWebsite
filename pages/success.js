import Header from '../components/Header';
import Footer from '../components/Footer';

function Success() {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <h1>New member added with success</h1>
      </main>
      <Footer />
    </div>
  );
}

export default Success;
