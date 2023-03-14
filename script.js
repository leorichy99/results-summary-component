const testsWrapper = document.querySelector('.type-of-test-wrapper');

// used the fetch api to fetch data from a local `data.json` file and manipulated it 🎉
fetch('data.json')
.then(res => res.json())
.then(data => {
    data.map(test => {
        const testUi = document.createElement('div');
        testUi.className = 'test-ui';

        testUi.innerHTML = `
        <div class="test-type-name">
          <img src="${test.icon}" alt="${test.category}">
          <span class="test-name">${test.category}</span>
        </div>

        <p class="test-ui-score"><span class="score">${test.score}</span> <span class="total_score">/ 100</span> </p>`;

        testUi.style.backgroundColor = `${test.bg}`;
        testUi.firstElementChild.querySelector(".test-name").style.color = `${test.color}`;
        testsWrapper.appendChild(testUi);
    })
})