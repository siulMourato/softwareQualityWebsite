import Header from '../components/Header';
import Footer from '../components/Footer';

export async function getServerSideProps(context) {
  const query = context.query.slug;
  console.log(query);

  return {
    props: {},
  };
}

function DetailsPage() {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <h1>Cheguei aqui</h1>
      </main>
      <Footer />
    </div>
  );
}

export default DetailsPage;
