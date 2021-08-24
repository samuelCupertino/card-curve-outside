const toggleTheme = areaBtnEl => {
    const iconCurEl = areaBtnEl.querySelector('i.icon.current') 
    const iconNewEl = areaBtnEl.querySelector('i.icon:not(.current)') 
    iconCurEl.classList.remove('current')
    iconNewEl.classList.add('current')
    document.body.classList.toggle('dark')
}