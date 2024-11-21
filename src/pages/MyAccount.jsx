import React, { useState } from "react";
import AccountSidebar from "../components/AccountSidebar/AccountSidebar";
import AccountContent from "../components/AccountContent/AccountContent";

const MyAccount = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="container p-6 mx-auto">
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Sidebar */}
        <AccountSidebar active={activeSection} onNavigate={setActiveSection} />

        {/* Content Area */}
        <AccountContent section={activeSection} />
      </div>
    </div>
  );
};

export default MyAccount;
