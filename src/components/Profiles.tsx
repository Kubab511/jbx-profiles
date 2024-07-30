import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom"

interface SubItem {
  id: number;
  name: string;
}

const profileData = [
  {
    id: 1,
    title: "Aerosoft ENGM Oslo Gardermoen",
    link: "https://www.aerosoft.com/us/shop/flight/microsoft-flight-simulator/msfs-sceneries/msfs-europe/4286/aerosoft-mega-airport-oslo-gardermoen",
    image: "/assets/engm.webp",
    download: "https://drive.google.com/uc?id=1yGfrAEvcSEFptFyJbQQpcd6WkHshh7kp&export=download",
    icao: ["", "e", "en", "eng", "engm"],
    version: "1.4",
    features: [
      {id: 1, name: "Custom separate boarding/deboarding paths to the terminal at all gates with jetways"},
      {id: 2, name: "Custom vehicle placement at all gates"},
      {id: 3, name: "Custom stop positions based on aircraft type at all gates - based on the offsets from the Aerosoft VDGS file"},
      {id: 4, name: "Python file to group the gates together"},
      {id: 5, name: "Handling by SAS, Menzies, Norwegian and Wiederøe"},
      {id: 6, name: "Catering by Newrest Scandinavia and GateGourmet"},
      {id: 7, name: "Custom pushbacks at all gates as per the Avinor documentation"},
      {id: 8, name: "Medium jetway gates only have a rear staircase (irl heavies don't use them)"},
      {id: 9, name: "ATR gates (small) have the rear baggage cart disabled"},
      {id: 10, name: "Option to use either Aerosoft's or GSX's VDGS system"},
      {id: 11, name: "Remote de-icing pads"},
      {id: 12, name: "Gate 189 has been moved to gate 188 to allow for heavy aircraft to park there"},
      {id: 13, name: "Gate 47 is disabled as is the case irl"}
    ]
  },
  {
    id: 2,
    title: "MXI Design LGMT Mytilene",
    link: "https://inibuilds.com/products/mxi-design-mytilene-lgmt-msfs",
    image: "/assets/lgmt.webp",
    download: "https://drive.google.com/uc?id=11kmowKSLeu1E8fZF--_fetC3HCs3iYJp&export=download",
    icao: ["", "l", "lg", "lgm", "lgmt"],
    version: "2.1",
    features: [
      {id: 1, name: "Custom vehicle placement at all gates"},
      {id: 2, name: "True to life pushbacks at all gates"},
      {id: 3, name: "As is common in some Greek island aiports, boarding is done through a bus and deboarding by foot"},
      {id: 4, name: "All gates customized with the PMDG 737-800 and Fenix A320"},
      {id: 5, name: "Ground handling by Goldair"},
      {id: 6, name: "Accurate stop positions"},
    ]
  },
  {
    id: 3,
    title: "Fly X Simulations EFKS Kuusamo",
    link: "https://inibuilds.com/products/fly-x-simulations-kuusamo-efks-msfs",
    image: "/assets/efks.webp",
    download: "https://drive.google.com/uc?id=1dGdZv8BRrmsW2KVcb54-bguJHXF8WAi9&export=download",
    icao: ["", "e", "ef", "efk", "efks"],
    version: "2.0",
    features: [
      {id: 1, name: "Custom, separate boarding/deboarding walk-in paths at all stands"},
      {id: 2, name: "Custom vehicle placement"},
      {id: 3, name: "Ground handling by Airpro"},
      {id: 4, name: "Custom pushbacks"},
      {id: 5, name: "Python file for better gate grouping"}
    ]
  },
  {
    id: 4,
    title: "XWind NZPM Palmerston North",
    link: "https://inibuilds.com/products/xwind-palmerston-north-nzpm-msfs",
    image: "/assets/nzpm.webp",
    download: "https://drive.google.com/uc?id=1zUewMoE_e3NHkLySDvL8qHHmjVk0NQzK&export=download",
    icao: ["", "n", "nz", "nzp", "nzpm"],
    version: "1.1",
    features: [
      {id: 1, name: "Custom walk-in paths at gates 1-7"},
      {id: 2, name: "Custom vehicle placement at all gates"},
      {id: 3, name: "Ground handling by Air New Zealand"},
      {id: 4, name: "Gates 2-5 are split into east and west facing in the scenery and configured separately"},
      {id: 5, name: "Python file for better gate grouping"}
    ]
  },
  {
    id: 5,
    title: "Salvuz ENBR Bergen Flesland",
    link: "https://secure.simmarket.com/salvuz-enbr-bergen-flesland-airport-msfs.phtml",
    image: "/assets/enbr.webp",
    download: "https://drive.google.com/uc?id=1Vks6PkC1-JuXxdTab7DLEcrkc1ZOjJDT&export=download",
    icao: ["", "e", "en", "enb", "enbr"],
    version: "1.3",
    features: [
      {id: 1, name: "Custom walk-in paths to the jetways in T3"},
      {id: 2, name: "Custom vehicle placement at all gates"},
      {id: 3, name: "Custom pushbacks at all gates"},
      {id: 4, name: "Ground handling by Widerøe and Aviator"},
      {id: 5, name: "Catering by GateGourmet"},
      {id: 6, name: "Python file for better gate grouping"},
      {id: 7, name: "De-ice ramps"}
    ]
  },
  {
    id: 6,
    title: "iniBuilds NZQN Queenstown",
    link: "https://inibuilds.com/products/inibuilds-queenstown-nzqn-msfs",
    image: "/assets/nzqn.webp",
    download: "https://drive.google.com/uc?id=1e05LNJ32aWtTor-q0vaxsQK9jsmu7MY2&export=download",
    icao: ["", "n", "nz", "nzq", "nzqn"],
    version: "1.0",
    features: [
      {id: 1, name: "Custom walk-in paths"},
      {id: 2, name: "Custom vehicle placement at all gates"},
      {id: 3, name: "Custom stop positions based on aircraft type at all gates"},
      {id: 4, name: "Ground handling by PlaneBiz"},
      {id: 5, name: "Python file for better gate grouping"},
      {id: 6, name: "Custom pushbacks at gates 2-8 - gates 1 and 1A are self-manouvering"},
      {id: 7, name: "Exclusion file to fix clutter obstructing walk-in paths and vehicles around gate R4"},
      {id: 8, name: "Gates 1 and 1A are configued with the ATR72 in mind, all remaining gates are made for the 737 and A320"}
    ]
  },
  {
    id: 7,
    title: "ORBX YBMK Mackay",
    link: "https://orbxdirect.com/product/ybmk-msfs",
    image: "/assets/ybmk.webp",
    download: "https://drive.google.com/uc?id=1BSiKrZ0-DTzYKwgF2AvU1wBihYTn9n-V&export=download",
    icao: ["", "y", "yb", "ybm", "ybmk"],
    version: "1.2",
    features: [
      {id: 1, name: "Custom separate boarding/deboarding paths"},
      {id: 2, name: "Custom vehicle placement at all gates"},
      {id: 3, name: "Ground handling by Swissport and Oceania"},
      {id: 4, name: "Custom stop positions based on aircraft type at all gates"},
      {id: 5, name: "Python file for better gate grouping"}
    ]
  },
  {
    id: 8,
    title: "MXI Design EYKA Kaunas",
    link: "https://secure.simmarket.com/mxi-design-eyka-kaunas-airport-msfs.phtml",
    image: "/assets/eyka.webp",
    download: "https://drive.google.com/uc?id=1RFUjzSN6fQsgsUNVXXuQnhl9SZO0kgE1&export=download",
    icao: ["", "e", "ey", "eyk", "eyka"],
    version: "1.0",
    features: [
      {id: 1, name: "Custom vehicle placement at all gates"},
      {id: 2, name: "Custom pushbacks at gates: 11, 12, 14, 15, 16, 17, 18, 19, 20 - all others are self-manoeuvring"},
      {id: 3, name: "Walk-in paths at gates: 2, 4, 7, 10"},
      {id: 4, name: "Handling by Litcargus"},
      {id: 5, name: "Accurate stop positions"}
    ]
  },
  {
    id: 9,
    title: "RDPresets LOWS Salzburg",
    link: "https://www.rdpresets.com/lows-salzburg-airport.html",
    image: "/assets/lows.webp",
    download: "https://drive.google.com/uc?id=1DbObPHmHK0AM56S0lQqK6zfYfLkgMOxY&export=download",
    icao: ["", "l", "lo", "low", "lows"],
    version: "1.0",
    features: [
      {id: 1, name: "Custom vehicle placement at all gates"},
      {id: 2, name: "Custom pushbacks at all gates"},
      {id: 3, name: "Walk-in paths at relevant gates"},
      {id: 4, name: "Ground handling by Salzburg Airport"},
      {id: 5, name: "Ground handling by Salzburg Airport"}
    ]
  },
  {
    id: 10,
    title: "JustSim LFMN Nice NG",
    link: "https://secure.simmarket.com/justsim-nice-cote-dazur-airport-ng-series-msfs.phtml",
    image: "/assets/lfmn.webp",
    download: "https://drive.google.com/uc?id=1bneuY60CL3EQkmooislYk5bi9oZ96Kpu&export=download",
    icao: ["", "l", "lf", "lfm", "lfmn"],
    version: "1.2",
    features: [
      {id: 1, name: "Custom vehicle placement at all gates"},
      {id: 2, name: "Custom vehicle placement at all gates"},
      {id: 3, name: "Custom vehicle placement at all gates"},
      {id: 4, name: "Passengers walking through the terminal to the jetways"},
      {id: 5, name: "VDGS at relevant gates"},
      {id: 6, name: "Ground handling by Air France, Aviapartner and Menzies"},
      {id: 7, name: "Catering by Newrest"},
      {id: 8, name: "Accurate stop positions based on the aircraft type"}
    ]
  },
  {
    id: 11,
    title: "MK Studios GCFV Fuerteventura",
    link: "https://mkstudios.pl/products/fuerteventura-airport/",
    image: "/assets/gcfv.webp",
    download: "https://drive.google.com/uc?id=1a0riToEa74ju_cZlKQO55PKfEFN5ErrK&export=download",
    icao: ["", "g", "gc", "gcf", "gcfv"],
    version: "1.1",
    features: [
      {id: 1, name: "Custom vehicle placement at all gates"},
      {id: 2, name: "Custom pushbacks at all gates"},
      {id: 3, name: "Custom jetway heights to prevent pax from clipping through the jetways"},
      {id: 4, name: "Gates 16, 18, 21, 23 use walk-in paths instead of the jetways as some low-cost carrier don't use jetways"},
      {id: 5, name: "VDGS at gates 11-28"},
      {id: 6, name: "Ground handling by Aviapartner, Ryanair and Groundforce"},
      {id: 7, name: "Accurate stop positions based on the aircraft type"}
    ]
  },
  {
    id: 12,
    title: "Impulse Simulations YBAS Alice Springs",
    link: "https://impulsesimulations.com/product/ybas-alice-springs-airport-msfs/",
    image: "/assets/ybas.webp",
    download: "https://drive.google.com/uc?id=1mDj9JtER1bl-HgZOtlSw68eBNyVjnpzt&export=download",
    icao: ["", "y", "yb", "yba", "ybas"],
    version: "1.3",
    features: [
      {id: 1, name: "Custom walk-in paths at all gates"},
      {id: 2, name: "Custom vehicle placement at all gates"},
      {id: 3, name: "Ground handling by NWAS"},
      {id: 4, name: "Custom stop positions based on aircraft type at all gates"},
      {id: 5, name: "All gates are self-manouvering"},
      {id: 6, name: "Python file  for better gate grouping"}
    ]
  },
  {
    id: 13,
    title: "ORBX YGLA Gladstone",
    link: "https://orbxdirect.com/product/ygla-msfs",
    image: "/assets/ygla.webp",
    download: "https://drive.google.com/uc?id=1z-njxH-NkDCYCx7EN3hfd5jwFjjC2ed8&export=download",
    icao: ["", "y", "yg", "ygl", "ygla"],
    version: "2.4",
    features: [
      {id: 1, name: "Custom separate boarding/deboarding paths at all gates"},
      {id: 2, name: "Custom vehicle placement at all gates"},
      {id: 3, name: "Handling by Winkel Aviation Services"},
      {id: 4, name: "Custom stop positions based on aircraft type at all gates"},
      {id: 5, name: "Python file for better gate grouping"}
    ]
  },
  {
    id: 14,
    title: "SNJ RJFF Fukuoka",
    link: "https://secure.simmarket.com/snj-sim-fukuoka-airport-msfs.phtml",
    image: "/assets/rjff.webp",
    download: "https://drive.google.com/uc?id=1EC6vuu1EHpfzWT_p_JZTCneQz0eUtIF9&export=download",
    icao: ["", "r", "rj", "rjf", "rjff"],
    version: "1.0",
    features: [
      {id: 1, name: "Custom vehicle placement at all gates"},
      {id: 2, name: "Custom pushbacks at all gates"},
      {id: 3, name: "Custom jetway heights to prevent pax from clipping through the jetways"},
      {id: 4, name: "Ground handling by ANA, JAL and Swissport"},
      {id: 5, name: "Catering by ANA"},
      {id: 6, name: "Passenger walk-in paths to the plane at international gate 59 and to the jetways at remaining international terminal gates"},
      {id: 7, name: "East Apron gates customized with the Asobo ATR"},
      {id: 8, name: "Domestic and international gates customized with the PMDG 737-800 and Fenix A320"},
      {id: 9, name: "Cargo gates customized with the iniBuilds A300F"}
    ]
  },
  {
    id: 15,
    title: "SNJ RJFS Saga",
    link: "https://secure.simmarket.com/snj-sim-saga-airport-msfs.phtml",
    image: "/assets/rjfs.webp",
    download: "https://drive.google.com/uc?id=1fCZufdP5gux2vcIO_tdWfuE-az1Dmw6I&export=download",
    icao: ["", "r", "rj", "rjf", "rjfs"],
    version: "1.0",
    features: [
      {id: 1, name: "Custom vehicle placement at all gates"},
      {id: 2, name: "Custom pushbacks at all gates"},
      {id: 3, name: "Ground handling and catering by ANA"},
      {id: 4, name: "Custom jetway heights to prevent pax clipping into jetways"},
      {id: 5, name: "Passenger walk-in paths at gate 2 and to all jetways at gates 3-5"}
    ]
  },
  {
    id: 16,
    title: "FSDG FIMP Mauritius",
    link: "https://fsdg-online.com/Sceneries/FS2020/FS2020-Full/Mauritius-FS2020::60.html",
    image: "/assets/fimp.webp",
    download: "https://drive.google.com/uc?id=1EC6vuu1EHpfzWT_p_JZTCneQz0eUtIF9&export=download",
    icao: ["", "f", "fi", "fim", "fimp"],
    version: "1.1",
    features: [
      {id: 1, name: "Custom vehicle placement at all gates"},
      {id: 2, name: "Custom pushbacks at all gates"},
      {id: 3, name: "Ground Handling by Air Mauritius"},
      {id: 4, name: "Catering by LSG, Newrest and Servair"},
      {id: 5, name: "Custom stop positions based on aircraft type"},
      {id: 6, name: "Python file for better gate grouping"}
    ]
  },
  {
    id: 17,
    title: "FlyDesign EPLL Łódź",
    link: "https://secure.simmarket.com/flydesign-eplllcj-lodz-airport-central-msfs.phtml",
    image: "/assets/epll.webp",
    download: "https://drive.google.com/uc?id=13zg366KxFicDxbAxMOJM5F-mMCDVtiV7&export=download",
    icao: ["", "e", "ep", "epl", "epll"],
    version: "1.0",
    features: [
      {id: 1, name: "Custom vehicle placement at all gates"},
      {id: 2, name: "Ground handling by Łódź Airport"},
      {id: 3, name: "Custom pushbacks at all gates"},
      {id: 4, name: "Python file for better gate grouping"}
    ]
  },
  {
    id: 18,
    title: "Impulse Simulations YSCB Canberra",
    link: "https://impulsesimulations.com/product/yscb-canberra-airport-msfs/",
    image: "/assets/yscb.webp",
    download: "https://drive.google.com/uc?id=15Bc3NMeVleuAu-GnLF2bXhknANmI9EFN&export=download",
    icao: ["", "y", "ys", "ysc", "yscb"],
    version: "1.1",
    features: [
      {id: 1, name: "Custom walk-in paths at gates with no jetways"},
      {id: 2, name: "Pax walking from the terminal to the jetway at all gates"},
      {id: 3, name: "Custom vehicle placement at all gates"},
      {id: 4, name: "Ground handling by Swissport and Corporate Air"},
      {id: 5, name: "Catering by DNATA"},
      {id: 6, name: "Custom stop positions based on aircraft type at all gates"},
      {id: 7, name: "Custom pushbacks at all gates"},
      {id: 8, name: "Python file for better gate grouping"},
      {id: 9, name: "Option to use either Aerosoft's or GSX's VDGS"}
    ]
  },
  {
    id: 19,
    title: "MK Studios BIKF Keflavik",
    link: "https://mkstudios.pl/products/keflavik-airport-3/",
    image: "/assets/bikf.webp",
    download: "https://drive.google.com/uc?id=16pAn9-iKD0eR_8yR0Z3gj0eCere_DGJ5&export=download",
    icao: ["", "b", "bi", "bik", "bikf"],
    version: "1.1",
    features: [
      {id: 1, name: "Custom vehicle placement at all gates"},
      {id: 2, name: "Custom pushbacks as per Isavia documentation"},
      {id: 3, name: "Python file to group the gates together"},
      {id: 4, name: "Custom jetway heights to prevent pax from clipping through the jetways"},
      {id: 5, name: "Pax walking to jetways"},
      {id: 6, name: "Walk-in paths where relevant (gate 10)"},
      {id: 7, name: "Option to use GSX's or Nool's VDGS"},
      {id: 8, name: "Ground handling by Icelandair and Airport Associates"},
      {id: 9, name: "Catering by IGS"},
      {id: 10, name: "Accurate stop positions based on aircraft category"},
      {id: 11, name: "Gates 71R and 72R are disabled as they're too close to gates 71 and 72 which causes issues with GSX recognizing where the airplane is parked"},
      {id: 12, name: "Basic profile for BIRK Reykjavik with gates 1, 3 and 4 at apron 4 configured with walk-in paths and vehicles for the ATR72"}
    ]
  },
]

export function Profiles() {
  const [icao, setIcao] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubItems, setSelectedSubItems] = useState<SubItem[]>([]);

  const openPopup = (subItems: {id: number, name: string}[]) => {
    setSelectedSubItems(subItems);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedSubItems([]);
  };

  profileData.sort((a, b) => a.icao[4].localeCompare(b.icao[4]))

  const filteredProfileData = profileData.filter((profile) => 
    profile.icao.includes(icao.toLowerCase())
  );

  return (
    <>
      <h1 className="pt-24 text-slate-950 dark:text-[#ADB7BE] text-center font-bold text-4xl">Profiles</h1>
      <form className="flex p-6 m-auto">
        <input
        value={icao}
        onChange={(e) => setIcao(e.target.value)}
        className="rounded-md grow border border-[#484b6a] p-2 dark:bg-[#121212] text-slate-950 dark:text-[#ADB7BE]"
        placeholder="Enter ICAO"
        />
      </form>
      <div className="flex flex-row p-6 m-auto">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
          {filteredProfileData.map((profile, index) => (
            <motion.li 
              className="rounded-lg bg-slate-300 dark:bg-[#343434] relative"
              key={index}
              initial= {{ scale: 0.5, opacity: 0 }}
              animate= {{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h1 className="h-16 font-bold text-center text-slate-950 dark:text-[#ADB7BE] p-2">{profile.title}</h1>
              <div className="h-48 mx-2 rounded" style={{backgroundImage: `url(${profile.image})`, backgroundSize: "cover"}}></div>
              <p className="text-slate-950 dark:text-[#ADB7BE] text-center p-2">Get the scenery <Link className="underline hover:text-neutral-600 dark:hover:text-white" to={profile.link} target="_blank">here</Link></p>
              <button onClick={() => openPopup(profile.features)} className="text-slate-950 dark:text-[#ADB7BE] hover:text-neutral-600 dark:hover:text-white underline block mx-auto">
                Features
              </button>
              <p className="absolute bottom-2 right-2 text-slate-950 dark:text-[#ADB7BE]">
                v{profile.version}
              </p>
              <Link to={profile.download} target="_blank" style={{display: "contents"}}>
                <ArrowDownTrayIcon className="h-10 w-10 mx-auto my-2 text-slate-950 dark:text-[#ADB7BE] hover:text-neutral-600 dark:hover:text-white" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-7 md:p-0">
          <div className="bg-slate-300 dark:bg-[#343434] p-6 rounded-lg shadow-lg relative">
            <button 
              className="absolute top-2 right-2 text-slate-950 dark:text-[#ADB7BE] hover:text-neutral-600 dark:hover:text-white focus:outline-none"
              onClick={closePopup}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
            <ul className="list-disc pl-5 space-y-2">
              {selectedSubItems.map((feature) => (
                <li className="text-slate-950 dark:text-[#ADB7BE]" key={feature.id}>{feature.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}