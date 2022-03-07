import React from 'react';

const ModalWrapper: React.FC = ({ children }) => (
  <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center p-4">
    <div className="absolute bg-black opacity-50 w-full h-full">
    </div>
    <div className="relative bg-white rounded p-4 shadow w-[600px]">
      {children}
    </div>
  </div>
);

export default ModalWrapper;
