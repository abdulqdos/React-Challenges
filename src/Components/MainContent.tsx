import Body from "./Body";
import Sidebar from "./Sidebar";

export default function MainContent() {
    return (
        <div className="mx-80 flex lg:flex-row flex-col flex-grow items-center justify-center">
           <div className="flex-3/4">
               <Body  />
           </div>
           <div className="flex-1/4"> 
                <Sidebar />
            </div>
        </div>
    );
}