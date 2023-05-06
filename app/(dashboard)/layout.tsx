
import '@/styles/global.css';
import GlassPane from "@/components/GlassPane";
export default function DashboardRootLayout({children}) {
    return (
        <html>
            <head/>
            <body className="h-screen q-screen rainbow-mesh p-6">
                <GlassPane className="w-full h-full flex items-center justify-center">
                {children}
                </GlassPane>
            </body>
        </html>
    )
}