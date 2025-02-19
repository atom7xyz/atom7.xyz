/*
 * Text animation for the first part of the page.
 */

const words = ['atom7', 'anton'];
let currentWordIndex = 0;
const title = document.getElementById('changing-title');
const ANIMATION_DELAY = 200;
const TRANSITION_DELAY = 3000;

function getLetterChanges(currentWord, nextWord) 
{
    const maxLength = Math.max(currentWord.length, nextWord.length);
    return Array.from({length: maxLength}, (_, i) => i)
                .filter(i => currentWord[i] !== nextWord[i]);
}

function animateText() 
{
    const currentWord = words[currentWordIndex];
    const nextWord = words[(currentWordIndex + 1) % words.length];
    const currentText = [...currentWord];
    const changes = getLetterChanges(currentWord, nextWord);

    const animateNextLetter = (index = 0) => {
        if (index >= changes.length) {
            currentWordIndex = (currentWordIndex + 1) % words.length;
            return setTimeout(animateText, TRANSITION_DELAY);
        }
        
        const pos = changes[index];
        currentText[pos] = nextWord[pos];
        title.textContent = currentText.join('');
        setTimeout(() => animateNextLetter(index + 1), ANIMATION_DELAY);
    };

    animateNextLetter();
}

setTimeout(animateText, TRANSITION_DELAY);


/* 
 * Click on scroll arrow move to the second part of the page.
 */
const scrollArrow = document.getElementById('scroll-arrow');
const projectsSection = document.getElementById('projects');
if (scrollArrow && projectsSection) {
    scrollArrow.addEventListener('click', () => 
        projectsSection.scrollIntoView({ behavior: 'smooth' })
    );
}

/* 
 *Click on project card redirection.
 */
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    const projectLink = card.querySelector('.project-title a');
    if (projectLink) {
        card.addEventListener('click', () => 
            window.location.href = projectLink.href
        );
    }
});