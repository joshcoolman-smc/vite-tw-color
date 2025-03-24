import React from "react";

interface PreviewContainerProps {
  children: React.ReactNode;
}

const PreviewContainer: React.FC<PreviewContainerProps> = ({ children }) => {
  return <div className="flex gap-4 p-8 bg-black">{children}</div>;
};

export default PreviewContainer;
