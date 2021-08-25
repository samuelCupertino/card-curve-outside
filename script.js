const toggleTheme = areaBtnEl => {
    const arrIconEl = areaBtnEl.querySelectorAll('i.icon') 
    arrIconEl.forEach(e => e.classList.toggle('current'))
    document.body.classList.toggle('dark')
}
