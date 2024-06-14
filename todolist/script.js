const addForm = document.querySelector('.add');
const alertmsg = document.getElementById('alertmsg');
const list = document.querySelector('.memos');


// todolist 작성
const saveMemo = memotext => {
    const html = `<li 
        class="item">
            <input type="checkbox" class="checkbox">
            <span class="memotext">${memotext}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`

    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const memo = addForm.add.value;

    // 비어있는 내용 방지
    if (memo.length) {
        saveMemo(memo);
        alertmsg.classList.add('hidden');
        addForm.add.value = "";
    }

    else {
        alertmsg.classList.remove('hidden');
    }
})



list.addEventListener('click', e => {
    // todolist 삭제
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }

    // todolist 수정
    else if (e.target.classList.contains('memotext')) {
        const spanElement = e.target;
        const currentText = spanElement.textContent;
        
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.value = currentText;
        spanElement.replaceWith(inputElement);

        const onEnterHandler = (event) => {
            if (event.key === 'Enter') {
                const newText = inputElement.value;

                // 비어있는 내용 방지
                if (newText.trim() === '') {
                    alert('내용을 작성해주세요');
                } else {
                    const newSpanElement = document.createElement('span');
                    newSpanElement.classList.add('memotext');
                    newSpanElement.textContent = newText;
                    inputElement.replaceWith(newSpanElement);

                    inputElement.removeEventListener('keypress', onEnterHandler);
                }
            }
        };

        inputElement.focus();
        inputElement.addEventListener('keypress', onEnterHandler);

    }

    // todolist 완료버튼
    else if (e.target.classList.contains('checkbox')) {
        const memoItem = e.target.closest('.item');
        memoItem.classList.toggle('complete');
    }
})
