import { ArrowDownTrayIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion";
import { Link } from "react-router-dom"

const liveryData = [
  {
    id: 1,
    title: "GSX Bus Livery - Prague Airport",
    image: "/assets/lkpr-bus.webp",
    download: "https://drive.google.com/uc?id=1RkWweLe3BBSseLbbqdOeYsssqkHpp0jj&export=download"
  }
]

export function Liveries() {
  return (
    <>
      <h1 className="pt-24 text-slate-950 text-center font-bold text-4xl">Liveries</h1>
      <div className="flex flex-row p-6 m-auto">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
          {liveryData.map((livery, index) => (
            <motion.li 
              className="rounded-lg bg-slate-300"
              key={index}
              initial= {{ scale: 0.5, opacity: 0 }}
              animate= {{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h1 className="font-bold text-center text-slate-950 p-2">{livery.title}</h1>
              <div className="h-48 mx-2 rounded" style={{backgroundImage: `url(${livery.image})`, backgroundSize: "cover"}}></div>
              <Link to={livery.download} target="_blank">
                <ArrowDownTrayIcon className="h-10 w-10 mx-auto mb-2 text-slate-950 hover:text-neutral-600" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  )
}