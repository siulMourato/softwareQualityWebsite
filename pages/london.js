import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';
import Footer from '../components/Footer';

export async function getServerSideProps() {
  const searchResults = await fetch(
    'https://us-central1-softwarequality-11c05.cloudfunctions.net/api/v',
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
}

function London({ searchResults }) {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            Here you have all results for your stay in London
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in London</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              ),
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default London;
