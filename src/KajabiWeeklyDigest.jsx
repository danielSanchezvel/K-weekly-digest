import { useState } from "react";

const data = {
  "June 2025": {
    "Week of June 17–23": [
      {
        title: "🎯 New AI Assistant for Course Creation",
        description:
          "Kajabi now helps auto-generate course outlines based on your topic.",
      },
      {
        title: "🛒 Checkout Page Customization Upgrades",
        description:
          "You can now drag and drop modules in the new visual editor for checkout pages.",
      },
    ],
    "Week of June 10–16": [
      {
        title: "📩 Email Builder Enhancements",
        description:
          "New blocks for countdown timers, testimonials, and personalized offers.",
      },
    ],
  },
};

export default function KajabiWeeklyDigest() {
  const [openMonth, setOpenMonth] = useState(null);
  const [openWeek, setOpenWeek] = useState(null);

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 p-6 text-gray-800'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-extrabold mb-8 text-center text-blue-900'>
          Kajabi Weekly Digest
        </h1>

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
                              {update.title}
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
