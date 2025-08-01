import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import { Gem, Sparkle } from "lucide-react";
import { Protect } from "@clerk/clerk-react";
import CreationItem from "../components/CreationItem";

const Dashboard = () => {
  const [creation, setCreation] = useState([]);

  const getDashboardData = async () => {
    setCreation(dummyCreationData);
  };
  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">
        {/* Total Creations */}
        <div
          className="flex justify-between items-center w-72 p-4 px-8 bg-white
        rounded-xl border border-gray-200 "
        >
          <div className="text-slate-600">
            <p className="text-sm font-medium">Total Creations</p>
            <h2 className="text-xl font-semibold">{creation.length}</h2>
          </div>
          <div
            className="bg-gradient-to-br from-[#3588F2] to-[#0BB0D7]
           w-10 h-10 rounded-lg text-white flex items-center justify-center"
          >
            <Sparkle className="w-5 text-white" />
          </div>
        </div>
        {/* Active plan */}
        <div
          className="flex justify-between items-center w-72 p-4 px-8 bg-white
        rounded-xl border border-gray-200 "
        >
          <div className="text-slate-600">
            <p className="text-sm font-medium">Active Plan</p>
            <h2 className="text-xl font-semibold">
              <Protect plan="premium" fallback="Free">
                Premium
              </Protect>
            </h2>
          </div>
          <div
            className="bg-gradient-to-br from-[#FF61C5] to-[#9E53EE]
           w-10 h-10 rounded-lg text-white flex items-center justify-center"
          >
            <Gem className="w-5 text-white" />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <p className="mt-6 mb-4">Recent Creations</p>
        {creation.map((item) => (
          <CreationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
