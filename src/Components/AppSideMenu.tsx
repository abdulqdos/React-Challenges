import Sidebar from "./Sidebar";

export default function AppSideMenu({showCategory = false}) {
    return showCategory ? <Sidebar /> : null;  
}
