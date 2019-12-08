
function fetchData() {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
        request.send();
        request.onload = () => {
            resolve(JSON.parse(request.response));
        };
        request.onerror = () => {
            reject(JSON.parse(request.response));
        }
    });
}

function getRandomInt(maximumInt) {
    return Math.floor(Math.random() * Math.floor(maximumInt));
}

const renderData = () => {
    fetchData()
        .then(response => {
            const fillArrayWithRandomElements = (arr, count) => {
                if (arr.length < count) {
                    const el = response[getRandomInt(response.length)];
                    if (arr.indexOf(el) < 0) arr.push(el);
                    return fillArrayWithRandomElements(arr, count);
                }
                return arr;
            };
            const imagesDelete = document.querySelectorAll('.no-remove');

            for (let item of imagesDelete) {
                item.classList.add('remove');
            }

            const textData = document.querySelectorAll('.text-transform');
            for (let item of textData) {
                item.style.display = 'block'
            }

            const answer = document.querySelectorAll('.answer');
            for (let item of answer) {
                item.classList.add('answer-size')
            }

            const parentsFeaturesOne = document.querySelectorAll('.features-one');
            const randomElements = fillArrayWithRandomElements([], parentsFeaturesOne.length);

            for (let i = 0; i < parentsFeaturesOne.length; i++) {
                const textEl = parentsFeaturesOne[i].querySelector('.text-transform');
                if (textEl) {
                    textEl.innerHTML = randomElements[i].title;
                }

                const backgroundEl = parentsFeaturesOne[i].querySelector('.answer');
                if (backgroundEl) backgroundEl.style.background = `url(${randomElements[i].thumbnailUrl})`
            }
        })
        .catch(error => {
            alert(error)
        });
}