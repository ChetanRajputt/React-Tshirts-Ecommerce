import React from "react";

const AccountSidebar = ({ active, onNavigate }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "orders", label: "My Orders" },
    { id: "profile", label: "Profile Settings" },
    { id: "addresses", label: "Manage Addresses" },
    { id: "logout", label: "Logout" },
  ];

  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg shadow-md md:w-1/4">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`py-2 px-4 cursor-pointer rounded-lg ${
              active === item.id
                ? "bg-[#F4295B] text-white"
                : "hover:bg-blue-100 text-pink-700"
            }`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountSidebar;
