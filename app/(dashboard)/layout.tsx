import "@/styles/global.css";

import GlassPane from "@/components/atoms/GlassPane/component";
import Sidebar from "@/components/organisms/Sidebar/component";

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <Sidebar />
        <GlassPane className="glass w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
