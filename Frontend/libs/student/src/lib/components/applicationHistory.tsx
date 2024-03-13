import { HistoryStatusCard } from "@egst.frontend/shared";

import styles from '../student.module.css';
import ApplicationHistoryMenu from "./applicationHistoryMenu";
import ApplicationHistoryDetail from "./applicationHistoryDetail";

// const applicationhistory = {
//     appDate = "",

// }

const ApplicationHistory = () => {
    return (
        <div className={styles['application']}>
            <div className={styles['application-container']}>
                {/* <div className={styles['application-stage']}>
                <h4> Application History </h4>
                    <ApplicationHistoryMenu/>
                    
                </div> */}
                {/* //.......................... */}
                <div style={{ minWidth: '70%', marginTop: '20px' }}>
                    <ApplicationHistoryMenu />
                </div>
                {/* ............... Application Detail  ............. */}
                {/* <div>
                    <h2>Application History</h2>
                    <div>
                        <ApplicationHistoryDetail 
                        applicationDate={"Dec 11, 2023"} 
                        applicationStatus={"APGD"} 
                        applicationNumber={"12ET345"} 
                        enrolled={"PGD"} 
                        stream={"Full time"} 
                        term={"Summer- 2023"}
                        className={styles['history-card-content-date']}/>
                    </div>
                    
                </div> */}
            </div>

        </div>
    )

}

export default ApplicationHistory;