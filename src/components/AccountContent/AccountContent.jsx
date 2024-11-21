import React from "react";

const AccountContent = ({ section }) => {
  // Mock user data (you can replace it with actual dynamic data)
  const user = {
    avatar: "https://via.placeholder.com/100", // Replace with user avatar URL
    name: "John Doe",
    email: "john.doe@example.com",
  };

  // Content for each section
  const content = {
    dashboard: (
      <div>
        <p className="mb-2">Welcome back, {user.name}!</p>
        <p>
          Here you can view your recent activity, track orders, and manage your
          profile.
        </p>
      </div>
    ),
    orders: (
      <div>
        <p className="mb-4">
          Here are your recent orders. You can view order details or reorder
          items.
        </p>
        <ul className="ml-6 list-disc">
          <li>
            Order #1234 - <span className="text-green-600">Delivered</span>
          </li>
          <li>
            Order #5678 - <span className="text-yellow-600">Processing</span>
          </li>
          <li>
            Order #91011 - <span className="text-red-600">Cancelled</span>
          </li>
        </ul>
      </div>
    ),
    profile: (
      <div>
        <p className="mb-4">Update your personal details below:</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              defaultValue={user.name}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              defaultValue={user.email}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    ),
    addresses: (
      <div>
        <p className="mb-4">Manage your saved addresses below:</p>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <p className="font-medium">Home Address</p>
            <p>123 Main Street, Springfield</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-medium">Work Address</p>
            <p>456 Elm Street, Metropolis</p>
          </div>
          <button className="px-4 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700">
            Add New Address
          </button>
        </div>
      </div>
    ),
    logout: (
      <div>
        <p className="text-red-600">You have been logged out successfully.</p>
      </div>
    ),
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md md:w-3/4">
      {/* User Info */}
      <div className="flex items-center mb-6 space-x-4">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      {/* Section Content */}
      <h2 className="mb-4 text-2xl font-semibold capitalize">{section}</h2>
      {content[section] || <p>Select an option from the sidebar.</p>}
    </div>
  );
};

export default AccountContent;
