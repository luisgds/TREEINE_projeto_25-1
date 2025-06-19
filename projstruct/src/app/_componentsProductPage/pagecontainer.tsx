import { Children } from "react";
import styles from "~/productPageStyles/pagecontainer.module.css"


type Container = React.PropsWithChildren

export function PageContainer({children}:Container){
    return(
        <div className={styles.Container}>
            {children}
        </div>
    );
}