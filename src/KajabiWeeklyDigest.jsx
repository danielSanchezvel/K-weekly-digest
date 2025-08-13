import { useState } from "react";
import BlurText from "./BlurText";
import { updatesData } from "./updatesData";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const tabs = ["Feature Updates", "SOP"];

export default function KajabiWeeklyDigest() {
  const [activeTab, setActiveTab] = useState("Feature Updates");
  const [openMonth, setOpenMonth] = useState(null);
  const [openWeek, setOpenWeek] = useState(null);

  const data = updatesData[activeTab];

  return (
    <div className='min-h-screen color-ange p-6 text-gray-800'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex justify-center mb-6 space-x-3'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenMonth(null);
                setOpenWeek(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow-md backdrop-blur-md transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white/40 text-blue-800 hover:bg-white/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {Object.entries(data).map(([month, weeks]) => (
          <div key={month} className='mb-6'>
            <button
              onClick={() => setOpenMonth(openMonth === month ? null : month)}
              className='w-full text-left px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-blue-800 font-semibold rounded-xl shadow-md hover:bg-white/30 transition'
            >
              {month}
            </button>

            {openMonth === month && (
              <div className='mt-2 space-y-3 pl-4'>
                {Object.entries(weeks).map(([week, updates]) => (
                  <div key={week}>
                    <button
                      onClick={() =>
                        setOpenWeek(openWeek === week ? null : week)
                      }
                      className='w-full text-left px-5 py-2 bg-white/20 backdrop-blur-md border border-white/20 text-blue-700 rounded-lg hover:bg-white/30'
                    >
                      {week}
                    </button>

                    {openWeek === week && (
                      <div className='mt-2 ml-4 space-y-3'>
                        {updates.map((update, idx) => (
                          <div
                            key={idx}
                            className='bg-white/30 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-md'
                          >
                            <h3 className='font-semibold text-lg text-blue-900'>
                              <a
                                href={update.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='underline hover:text-blue-700'
                              >
                                {update.title}
                              </a>
                            </h3>
                            <p className='text-sm text-gray-700 mt-1'>
                              {update.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
