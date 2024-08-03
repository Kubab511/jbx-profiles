import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import liveriesJSON from "../data/liveries.json"
import { useState } from "react";

interface ChangelogItem {
  id: number;
  version: string;
  changes: {id: number, name: string}[]
}

export function Liveries() {
  const liveryData = liveriesJSON.liveryData;
  const [changelogOpen, setChangelogIsOpen] = useState(false);
  const [selectedChangelogItems, setSelectedChangelogItems] = useState<ChangelogItem[]>([]);

  const openChangelog = (changelogItems: {id: number, version: string, changes: {id: number, name: string}[] }[]) => {
    setSelectedChangelogItems(changelogItems);
    setChangelogIsOpen(true);
  };


  const closeChangelog = () => {
    setChangelogIsOpen(false);
    setSelectedChangelogItems([]);
  };

  return (
    <>
      <h1 className="pt-24 text-slate-950 dark:text-[#ADB7BE] text-center font-bold text-4xl">Liveries</h1>
      <div className="flex flex-row p-6 m-auto">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
          {liveryData.map((livery, index) => (
            <motion.li 
              className="rounded-lg bg-slate-300 dark:bg-[#343434] relative"
              key={index}
              initial= {{ scale: 0.5, opacity: 0 }}
              animate= {{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h1 className="h-16 font-bold text-center text-slate-950 dark:text-[#ADB7BE] p-2">{livery.title}</h1>
              <div className="h-48 mx-2 rounded" style={{backgroundImage: `url(${livery.image})`, backgroundSize: "cover"}}></div>
              <button onClick={() => openChangelog(livery.changelog)} className="absolute bottom-2 right-2 text-slate-950 dark:text-[#ADB7BE] hover:text-neutral-600 dark:hover:text-white underline">
                v{livery.version}
              </button>
              <Link to={livery.download} target="_blank" style={{display: "contents"}}>
                <ArrowDownTrayIcon className="h-10 w-10 pt-2 mx-auto my-2 text-slate-950 dark:text-[#ADB7BE] hover:text-neutral-600 dark:hover:text-white" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
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