import Image from "next/image"
import {useRouter} from 'next/router'

function SmallCard({img, location, distance}) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(`/${location.toLowerCase()}`)
  }

  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out"
      onClick={handleClick}>
      {/* Left */}
      <div className="relative h-16 w-16">

        <Image
          className="rounded-lg"
          src={img}
          layout="fill"
        />

      </div>
      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
