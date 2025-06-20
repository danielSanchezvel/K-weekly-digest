import { useState } from "react";
import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const tabs = ["Feature Updates", "SOP", "Internal"];

const updatesData = {
  "Feature Updates": {
    "June 2025": {
      "Week of June 17–23": [
        {
          title: "💻 Partner Developer Sites",
          description:
            "Sandbox Sites to show a potential signup what is capable on Kajabi/what their business could look like",
          link: "https://kajabi.atlassian.net/wiki/spaces/CXHOME/pages/2904358996",
        },
        {
          title: "📃 Community Custom Page Picker",
          description:
            "An improvement to pick any page from your website for embebeding to your Community - Not launched yet",
          link: "https://help.kajabi.com/hc/en-us/articles/9959624056219-How-to-Add-a-Custom-Page-to-Your-Community",
        },
        {
          title: "💰 Community Upsell Banner",
          description:
            "Customizable Offer Banner within Kajabi Communities. This feature allows Heroes to promote their offers directly in the community’s right sidebar",
          link: "https://help.kajabi.com/hc/en-us/articles/38055529679643-How-to-Add-Offers-in-Kajabi-Communities",
        },
      ],
      "Week of June 10–16": [
        {
          title: "📩 Email Builder Enhancements",
          description:
            "New blocks for countdown timers, testimonials, and personalized offers.",
          link: "https://kajabi.com/email-enhancements",
        },
      ],
    },
  },
  SOP: {
    "June 2025": {
      "Week of June 17–23": [
        {
          title: "📝 Handling Hero Inquiries Received via Kajabi Work Email",
          description:
            "Do not reply to a Hero throught your Kajabi email. Create a new ticket and reply there.",
          link: "https://kajabi.atlassian.net/wiki/spaces/SUP/pages/3045195845/Handling+Hero+Inquiries+Received+via+Kajabi+Work+Email",
        },
      ],
    },
  },
  Internal: {
    "June 2025": {
      "Week of June 17–23": [
        {
          title: "📣 Ack your Team leads",
          description:
            "When a team lead shares a message, it's crucial to acknowledge it so we know you've received and reviewed it.",
          link: "#",
        },
        {
          title: "📊 Proactively report no activity",
          description:
            "After 20 minutes of no activity, let your team know so they can request a change of queue or assing you projects",
          link: "#",
        },
      ],
    },
  },
};

export default function KajabiWeeklyDigest() {
  const [activeTab, setActiveTab] = useState("Feature Updates");
  const [openMonth, setOpenMonth] = useState(null);
  const [openWeek, setOpenWeek] = useState(null);

  const data = updatesData[activeTab];

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 p-6 text-gray-800'>
      <div className='max-w-4xl mx-auto'>
        <BlurText
          text='Kajabi Weekly Digest!'
          delay={150}
          animateBy='words'
          direction='top'
          onAnimationComplete={handleAnimationComplete}
          className='text-4xl font-extrabold mb-8 text-center text-blue-900'
        />
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
