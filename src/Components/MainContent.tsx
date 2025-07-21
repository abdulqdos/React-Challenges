import AppSideMenu from "./AppSideMenu";
import Body from "./Body";


export default function MainContent() {
    const showCategory = false ;
    return (
        <div className="mx-10 mt-4 flex lg:flex-row flex-col flex-grow items-center justify-center">
           <div className="flex-3/4">
               <Body  />
           </div>
           <div className="flex-1/4"> 
                <AppSideMenu showCategory={showCategory} />
            </div>
        </div>
    );
}

