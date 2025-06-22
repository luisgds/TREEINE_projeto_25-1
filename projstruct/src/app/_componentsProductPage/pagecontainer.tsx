import { Children } from "react";
import styles from "~/productPageStyles/pagecontainer.module.css"


type Container = React.PropsWithChildren

export function PageContainer({children}:Container){
    return(
        <div className="w-10/10 m-auto flex justify-center flex-col">
            {children}
        </div>
    );
}