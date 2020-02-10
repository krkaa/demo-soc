import React, {useState, useEffect} from 'react';
import styles from './Paginator.module.sass';
import cn from "classnames";

let Paginator = ({totalItemsCount, pageSize, currentPage, onChangePage, portionSize = 10, ...props}) => {

    let pageCount = Math.ceil(totalItemsCount / pageSize);

    let page = [];
    for (let i = 1; i <= pageCount; i++) {
        page.push(i);
    }
    ;

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        <div className={styles.paginators}>
            {/*{
                page.slice(maxSize1.currentPage, maxSize2.currentPage).map(p => {
                    return <span className={currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     onChangePage(p)
                                 }}>{p}</span>
                })
            }*/}
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>prev</button>}
            {
                page.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span className={ cn({
                            [styles.selectedPage]: currentPage === p
                        }, styles.pageNumber)}
                                     key={p}
                                     onClick={(e) => {
                                         onChangePage(p)
                                     }}>{p}</span>
                    })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1);
            }}>next</button>}

        </div>
    </div>
};

export default Paginator;