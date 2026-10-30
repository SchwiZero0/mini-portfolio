const tabs = [...document.querySelectorAll('[role="tab"]')];

function activateTab(tab) {
    tabs.forEach(item => {
        const selected = item === tab;
        item.classList.toggle('select', selected);
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
        document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', event => {
        let nextIndex;
        switch (event.key) {
            case 'ArrowRight': nextIndex = (index + 1) % tabs.length; break;
            case 'ArrowLeft': nextIndex = (index - 1 + tabs.length) % tabs.length; break;
            case 'Home': nextIndex = 0; break;
            case 'End': nextIndex = tabs.length - 1; break;
            default: return;
        }
        event.preventDefault();
        activateTab(tabs[nextIndex]);
        tabs[nextIndex].focus();
    });
});
