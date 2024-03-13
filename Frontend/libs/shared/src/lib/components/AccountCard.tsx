import React from "react";
import styles from '../shared.module.css';

interface Props {
    key?: number;
    usericon?: any;
    dropicon?: any;
    accountRole?: string;
    accountUser?: string;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const AccountCard = (props: Props) => {

// console.log(accountRole)


    const { key, accountRole, accountUser, dropicon, usericon, onClick, className } = props;
    //console.log(accountRole)
    return (
        <div
            key={key}
            className={className}
        >

            <div className={styles["icon-container"]}> {usericon}</div>
            <div className={styles["accountCard-content"]}>
                <h1> {accountRole} </h1>
                <span>{accountUser}</span>
            </div>
            <div className={styles["icon-container"]} onClick={onClick}> {dropicon}</div>
        </div>
    );

};

export default AccountCard;