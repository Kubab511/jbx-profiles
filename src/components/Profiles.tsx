import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom"
import profilesJSON from "../data/profiles.json"

interface SubItem {
  id: number;
  name: string;
}

interface ChangelogItem {
  id: number;
  version: string;
  changes: {id: number, name: string}[]
}

export function Profiles() {
  const [icao, setIcao] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [changelogOpen, setChangelogIsOpen] = useState(false);
  const [selectedSubItems, setSelectedSubItems] = useState<SubItem[]>([]);
  const [selectedChangelogItems, setSelectedChangelogItems] = useState<ChangelogItem[]>([]);

  const openPopup = (subItems: {id: number, name: string}[]) => {
    setSelectedSubItems(subItems);
    setIsOpen(true);
  };

  const openChangelog = (changelogItems: {id: number, version: string, changes: {id: number, name: string}[] }[]) => {
    setSelectedChangelogItems(changelogItems);
    setChangelogIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedSubItems([]);
  };

  const closeChangelog = () => {
    setChangelogIsOpen(false);
    setSelectedChangelogItems([]);
  };

  const profileData = profilesJSON.profileData.sort((a, b) => a.icao[4].localeCompare(b.icao[4]));

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
      <div className="flex flex-row p-6 m-auto w-full">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
          {filteredProfileData.map((profile, index) => (
            <motion.li 
              className="rounded-lg bg-slate-300 dark:bg-[#343434] relative min-w-full"
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
              <button onClick={() => openChangelog(profile.changelog)} className="absolute bottom-2 right-2 text-slate-950 dark:text-[#ADB7BE] hover:text-neutral-600 dark:hover:text-white underline">
                v{profile.version}
              </button>
              <Link to={profile.download} target="_blank" style={{display: "contents"}}>
                <ArrowDownTrayIcon className="h-10 w-10 mx-auto my-2 text-slate-950 dark:text-[#ADB7BE] hover:text-neutral-600 dark:hover:text-white" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-7">
          <div className="bg-slate-300 dark:bg-[#343434] p-8 rounded-lg shadow-lg relative max-h-full overflow-y-auto">
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
      {changelogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-7">
          <div className="bg-slate-300 dark:bg-[#343434] p-8 rounded-lg shadow-lg relative max-h-full overflow-y-auto">
            <button 
              className="absolute top-2 right-2 text-slate-950 dark:text-[#ADB7BE] hover:text-neutral-600 dark:hover:text-white focus:outline-none"
              onClick={closeChangelog}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
            <ul className="list-disc pl-5 space-y-2">
              {selectedChangelogItems.map((changelog) => (
                <li className="text-slate-950 dark:text-[#ADB7BE]" key={changelog.id}>{changelog.version}
                  <ul>
                    {changelog.changes.map((change) => (
                      <li className="text-slate-950 dark:text-[#ADB7BE]" key={change.id}>
                        {change.name}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>  
      )}
    </>
  )
}