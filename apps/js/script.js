// BurgerBtn Animation
const button = document.querySelector('.nav__burgerBtn');
const lines = document.querySelectorAll('.nav__burgerBtn div')
const list = document.querySelector('.nav__lists')

lines.forEach(line => {
    // Add event
    button.addEventListener('click', () => {
        if (!line.classList.contains('toggle')) {
            line.classList.add('toggle')
            line.style.transition = 'all 0.2s ease-in-out'
            list.style.height = '100%'
        } else {
            line.classList.remove('toggle')
            list.style.height = '0'
        }
    })
})
