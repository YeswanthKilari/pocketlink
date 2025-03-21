import { createContext, useState } from "react";
import { ChevronLast, ChevronFirst, Home, User, LayoutDashboard, LogOut, Save } from "lucide-react";
import SidebarItem from "./SidebarItem"; // Ensure SidebarItem exists
import { motion } from "framer-motion";
import Dashboard1 from "./Dashboard1"; // Importing Dashboard1
import Card from "./Card";



// ✅ Export SidebarContext
export const SidebarContext = createContext();

export default function DashboardLayout({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [showCollections, setShowCollections] = useState(false); // Toggle state for Dashboard1
  const [collections, setCollections] = useState([]); // Global state



  return (
    <SidebarContext.Provider value={{ expanded }}>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className={`h-screen transition-all duration-300 bg-gray-800 text-white ${expanded ? "w-60" : "w-16"}`}>
          <nav className="h-full flex flex-col border-r shadow-sm">
            <div className="p-4 pb-2 flex justify-between items-center">
              <h1 className={`font-bold text-md overflow-hidden transition-all ${expanded ? "w-40" : "w-0"}`}>
                {/* PocketLink */}
              </h1>
              <button
                onClick={() => setExpanded((curr) => !curr)}
                className="p-1 rounded-lg bg-gray-700 hover:bg-gray-600"
              >
                {expanded ? <ChevronFirst /> : <ChevronLast />}
              </button>
            </div>

            <ul className="flex-1 px-3 space-y-2">
              <SidebarItem icon={<Home />} text="Home" />
              <SidebarItem icon={<LayoutDashboard />} text="Categories" />
              <SidebarItem icon={<Save />} text="Saved" />
              <SidebarItem icon={<User />} text="Profile" />
              <SidebarItem icon={<LogOut />} text="Logout" />
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          <header className="bg-gray-800 shadow-md py-3 px-8 flex justify-between items-center text-white">
            {/* Left Side: Dashboard Title */}
            <h1 className="font-semibold text-lg">PocketLink</h1>

            {/* Right Side: Menu Items */}
            <div className="flex items-center space-x-6">
              {/* Navigation Links */}
              <nav className="flex space-x-6">
                <a href="#" className="text-gray-200 hover:text-white">Home</a>
                <a href="#" className="text-gray-200 hover:text-white">Dashboard</a>
                <a href="#" className="text-gray-200 hover:text-white">My Collections</a>
              </nav>

              {/* Share Button */}
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                Share
              </button>

              {/* Profile Icon */}
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <User className="w-5 h-5 text-gray-700" />
              </div>
            </div>
          </header>

          {/* Content Area */}
          <main className="p-6 bg-gray-950 flex-1">
            <div className="p-4 flex justify-between items-center bg-gray-650">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-medium">
                Total Resources Saved: {collections.length}
              </span>
              {/* Show Dashboard1 when button is clicked */}
              <button
                onClick={() => setShowCollections(true)}
                className="text-white text-sm hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md transition duration-200"
              >
                + Create Collection
              </button>
            </div>

            {/* White Separator Line */}
            <hr className="border-t border-gray-500" style={{ borderTopWidth: "0.1px" }} />

            {/* Display Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {collections.map((collection, index) => (
                <Card
                  key={index}
                  title={collection.name}
                  link={collection.link}
                  type="youtube" // Assuming YouTube links for now; you can modify this dynamically
                />
              ))}
            </div>

            {/* Show Dashboard1 when creating a new collection */}
            {showCollections && (
              <Dashboard1
                setShowCollections={setShowCollections}
                setCollections={setCollections}
                collections={collections}
              />
            )}
          </main>
        </div>
      </div>
    </SidebarContext.Provider>
  );
}
