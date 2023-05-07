
import '@/styles/global.css';
import GlassPane from "@/components/GlassPane";
import Sidebar from '@/components/Sidebar';
export default function DashboardRootLayout({children}) {
    return (
        <html>
            <head/>
            <body className="h-screen q-screen rainbow-mesh p-6">
                <GlassPane className="w-full h-full flex items-center">
                    <Sidebar/>
                {children}
                </GlassPane>
                <div id="modal"></div>
            </body>
        </html>
    )
}