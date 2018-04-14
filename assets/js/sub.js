const workContent = {
    workiva: {
        name: 'Workiva Inc.',
        position: 'Software Engineering Intern',
        date: 'May 2017 - August 2017',
        tasks: [
            'Developed features on a spreadsheets web application using Dart Language',
            'Integrated application with other critical internal services using Go Language',
            'Implemented major user-experience improvements, coordinating closely with UX resources',
        ],
    },
    'isu-gdcb': {
        name: 'Iowa State University - Genetics, Development & Cell Biology Department',
        position: 'Full-Stack Web Developer & Research Assistant',
        date: 'August 2016 – May 2017',
        tasks: [
            'Developed web interfaces using technologies like Django, for command line tools developed by the GDC Biology Department',
        ],
    },
    'isu-dor': {
        name: 'Iowa State University - Department of Residence',
        position: 'Community Advisor (Resident Assistant)',
        date: 'August 2017 – May 2018',
        tasks: [
            'Assisted students in adjusting to campus living',
        ],
    },
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
        document.getElementById('work-image').setAttribute('src', `images/${tabName}.jpg`);
        const textDiv = document.getElementById('work-text');
        textDiv.innerHTML = `
        <strong><p class='no-margin align-left'>${workContent[tabName].name}</p></strong>
        <p class='no-margin align-left'>${workContent[tabName].position}</p>
        <p class='align-left'>${workContent[tabName].date}</p>`;
        const ul = document.createElement('ul');
        for (const line of workContent[tabName].tasks) {
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