import DashboardNav from "@/components/dashboard/nav";
import { ModeToggle } from "@/components/mode-toggle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <main className="container mx-auto py-6 px-4">
        <div className="absolute right-4 top-4">
          <ModeToggle />
        </div>
        {children}
      </main>
    </div>
  );
}