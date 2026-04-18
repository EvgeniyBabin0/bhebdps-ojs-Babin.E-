const editor = document.getElementById('editor');
const storageKey = 'editorText';

function loadEditorValue() {
  const savedText = localStorage.getItem(storageKey);

  if (savedText !== null) {
    editor.value = savedText;
  }
}

function handleEditorInput() {
  localStorage.setItem(storageKey, editor.value);
}

loadEditorValue();

editor.addEventListener('input', handleEditorInput);