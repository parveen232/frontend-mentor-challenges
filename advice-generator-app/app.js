const adviceId = document.querySelector('.advice-id')
const adviceText = document.querySelector('h1')
const adviceBtn = document.querySelector('.advice-btn');

const getNewAdvice = async () => {
    const adviceInfo = await getAdviceInfo();
    adviceId.innerHTML = adviceInfo.id;
    adviceText.innerHTML = adviceInfo.advice;
}

const getAdviceInfo = async () => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json();
        return data.slip;
    } catch (e) {
        console.log("ERROR!", e);
    }
}

adviceBtn.addEventListener('click', getNewAdvice);