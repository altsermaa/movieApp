"use client";

import { Mail, Phone, Film } from "lucide-react";
import { useTheme } from "next-themes";

export const Footer = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div
      className={`w-screen ${
        resolvedTheme === "light"
          ? "bg-[#4339c7] text-white"
          : "bg-white text-black"
      }`}
    >
      <div className={`w-[1280px] m-auto py-10 flex justify-between`}>
        <div>
          <div
            className={` flex gap-2 font-black ${
              resolvedTheme === "light" ? "text-white" : "text-[#4339c7]"
            }`}
          >
            <Film />
            <h1>Movie Z</h1>
          </div>
          <div>© 2024 Movie Z. All Rights Reserved.</div>
        </div>
        <div className="flex gap-24">
          <div className="flex">
            <div className="flex flex-col">
              <h3>Contact information</h3>
              <div className="flex gap-3 mt-3 mb-6">
                <Mail />
                <div className="flex flex-col">
                  <p>Email:</p>
                  <p>support@movieZ.com</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone />
                <div className="flex flex-col">
                  <p>Phone:</p>
                  <p>+(976) 11 123-4567</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col">
            <h3>Follow us</h3>
            <div className="flex gap-3 font-bold">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
