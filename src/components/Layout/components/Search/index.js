import { faCircleXmark,faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

import AccountItem from '@/components/AccountItem';
import { SearchIcon } from '@/components/Icons';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '@/hooks';


const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 800)
    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return;
        }

        setLoading(true)

      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
      .then(res => res.json())
      .then(res => {
        setSearchResult(res.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })

    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    
    const handleHideResult = () => {
        setShowResult(false)
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => ( /**Render kết quả tìm kiếm */
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result,id) => (
                            <AccountItem key={result.id} data={result} />

                        ))}
                                      
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input 
                ref={inputRef}
                value={searchValue}
                placeholder="Search accounts and videos" 
                spellCheck={false} 
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
                />
                {/* Có search value thì mới hiện X-mark và focus lại vào search bar */}
                {!!searchValue && !loading && (
                <button
                className={cx('clear')} 
                onClick={handleClear}
                >
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
