let openData = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
    request.send();
    request.onload = () => {
        let arr = JSON.parse(request.response);

        let getRandomInt = arr => {

            return Math.floor(Math.random() * Math.floor(arr - 1));
        };

        let arr2 = [];
        for (let i = 0; i < 6; i++) {
            arr2.push(arr[getRandomInt(arr.length)]);
        }
        const titleData = arr2.map(item => item.title);
        const thumbnailUrlData = arr2.map(item => item.thumbnailUrl);

        let imagesDelete = document.querySelectorAll('.no_remove');

        for (let item of imagesDelete) {
            item.classList.add('remove');
        }

        let textData = document.querySelectorAll('.text_transform');
        for (let item of textData) {
            item.style.display = 'block'
        }

        let answer = document.querySelectorAll('.answer');
        for (let item of answer) {
            item.classList.add('answerSize')
        }

        document.getElementById("answer2").innerHTML = titleData[0];
        document.getElementById('answer').style.background = `url(${thumbnailUrlData[0]})`;
        document.getElementById('answer3').style.background = `url(${thumbnailUrlData[1]})`;
        document.getElementById("answer4").innerHTML = titleData[1];
        document.getElementById('answer5').style.background = `url(${thumbnailUrlData[2]})`;
        document.getElementById("answer6").innerHTML = titleData[2];
        document.getElementById('answer7').style.background = `url(${thumbnailUrlData[3]})`;
        document.getElementById("answer8").innerHTML = titleData[3];
        document.getElementById('answer9').style.background = `url(${thumbnailUrlData[4]})`;
        document.getElementById("answer10").innerHTML = titleData[4];
        document.getElementById('answer11').style.background = `url(${thumbnailUrlData[4]})`;
        document.getElementById("answer12").innerHTML = titleData[4];
    }
};