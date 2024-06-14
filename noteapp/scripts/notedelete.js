import { notelistpage, addnotepage, savedNotes, titleinput, contentinput, notelist } from './script.js';
import { loadnote } from './script.js';

const removebutton = document.querySelector('.remove');

// 노트 열기
notelist.addEventListener('click', function (e) {
    if (e.target.classList.contains('note') || e.target.classList.contains('notep')) {

        notelistpage.style.display = 'none';
        addnotepage.style.display = 'block';

        savedNotes.forEach(function (note) {
            if (note.title === e.target.textContent) {
                titleinput.value = note.title;
                contentinput.value = note.content;
            }
        });

        // 노트 삭제
        removebutton.addEventListener('click', function () {

            savedNotes.forEach(function (note, index) {
                if (note.title === e.target.textContent) {
                    savedNotes.splice(index, 1);

                    titleinput.value = "";
                    contentinput.value = "";
                }
            })
            
            notelistpage.style.display = 'block';
            addnotepage.style.display = 'none';

            loadnote();
        });
        
    }
})
