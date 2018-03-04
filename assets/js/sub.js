(function ($) {

    const currentSelected = 'current';
    const tabs = document.getElementById('tabs').children;

    const forTab = (func) => {
        for (const li of tabs) {
            const tab = li.children[0].children[0];
            func(tab);
        }
    };

    const replaceTabContent = (tabName) => {
        // document.getElementById('work-image').setAttribute('src', `images/${tabName}.jpg`);
        const textDiv = document.getElementById('work-text');
        textDiv.children[0].textContent = 'Hello';
        textDiv.children[1].textContent = 'Hello2';
    };

    const deactiveTabs = () => {
        forTab((tab) => {
            tab.classList.remove(currentSelected);
        });
    };

    const addHighlightEffect = (tab) => {
        tab.onclick = (evt) => {
            evt.preventDefault();
            deactiveTabs();
            evt.target.classList.add(currentSelected);

            // TODO replace content
            replaceTabContent('');
            console.log('happened3');
        };
    };

    forTab(addHighlightEffect);

    // document.getElementById('seltab').onclick = (evt) => {
    //     // evt.target.addd
    //     evt.preventDefault();
    //     evt.target.classList.add(currentSelected);

    //     // TODO replace content
    //     console.log('happened2');
    // };

})(jQuery);