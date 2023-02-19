import React from "react";

interface ApplicationLayoutProps {
  children: React.ReactNode;
}

export default function ApplicationLayout({
  children,
}: ApplicationLayoutProps) {
  return (
    <div>
      <h1>Application</h1>
      {children}
    </div>
  );
}
