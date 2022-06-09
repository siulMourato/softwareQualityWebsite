import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';
import Footer from '../components/Footer';

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json(),
  );

  return {
    props: {
      searchResults,
    },
  };
}
//TODO: just a test 5
function Test({ searchResults }) {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <h1>Sou eu a passar no buid!!!</h1>
      </main>
      <Footer />
    </div>
  );
}

export default Test;
