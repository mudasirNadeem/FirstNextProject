import CustomerPage from "../compunent/customer/customer";
import SideNav from "../sidenav";

export default function customer() {
  return (
    <div className="flex">
  <SideNav />
  <CustomerPage />
    </div>
)
}