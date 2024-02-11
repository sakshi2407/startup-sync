import React, { useState } from "react";
import Tabs from "../tabs";
import TeamCard from "../teamcard";
import teamLinks from "@/data/team/team-links";

const CompanySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Company Overview",
      id: 0,
    },
    {
      label: "Team Introduction",
      id: 1,
    },
  ];

  return (
    <div className="p-4 h-[85vh] overflow-hidden">
      <div className="w-[70%] mx-auto">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className=" mx-auto p-4 ">
        {!activeTab ? (
          <div className="grid grid-cols-2 p-4">
            <div className="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                alt="Img"
                className="h-[450px] w-[450px] mx-auto"
              />
            </div>
            <div className="p-4 text-justify text-md tracking-wide flex flex-col gap-5 justify-center text-gray-800">
              <p>
                Startup Sync is not just a platform, it's your dedicated partner in building and managing your startup. Recognizing the challenges entrepreneurs face, we've crafted a user-friendly, all-in-one solution to streamline registration processes and provide essential tools for effective startup management.
              </p>
              <p>
                <span className="text-lg font-semibold text-gray-950">Vision for the Future:</span>
                <p className="mt-3">
                  Our vision for the future is to become the go-to platform for entrepreneurs worldwide. We envision a global community of startups seamlessly connected through Startup Sync, where innovation knows no bounds, and every entrepreneur has the resources and support needed to turn their vision into a successful reality. We aspire to be the catalyst for a new era of entrepreneurial success.
                </p>
              </p>
            </div>
          </div>
        ) : (
          <div className="flex p-6 flex-wrap items-center justify-center ">
            {teamLinks.map((team, index) => {
              return (
                <TeamCard
                  img={team.img}
                  name={team.name}
                  role={team.role}
                  key={index}
                />
              );
            })
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanySection;