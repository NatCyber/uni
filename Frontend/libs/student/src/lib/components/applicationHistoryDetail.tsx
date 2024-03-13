import React, { useState } from "react";
import styles from '../student.module.css';

interface Props{
    applicationDate: string ;
    applicationStatus: string | null;
    applicationNumber: string | number;
    enrolled: string;
    stream: string;
    term: string;
    className: string;
}

const ApplicationHistoryDetail = (props: Props) =>{
    const {applicationDate, applicationStatus, applicationNumber, enrolled, stream,term, className } = props;
    const [status, setStatus] = useState<string>('Accepted'); 
    return(    
        <div>
        <div>
        {/* <div className={styles['application-history-detail-header']}> */}
                <span className={styles['applicationDate']}>{applicationDate}</span>
                <div className={status == 'Rejected' ? 'rejected-style' : status == 'Accepted' ? 'accepted-style' : status == 'Pending' ? 'pending-style' : ""}>
                    <span>{applicationStatus}</span>
                </div>
        </div>
            
            <div className={styles['application-history-detail-body']}>
                <div>
                    <p className={styles['application-history-title']}>Application Number</p>
                    <span>{applicationNumber}</span>
                </div>
                <div>
                    <p>Enrolled</p>
                    <span>{enrolled}</span>
                </div>
                <div>
                    <p>Stream</p>
                    <span>{stream}</span>
                </div>
                <div>
                    <p>Term</p>
                    <span>{term}</span>
                </div>
            </div>
        </div>
        // <div className={styles['application-history-detail-container']}>
            
        
        // </div>
        
        
    )
}

export default ApplicationHistoryDetail;