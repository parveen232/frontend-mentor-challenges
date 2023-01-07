const filterContainer = document.querySelector('.filter-container');
const filter = document.querySelector('.filter');
const cBoxes = document.querySelectorAll('input[type="checkbox"]');
const list = document.querySelector('.list');

window.addEventListener('click', (e) => {
    if (filter.contains(e.target)) {
        filter.style.visibility = 'visible';
    }
    else if (filterContainer.contains(e.target)) {
        if (filter.style.visibility == 'hidden') {
            filter.style.visibility = 'visible';
        }
        else {
            filter.style.visibility = 'hidden';
        }
    }
    else {
        filter.style.visibility = 'hidden';
    }
});

const projects = [
    {
        name: 'huddle-landing-page-with-alternating-feature-blocks',
        languages: ['html-css'],
        difficulty: '2 Junior',
        github: 'https://github.com/parveen232/frontend-mentor-challenges/tree/master/huddle-landing-page-with-alternating-feature-blocks'
    },
    {
        name: 'base-apparel-coming-soon',
        languages: ['html-css', 'js'],
        difficulty: '1 Newbie',
        github: 'https://github.com/parveen232/frontend-mentor-challenges/tree/master/base-apparel-coming-soon'
    },
    {
        name: 'huddle-landing-page-with-single-introductory-section',
        languages: ['html-css'],
        difficulty: '1 Newbie',
        github: 'https://github.com/parveen232/frontend-mentor-challenges/tree/master/huddle-landing-page-with-single-introductory-section'
    },
    {
        name: 'four-card-feature-section',
        languages: ['html-css'],
        difficulty: '1 Newbie',
        github: 'https://github.com/parveen232/frontend-mentor-challenges/tree/master/four-card-feature-section'
    },
    {
        name: 'single-price-grid-component',
        languages: ['html-css'],
        difficulty: '1 Newbie',
        github: 'https://github.com/parveen232/frontend-mentor-challenges/tree/master/single-price-grid-component'
    },
    {
        name: 'product-preview-card-component',
        languages: ['html-css'],
        difficulty: '1 Newbie',
        github: 'https://github.com/parveen232/frontend-mentor-challenges/tree/master/product-preview-card-component'
    },
    {
        name: 'coming-soon',
        languages: ['html-css', 'js'],
        difficulty: '2 Junior',
        github: 'https://github.com/parveen232/frontend-mentor-challenges/tree/master/coming-soon'
    },
    {
        name: 'coming-soon',
        languages: ['html-css', 'js'],
        difficulty: '3 Intermediate',
        github: 'https://github.com/parveen232/frontend-mentor-challenges/tree/master/coming-soon'
    },
    {
        name: 'coming-soon',
        languages: ['html-css', 'js', 'api'],
        difficulty: '3 Intermediate',
        github: 'https://github.com/parveen232/frontend-mentor-challenges/tree/master/coming-soon'
    },
    {
        name: 'coming-soon',
        languages: ['html-css', 'js'],
        difficulty: '4 Advanced',
        github: 'https://github.com/parveen232/frontend-mentor-challenges/tree/master/coming-soon'
    },
    {
        name: 'coming-soon',
        languages: ['html-css', 'js', 'api'],
        difficulty: '5 Guru',
        github: 'https://github.com/parveen232/frontend-mentor-challenges/tree/master/coming-soon'
    }
];

projects.forEach(({name, difficulty, languages, github }) => {
    const listItem = document.createElement('li');

    listItem.innerHTML = `
                <div class="img-container">
                    <a href="/${name}/index.html">
                        <img src="/${name}/design/desktop-design.jpg" alt="${name}" />
                    </a>
                </div>
                <div class="box">
                    <a href="/${name}/index.html">
                        ${modifyName(name)}
                    </a>
                    <div class="lang-diff">
                        <div class="lang-container">
                        ${spancollfn(languages)}
                        </div>
                        <span class="difficulty">${difficulty}</span>
                    </div>
                    <div class="links-container">
                        <a href="/${name}/index.html">
                            <ion-icon name="open-outline"></ion-icon>
                        </a>
                        <a href="${github}">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </div>
                </div>
            `;

    list.appendChild(listItem);
});

function modifyName(name) {
    return name
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}

function spancollfn(langArr) {
    const newLangArr = [];
    for (let i = 0; i < langArr.length; i++) {
        newLangArr.push(langArr[i]);
    }
    const spanColl = document.createElement('div');
    if (newLangArr[0] == 'html-css') {
        const flangEl = newLangArr[0];
        newLangArr.shift();
        newLangArr.unshift(flangEl.slice(5));
        newLangArr.unshift(flangEl.slice(0, 4));
    }
    for (const lang of newLangArr) {
        const spanEl = document.createElement('span');

        if (lang == 'html') {
            spanEl.classList.add('html-clr');
        }
        if (lang == 'css') {
            spanEl.classList.add('css-clr');
        }
        if (lang == 'js') {
            spanEl.classList.add('js-clr');
        }
        if (lang == 'api') {
            spanEl.classList.add('api-clr');
        }

        spanEl.innerHTML = lang.toUpperCase();
        spanColl.appendChild(spanEl);
    }
    const result = spanColl.innerHTML;
    spanColl.remove();
    return result;
}

const listLis = document.querySelectorAll('.list li');
const dclassList = document.querySelectorAll('.difficulty');

for (const dclass of dclassList) {
    if (dclass.innerHTML == '1 Newbie') {
        dclass.classList.add('newbie-clr')
    }
    if (dclass.innerHTML == '2 Junior') {
        dclass.classList.add('junior-clr')
    }
    if (dclass.innerHTML == '3 Intermediate') {
        dclass.classList.add('intermediate-clr')
    }
    if (dclass.innerHTML == '4 Advanced') {
        dclass.classList.add('advanced-clr')
    }
    if (dclass.innerHTML == '5 Guru') {
        dclass.classList.add('guru-clr')
    }
}