const workContent = {
    workiva: [
        'I developed features on a spreadsheets web application using Dart Language to improve functionality',
        'I integrated application with other critical internal services using Go Language',
        'I implemented major user-experience improvements, coordinating closely with UX resources',
    ],
    'isu-gdcb': [
        'I developed web interfaces using technologies like Django, for command line tools developed by the GDC Biology Department',
    ],
    'isu-dor': [
        'I assist students in adjusting to campus living',
    ],
};

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
        textDiv.innerHTML = '';
        const ul = document.createElement('ul');
        for (const line of workContent[tabName]) {
            const li = document.createElement('li');
            li.innerHTML = line;
            ul.appendChild(li);
        }
        textDiv.appendChild(ul);
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
            replaceTabContent(tab.dataset.name);
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