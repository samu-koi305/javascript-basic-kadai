const change_text = document.getElementById('text');
const put_btn = document.getElementById('btn');


put_btn.addEventListener('click', () => {
    change_text.textContent = 'ボタンをクリックしました';
});