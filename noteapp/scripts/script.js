const addnotebutton = document.querySelector('.add');
const backbutton = document.querySelector('.back');
export const completebutton = document.querySelector('.complete');

export const notelistpage = document.querySelector('#notelistpage');
export const addnotepage = document.querySelector('#addNotePage');

export const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

export const titleinput = document.querySelector('input[name="noteTitle"]');
export const contentinput = document.querySelector('textarea[name="noteContent"]');

export const notelist = document.querySelector('.notelist');


// 저장된 노트 불러오기
document.addEventListener('DOMContentLoaded', loadnote);


// 노트 로드
export function loadnote() {

    notelist.innerHTML = '';

    savedNotes.forEach(function (note) {
        
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');

        const p = document.createElement('p');
        p.classList.add('notep');
        p.textContent = note.title;

        noteDiv.appendChild(p);
        notelist.appendChild(noteDiv);
    });
}

// 페이지 전환 버튼
addnotebutton.addEventListener('click', function () {
    notelistpage.style.display = 'none';
    addnotepage.style.display = 'block';
})

backbutton.addEventListener('click', function () {
    notelistpage.style.display = 'block';
    addnotepage.style.display = 'none';
})
