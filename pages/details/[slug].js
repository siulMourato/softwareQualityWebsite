import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

export async function getServerSideProps(context) {
  const query = context.query.slug;
  const houseIndex = query.split('_').pop();
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json(),
  );
  const houseData = searchResults[houseIndex];
  return {
    props: { houseData },
  };
}

function DetailsPage({
  houseData: { img, location, title, description, star, price, total },
}) {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex flex-col gap-5">
        <div className="flex justify-center pt-5">
          <Image
            className="rounded-2xl"
            layout="fill"
            objectFit="cover"
            src={img}
            width={500}
            height={450}
            layout="fixed"
          />
        </div>
        <div className="flex flex-col flex-grow px-10 pb-10">
          <div className="flex justify-between">
            <p>{location}</p>
            <HeartIcon className="h-7 cursor-pointer" />
          </div>
          <h4 className="text-xl">{title}</h4>
          <div className="border-b w-10 pt-2" />
          <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
          <div className="flex flex-row justify-between items-end">
            <div>
              <button className="p-3 border border-black">Reserve now</button>
            </div>
            <div>
              <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
              <p className="text-right font-extralight">{total}</p>
              <p className="flex justify-end items-center">
                <StarIcon className="h-5 text-red-400" />
                {star}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DetailsPage;
