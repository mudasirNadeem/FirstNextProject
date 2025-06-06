import Invoice from "../compunent/invoice/invoice";
import SideNav from "../sidenav";

export default function InvocePage() {
  return <>
  <div className="flex">
    <SideNav />
    <Invoice />
  </div>
  </>
}