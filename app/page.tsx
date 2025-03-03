"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/2 h-48 md:h-auto relative">
        <Image
          src="/main-banner.jpg"
          alt="Main Banner"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex items-center justify-center w-full md:w-1/2 p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Login
          </h2>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full border-b border-gray-400 p-2 focus:outline-none focus:border-blue-500 bg-transparent"
            />
          </div>

          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border-b border-gray-400 p-2 focus:outline-none focus:border-blue-500 bg-transparent"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <Icon
                icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                className="w-5 h-5"
              />
            </button>
          </div>

          <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
