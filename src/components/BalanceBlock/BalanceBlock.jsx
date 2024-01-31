import React from "react";
import './BalanceBlock.scss';
const BalanceBlock = () => {

    return (<>
    <div className="balance-block">
        <h3>Ваш баланс - {}100 $</h3>
        <h3>Баллы - {}760</h3>
        <p>Курс (1.000 сум = 19 баллов)</p>
    </div>    
    </>)
}

export default BalanceBlock;