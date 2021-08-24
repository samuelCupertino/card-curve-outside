const button_dark = document.querySelector('.change_button_dark')
const button_ligth = document.querySelector('.change_button_ligth')
const show = document.querySelectorAll('.show')
const hide = document.querySelectorAll('.hide')


const changeCssDark = () => {
    document.querySelector('body').classList.add('body_dark')
    document.querySelector('body').classList.remove('body_ligth')

    for (let i = 0; i < show.length; i++) {
        show[i].style.backgroundColor = 'rgb(14 14 14)'
        show[i].style.color = '#fff'
        show[i].style.transition = '.9s'
    
        hide[i].style.backgroundColor = 'rgb(14 14 14)'
        hide[i].style.color = '#fff'
        hide[i].style.borderTop = 'solid 1px #fff'
        hide[i].style.transition = '.9s'
    }

    button_dark.style.display = 'none';
    button_ligth.style.display = 'block';
}

const changeCssLigth = () => {
    document.querySelector('body').classList.add('body_ligth')
    document.querySelector('body').classList.remove('body_dark')

    for (let i = 0; i < show.length; i++) {
        show[i].style.backgroundColor = '#fff'
        show[i].style.color = '#000'
        show[i].style.transition = '.9s'
    
        hide[i].style.backgroundColor = '#fff'
        hide[i].style.color = '#000'
        hide[i].style.transition = '.9s'
    }

    button_dark.style.display = 'block';
    button_ligth.style.display = 'none';
}


button_dark.addEventListener('click', () => changeCssDark() )

button_ligth.addEventListener('click', () => changeCssLigth())