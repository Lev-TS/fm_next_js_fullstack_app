import "@/styles/global.css";

import GlassPane from "@/components/atoms/GlassPane/component";
import Sidebar from "@/components/organisms/Sidebar/component";

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="glass w-full h-full flex items-center justify-center p-3">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
