import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

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
function London({ searchResults }) {
  const router = useRouter();

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
              (
                { img, location, title, description, star, price, total },
                index,
              ) => (
                <button
                  id={title}
                  ey={img}
                  onClick={() =>
                    router.push(
                      `/details/london_${img.split('/').pop()}_${index}`,
                    )
                  }
                >
                  <InfoCard
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                  />
                </button>
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
