import { completebutton, notelistpage, addnotepage, savedNotes, titleinput, contentinput } from './script.js';
import { loadnote } from './script.js';

// 노트 생성
completebutton.addEventListener('click', function () {    
    savenote();

    notelistpage.style.display = 'block';
    addnotepage.style.display = 'none';
})

// 노트 저장
function savenote() {
    const title = titleinput.value;
    const content = contentinput.value;
  
    // 빈 제목 경고
    if (title.length == 0) {
        alert('제목을 작성해주세요.')
    }
    
    else {
        let duplicate = false;

        // 노트 본문 수정
        savedNotes.forEach(note => {
            if (note.title === title) {
                console.log(note.title, note.content);
                note.title = titleinput.value;
                note.content = contentinput.value;

                duplicate = true;
            }
        });

        // 로컬 스토리지에 저장
        if (!duplicate) {
            const noteKey = 'note_' + Date.now();
    
            savedNotes.push({ key: noteKey, title: title, content: content });
            localStorage.setItem('notes', JSON.stringify(savedNotes));
    
            loadnote();

        }

        titleinput.value = "";
        contentinput.value = "";
    }
}


