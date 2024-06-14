import { notelist } from './script.js';
const search = document.querySelector('input[name="search"]');

search.addEventListener('keyup', e => {
    const searchText = search.value;
    filterMemo(searchText);
})

const filterMemo = memo => {
    
    Array.from(notelist.querySelectorAll('.note'))
        .filter((memotext) => !memotext.textContent.includes(memo))
        .forEach((memotext) => memotext.classList.add('filtered'));
    
    Array.from(notelist.querySelectorAll('.note'))
        .filter((memotext) => memotext.textContent.includes(memo))
        .forEach((memotext) => memotext.classList.remove('filtered'));
}
