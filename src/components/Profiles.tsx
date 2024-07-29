import { ArrowDownTrayIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom"

const ProfileData = [
  {
    id: 1,
    title: "Aerosoft ENGM Oslo Gardermoen",
    link: "https://www.aerosoft.com/us/shop/flight/microsoft-flight-simulator/msfs-sceneries/msfs-europe/4286/aerosoft-mega-airport-oslo-gardermoen",
    image: "/assets/engm.webp",
    download: "https://drive.google.com/uc?id=1yGfrAEvcSEFptFyJbQQpcd6WkHshh7kp&export=download",
    icao: ["", "e", "en", "eng", "engm"]
  },
  {
    id: 2,
    title: "MXI Design LGMT Mytilene",
    link: "https://inibuilds.com/products/mxi-design-mytilene-lgmt-msfs",
    image: "/assets/lgmt.webp",
    download: "https://drive.google.com/uc?id=11kmowKSLeu1E8fZF--_fetC3HCs3iYJp&export=download",
    icao: ["", "l", "lg", "lgm", "lgmt"]
  },
  {
    id: 3,
    title: "Fly X Simulations EFKS Kuusamo",
    link: "https://inibuilds.com/products/fly-x-simulations-kuusamo-efks-msfs",
    image: "/assets/efks.webp",
    download: "https://drive.google.com/uc?id=1dGdZv8BRrmsW2KVcb54-bguJHXF8WAi9&export=download",
    icao: ["", "e", "ef", "efk", "efks"]
  },
  {
    id: 4,
    title: "XWind NZPM Palmerston North",
    link: "https://inibuilds.com/products/xwind-palmerston-north-nzpm-msfs",
    image: "/assets/nzpm.webp",
    download: "https://drive.google.com/uc?id=1zUewMoE_e3NHkLySDvL8qHHmjVk0NQzK&export=download",
    icao: ["", "n", "nz", "nzp", "nzpm"]
  },
  {
    id: 5,
    title: "Salvuz ENBR Bergen Flesland",
    link: "https://inibuilds.com/products/fly-x-simulations-kuusamo-efks-msfs",
    image: "/assets/enbr.webp",
    download: "https://drive.google.com/uc?id=1Vks6PkC1-JuXxdTab7DLEcrkc1ZOjJDT&export=download",
    icao: ["", "e", "en", "enb", "enbr"]
  },
  {
    id: 6,
    title: "iniBuilds NZQN Queenstown",
    link: "https://inibuilds.com/products/inibuilds-queenstown-nzqn-msfs",
    image: "/assets/nzqn.webp",
    download: "https://drive.google.com/uc?id=1e05LNJ32aWtTor-q0vaxsQK9jsmu7MY2&export=download",
    icao: ["", "n", "nz", "nzq", "nzqn"]
  },
  {
    id: 7,
    title: "ORBX YBMK Mackay",
    link: "https://orbxdirect.com/product/ybmk-msfs",
    image: "/assets/ybmk.webp",
    download: "https://drive.google.com/uc?id=1BSiKrZ0-DTzYKwgF2AvU1wBihYTn9n-V&export=download",
    icao: ["", "y", "yb", "ybm", "ybmk"]
  },
  {
    id: 8,
    title: "MXI Design EYKA Kaunas",
    link: "https://secure.simmarket.com/mxi-design-eyka-kaunas-airport-msfs.phtml",
    image: "/assets/eyka.webp",
    download: "https://drive.google.com/uc?id=1RFUjzSN6fQsgsUNVXXuQnhl9SZO0kgE1&export=download",
    icao: ["", "e", "ey", "eyk", "eyka"]
  },
  {
    id: 9,
    title: "RDPresets LOWS Salzburg",
    link: "https://www.rdpresets.com/lows-salzburg-airport.html",
    image: "/assets/lows.webp",
    download: "https://drive.google.com/uc?id=1DbObPHmHK0AM56S0lQqK6zfYfLkgMOxY&export=download",
    icao: ["", "l", "lo", "low", "lows"]
  },
  {
    id: 10,
    title: "JustSim LFMN Nice NG",
    link: "https://secure.simmarket.com/justsim-nice-cote-dazur-airport-ng-series-msfs.phtml",
    image: "/assets/lfmn.webp",
    download: "https://drive.google.com/uc?id=1bneuY60CL3EQkmooislYk5bi9oZ96Kpu&export=download",
    icao: ["", "l", "lf", "lfm", "lfmn"]
  },
  {
    id: 11,
    title: "MK Studios GCFV Fuerteventura",
    link: "https://mkstudios.pl/products/fuerteventura-airport/",
    image: "/assets/gcfv.webp",
    download: "https://drive.google.com/uc?id=1a0riToEa74ju_cZlKQO55PKfEFN5ErrK&export=download",
    icao: ["", "g", "gc", "gcf", "gcfv"]
  },
  {
    id: 12,
    title: "Impulse Simulations YBAS Alice Springs",
    link: "https://impulsesimulations.com/product/ybas-alice-springs-airport-msfs/",
    image: "/assets/ybas.webp",
    download: "https://drive.google.com/uc?id=1mDj9JtER1bl-HgZOtlSw68eBNyVjnpzt&export=download",
    icao: ["", "y", "yb", "yba", "ybas"]
  },
  {
    id: 13,
    title: "ORBX YGLA Gladstone",
    link: "https://orbxdirect.com/product/ygla-msfs",
    image: "/assets/ygla.webp",
    download: "https://drive.google.com/uc?id=1z-njxH-NkDCYCx7EN3hfd5jwFjjC2ed8&export=download",
    icao: ["", "y", "yg", "ygl", "ygla"]
  },
  {
    id: 14,
    title: "SNJ RJFF Fukuoka",
    link: "https://secure.simmarket.com/snj-sim-fukuoka-airport-msfs.phtml",
    image: "/assets/rjff.webp",
    download: "https://drive.google.com/uc?id=1EC6vuu1EHpfzWT_p_JZTCneQz0eUtIF9&export=download",
    icao: ["", "r", "rj", "rjf", "rjff"]
  },
  {
    id: 15,
    title: "SNJ RJFS Saga",
    link: "https://secure.simmarket.com/snj-sim-saga-airport-msfs.phtml",
    image: "/assets/rjfs.webp",
    download: "https://drive.google.com/uc?id=1fCZufdP5gux2vcIO_tdWfuE-az1Dmw6I&export=download",
    icao: ["", "r", "rj", "rjf", "rjfs"]
  },
  {
    id: 16,
    title: "FSDG FIMP Mauritius",
    link: "https://fsdg-online.com/Sceneries/FS2020/FS2020-Full/Mauritius-FS2020::60.html",
    image: "/assets/fimp.webp",
    download: "https://drive.google.com/uc?id=1EC6vuu1EHpfzWT_p_JZTCneQz0eUtIF9&export=download",
    icao: ["", "f", "fi", "fim", "fimp"]
  },
  {
    id: 17,
    title: "FlyDesign EPLL Łódź",
    link: "https://secure.simmarket.com/flydesign-eplllcj-lodz-airport-central-msfs.phtml",
    image: "/assets/epll.webp",
    download: "https://drive.google.com/uc?id=13zg366KxFicDxbAxMOJM5F-mMCDVtiV7&export=download",
    icao: ["", "e", "ep", "epl", "epll"]
  },
  {
    id: 18,
    title: "Impulse Simulations YSCB Canberra",
    link: "https://impulsesimulations.com/product/yscb-canberra-airport-msfs/",
    image: "/assets/yscb.webp",
    download: "https://drive.google.com/uc?id=15Bc3NMeVleuAu-GnLF2bXhknANmI9EFN&export=download",
    icao: ["", "y", "ys", "ysc", "yscb"]
  },
  {
    id: 19,
    title: "MK Studios BIKF Keflavik",
    link: "https://mkstudios.pl/products/keflavik-airport-3/",
    image: "/assets/bikf.webp",
    download: "https://drive.google.com/uc?id=16pAn9-iKD0eR_8yR0Z3gj0eCere_DGJ5&export=download",
    icao: ["", "b", "bi", "bik", "bikf"]
  },
]

export function Profiles() {
  const [icao, setIcao] = useState("");

  const filteredProfileData = ProfileData.filter((profile) => 
    profile.icao.includes(icao)
  );

  return (
    <>
      <h1 className="pt-24 text-slate-950 text-center font-bold text-4xl">Profiles</h1>
      <form className="flex p-6 m-auto">
        <input
        value={icao}
        onChange={(e) => setIcao(e.target.value)}
        className="rounded-md grow border border-gray-400 p-2" 
        placeholder="Enter Icao"
        />
      </form>
      <div className="flex flex-row p-6 m-auto">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
          {filteredProfileData.map((profile, index) => (
            <motion.li 
              className="rounded-lg bg-slate-300"
              key={index}
              initial= {{ scale: 0.5, opacity: 0 }}
              animate= {{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h1 className="font-bold text-center text-slate-950 p-2">{profile.title}</h1>
              <div className="h-48 mx-2 rounded" style={{backgroundImage: `url(${profile.image})`, backgroundSize: "cover"}}></div>
              <p className="text-slate-950 text-center p-2">Get the scenery <Link className="underline hover:text-neutral-600" to={profile.link} target="_blank">here</Link></p>
              <Link to={profile.download} target="_blank">
                <ArrowDownTrayIcon className="h-10 w-10 mx-auto mb-2 text-slate-950 hover:text-neutral-600" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  )
}