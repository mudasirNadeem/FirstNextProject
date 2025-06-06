import Dashboard from "../compunent/dashboard/dashboard";
import SideNav from "../sidenav";

export default function DashboardPage() {
  return (
    <div className="flex">
  <SideNav />
  <Dashboard />
    </div>
)
}