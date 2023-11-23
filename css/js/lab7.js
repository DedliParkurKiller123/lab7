const body = document.querySelector('body');
body.style.backgroundImage = 'url(./img/1618593607_16-funart_pro-p-oboi-fon-fon-neitralnii-svetlii-16.jpg)';
body.style.backgroundSize = 'cover';
body.style.backgroundAttachment = 'fixed';

const hiddenText = document.createElement('h1');
hiddenText.innerHTML = 'Чи буде сьогодні гарна погода ?';
hiddenText.style.position = 'absolute';
hiddenText.style.textAlign = 'center';
hiddenText.style.top = '5%';
hiddenText.style.left = '50%';
hiddenText.style.width = '25%';
hiddenText.style.transform = 'translateX(-50%)';
hiddenText.style.fontFamily = 'Times New Roman, Times, serif';
hiddenText.style.fontSize = '2.5vw';
hiddenText.style.color = 'rgb(255, 255, 255)';
hiddenText.style.textShadow = '4px 4px 4px #000000';
hiddenText.style.transition = ' 0.3s';
body.appendChild(hiddenText);

const ball = document.createElement('div');
ball.style.position = 'absolute';
ball.style.top = '50%';
ball.style.left = '50%';
ball.style.transform = 'translate(-50%, -50%)';
ball.style.width = '10vw';
ball.style.height = '30vh';
ball.style.border = '0.3vw solid #000000';
ball.style.borderRadius = '20vw';
ball.style.background = 'linear-gradient(-15deg, #012683, #d63c3c, #b700ff , #fffd6c, #00ffea)';
ball.style.boxShadow = 'inset 0 -3em 3em rgba(0, 0, 0, 0.3), 0.3em 0.3em 1em rgba(0, 0, 0, 0.6)';
ball.style.transition = ' 0.3s';
ball.style.display = 'flex'; 
ball.style.justifyContent = 'center'; 
ball.style.alignItems = 'center';
ball.style.textAlign = 'center';
body.appendChild(ball);

const textOnBall = document.createElement('span');
textOnBall.style.fontFamily = 'Times New Roman, Times, serif';
textOnBall.style.fontSize = '3vw';
textOnBall.style.color = 'rgba(255, 255, 255, 0.9)';
textOnBall.style.textShadow = '4px 4px 4px #000000';
textOnBall.style.lineHeight = '20vh';
ball.appendChild(textOnBall);

hiddenText.addEventListener('mouseenter', () => {
    hiddenText.style.width = '40%';
    hiddenText.style.fontSize = '3.5vw';
    hiddenText.style.textShadow = '10px 10px 10px #000000';
});
hiddenText.addEventListener('mouseout', () => {
    hiddenText.style.width = '25%';
    hiddenText.style.fontSize = '2.5vw';
    hiddenText.style.textShadow = '4px 4px 4px #000000';
});

ball.addEventListener('mouseenter', () => {
    ball.style.boxShadow = 'inset 0 -5vw 5vw rgba(0, 0, 0, 0.6), 0.6vw 0.6vw 2vw rgba(0, 0, 0, 1)';
});
ball.addEventListener('mouseout', () => {
    ball.style.boxShadow = 'inset 0 -3vw 3vw rgba(0, 0, 0, 0.3), 0.3vw 0.3vw 1vw rgba(0, 0, 0, 0.6)';
});

ball.onclick = () => {
    let options = ['Так', 'Ні', 'Напевно'];
    let randomValue = Math.floor(Math.random() * options.length);
    textOnBall.innerHTML = options[randomValue];
    if (options[randomValue] === 'Напевно') {
        ball.style.backgroundImage = 'url(./img/20230407_223752.jpg)';
        ball.style.backgroundSize = 'cover';
        ball.style.borderRadius = '0px';
    } else {
        ball.style.background = 'linear-gradient(-15deg, #012683, #d63c3c, #b700ff , #fffd6c, #00ffea)';
        ball.style.borderRadius = '20vw';
    }
};

const mediaQuery = window.matchMedia('(max-width: 1000px)');
const screenSizeChange = (mediaQuery) => {
    if (mediaQuery.matches) {
        ball.style.width = '38vw';
        ball.style.height = '38vh';
        hiddenText.style.top = '15%';
    } else {
        ball.style.width = '20vw';
        ball.style.height = '40vh';
        hiddenText.style.top = '5%';
    }   
};
screenSizeChange(mediaQuery);
mediaQuery.addEventListener('change', () => screenSizeChange(mediaQuery));