import Sidebar from "./Sidebar";

export default function AppSideMenu({showCategory = false}) {
    console.log("AppSideMenu rendered with showCategory:", showCategory);
  if (showCategory) {
    return <Sidebar />;
  } else {
    return null ;
  }
}
