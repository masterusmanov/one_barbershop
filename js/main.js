var currentYear = document.querySelector("#currentYear");
const languageSelector = document.getElementById('languageSelector');
const contentRus = document.getElementById('content-rus');
const contentUz = document.getElementById('content-uzb');
const contentEng = document.getElementById('content-eng');

       

currentYear.innerHTML = new Date().getFullYear()

contentUz.style.display = 'none';
contentEng.style.display = 'none';


languageSelector.addEventListener('change', function () {
    const selectedLanguage = languageSelector.value;
        

    // Show/hide content based on the selected language
    if (selectedLanguage === 'rus') {
        contentRus.style.display = 'block';
        contentUz.style.display = 'none';
        contentEng.style.display = 'none';
    } else if (selectedLanguage === 'uzb') {
        contentUz.style.display = 'block';
        contentRus.style.display = 'none';
        contentEng.style.display = 'none';
    } else if( selectedLanguage === 'eng'){
        contentEng.style.display = 'block';
        contentUz.style.display = 'none';
        contentRus.style.display = 'none';
    }
});
