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

const projContent = {
    rsb: {
        name: 'Ready Set Ball',
        skills: ['Go', 'JavaScript', 'React.js', 'MongoDB'],
        date: 'Fall 2017',
        tasks: [
            'Collaborated with three other classmates to develop a web application to find pick-up games',
            'Developed the server of the application using Go',
            'Developed significant parts of the UI using React',
        ],
        git: 'https://github.com/amupitan/rsb-web-front',
    },
    csp: {
        name: 'Cy-Sliding Puzzle',
        skills: ['JavaScript', 'React.js'],
        date: 'Spring 2017',
        tasks: ['Developed a recreational image puzzle game'],
        git: 'https://github.com/amupitan/cy-sliding-puzzle',
        view: 'https://amupitan.github.io/cy-sliding-puzzle',
    },
    rdg: {
        name: 'Roguelike Dungeon Game',
        skills: ['C/C++', 'Ncurses'],
        date: 'Spring 2017',
        tasks: [
            'Developed a roguelike dungeon game in C and C++.',
            'Used graph algorithms to simulate dungeon NPC actions and motion.',
        ],
        git: 'https://github.com/amupitan/roguelike-roadmap',
    },
    nogo: {
        name: 'No-Go Browser Extension',
        skills: ['JavaScript', 'Google Chrome JavaScipt APIs'],
        date: 'Spring 2017',
        tasks: [
            'Developed a Google Chrome extension to help enhance productivity by keeping the user away from unproductive sites at the user\'s request',
            'Used chrome API’s to filter http requests to block unwanted sites',
            'Communicated with front-end developers to orchestrate an efficient extention',
        ],
        git: 'https://github.com/amupitan/nogo',
    },
    light: {
        name: 'Light Game',
        skills: ['Java', 'Slick2D'],
        date: 'Spring 2016',
        tasks: [
            'Developed a Java based 2D application',
            'Reported weekly updates to gauge progress of the team to authority figures',
            'Used Slick2D library to create game mechanics',
        ],
        git: 'https://github.com/amupitan/roguelike-roadmap',
    },
};

(function ($) {

    const currentSelected = 'current';
    // const tabs = document.getElementById('tabs').children;

    /**
     * Returns a function that takes a func that is called on every tab
     * @param {HTMLElement} tabs the ul element of the tabs
     */
    const forTab = ({ tabs, isWork }) => (func) => {
        for (const li of tabs) {
            const tab = li.children[0].children[0];
            func(tab, { isWork });
        }
    };

    const forWorkTab = forTab({ tabs: document.getElementById('work-tabs').children, isWork: true });
    const forProjTab = forTab({ tabs: document.getElementById('proj-tabs').children, isWork: false });

    const replaceWorkTabContent = (tabName) => {
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

    const replaceProjTabContent = (tabName) => {
        const content = projContent[tabName];
        document.getElementById('proj-image').setAttribute('src', `images/${tabName}.jpg`);
        document.getElementById('proj-name').innerHTML = content.name;
        const textDiv = document.getElementById('proj-text');
        textDiv.innerHTML = `
        <p class='no-margin align-left'>${content.skills.join(', ')}</p>
        <p class='align-left'>${content.date}</p>`;

        const ul = document.createElement('ul');
        for (const line of content.tasks) {
            const li = document.createElement('li');
            li.innerHTML = line;
            ul.appendChild(li);
        }
        textDiv.appendChild(ul);

        if (content.git || content.view) {
            const ul = document.createElement('ul');
            ul.className = 'actions';
            const createLi = (link, message, icon) => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${link}" class="button icon fa-${icon}">${message}</a>`;
                return li;
            }
            if (content.git) {
                ul.appendChild(createLi(content.git, 'View on Github', 'github'));
            }
            if (content.view) {
                ul.appendChild(createLi(content.view, 'See Project', 'external-link'));
            }
            textDiv.appendChild(ul);
        }


    };

    const deactiveTabs = ({ isWork = true }) => {
        const tabType = isWork ? forWorkTab : forProjTab;
        tabType((tab) => {
            tab.classList.remove(currentSelected);
        });
    };

    const addHighlightEffect = (tab, { isWork = true }) => {
        tab.onclick = (evt) => {
            evt.preventDefault();
            deactiveTabs({ isWork });
            evt.target.classList.add(currentSelected);

            const replacementFunc = isWork ? replaceWorkTabContent : replaceProjTabContent;
            replacementFunc(tab.dataset.name);
        };
    };

    forWorkTab(addHighlightEffect);
    forProjTab(addHighlightEffect);

    // add email to conatct form
    document.getElementById('contact-form').setAttribute('action', 'https://formspree.io/donv88@live.com');

})(jQuery);