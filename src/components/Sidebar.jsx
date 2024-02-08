import React, { useState } from 'react';


const Sidebar = () => (
  <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src="#" alt="logo" className="w-full h-14 object-contain" />
       
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
       
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition`}>
        <img src="#"alt="logo" className="w-full h-14 object-contain" />
       
      </div>
    </>
);

export default Sidebar;
