// Canvas and Context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game Variables
let gameRunning = false;
let gameOver = false;
let gameMode = 'ai'; // Force AI mode
let aiDifficulty = 'medium'; // 'easy', 'medium', 'hard', 'insane'
let isAIGame = true; // Force AI game

// Paddle Settings
const paddleHeight = 70;
const paddleWidth = 10;
const paddleSpeed = 5;

// Ball Settings
const ballSize = 7;

// Paddles
const paddle1 = {
    x: 15,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    dy: 0,
    score: 0
};

const paddle2 = {
    x: canvas.width - paddleWidth - 15,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    dy: 0,
    score: 0
};

// Ball
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    dx: 5,
    dy: 5,
    speed: 5
};

// Keys
const keys = {
    w: false,
    s: false,
    arrowUp: false,
    arrowDown: false,
    space: false
};

// Mode Selection Event Listeners
// Mode switching removed - AI mode is fixed

document.getElementById('difficultySelect').addEventListener('change', (e) => {
    aiDifficulty = e.target.value;
    if (gameRunning) resetGame();
});

// Event Listeners
document.addEventListener('keydown', (e) => {
    if (e.key === 'w' || e.key === 'W') keys.w = true;
    if (e.key === 's' || e.key === 'S') keys.s = true;
    if (e.key === 'ArrowUp') keys.arrowUp = true;
    if (e.key === 'ArrowDown') keys.arrowDown = true;
    if (e.key === ' ') {
        e.preventDefault();
        keys.space = true;
        if (!gameRunning && !gameOver) startGame();
    }
    if (e.key === 'Enter') {
        e.preventDefault();
        if (gameOver) {
            resetGame();
            startGame();
        }
    }
});

// Also add canvas focus listener
canvas.addEventListener('keydown', (e) => {
    if (e.key === 'w' || e.key === 'W') keys.w = true;
    if (e.key === 's' || e.key === 'S') keys.s = true;
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 'W') keys.w = false;
    if (e.key === 's' || e.key === 'S') keys.s = false;
    if (e.key === 'ArrowUp') keys.arrowUp = false;
    if (e.key === 'ArrowDown') keys.arrowDown = false;
    if (e.key === ' ') keys.space = false;
});

// Also add canvas focus event to help debug
canvas.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 'W') keys.w = false;
    if (e.key === 's' || e.key === 'S') keys.s = false;
});

// Button Event Listeners
document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('resetBtn').addEventListener('click', resetGame);

// Canvas click to focus
canvas.addEventListener('click', () => {
    canvas.focus();
    console.log('Canvas focused - use W/S to move!');
});

// Game Functions
function startGame() {
    if (!gameRunning && !gameOver) {
        gameRunning = true;
        canvas.focus(); // Focus on canvas for keyboard input
        updateStatusText('Game Running! Use W/S to move!');
        gameLoop();
    } else if (gameOver) {
        resetGame();
        startGame();
    }
}

function resetGame() {
    gameRunning = false;
    gameOver = false;
    paddle1.score = 0;
    paddle2.score = 0;
    paddle1.y = canvas.height / 2 - paddleHeight / 2;
    paddle2.y = canvas.height / 2 - paddleHeight / 2;
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = 5;
    ball.dy = 5;
    updateScore();
    updateStatusText('Press SPACE to start ▶ ENTER to restart');
}

function updateStatusText(text) {
    document.getElementById('statusText').textContent = text;
}

function updateScore() {
    document.getElementById('score1').textContent = paddle1.score;
    document.getElementById('score2').textContent = paddle2.score;
}

// Game Loop
function gameLoop() {
    if (!gameRunning) return;

    // Clear canvas
    drawBackground();
    
    // Update
    updatePaddles();
    updateBall();
    checkCollisions();
    checkScore();

    // Draw
    drawPaddles();
    drawBall();
    drawCenterLine();

    requestAnimationFrame(gameLoop);
}

function drawBackground() {
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Gradient effect
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(0, 212, 255, 0.05)');
    gradient.addColorStop(1, 'rgba(255, 0, 110, 0.05)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function updatePaddles() {
    // Paddle 1 (Player 1)
    if (keys.w && paddle1.y > 0) {
        paddle1.y -= paddleSpeed;
    }
    if (keys.s && paddle1.y < canvas.height - paddle1.height) {
        paddle1.y += paddleSpeed;
    }

    // Paddle 2 (Player 2 or AI)
    if (isAIGame) {
        updateAIPaddle();
    } else {
        if (keys.arrowUp && paddle2.y > 0) {
            paddle2.y -= paddleSpeed;
        }
        if (keys.arrowDown && paddle2.y < canvas.height - paddle2.height) {
            paddle2.y += paddleSpeed;
        }
    }
}

function updateAIPaddle() {
    // AI logic based on difficulty
    const ballCenter = paddle2.y + paddle2.height / 2;
    const ballMovingTowardAI = ball.dx > 0;
    
    // Predicted Y position when ball reaches paddle
    let predictedY = ball.y;
    if (ballMovingTowardAI) {
        const timeToReachPaddle = (paddle2.x - ball.x) / Math.abs(ball.dx);
        predictedY = ball.y + ball.dy * timeToReachPaddle;
        
        // Account for bounces
        while (predictedY < 0 || predictedY > canvas.height) {
            if (predictedY < 0) predictedY = -predictedY;
            if (predictedY > canvas.height) predictedY = 2 * canvas.height - predictedY;
        }
    }
    
    // AI Speed and accuracy based on difficulty
    let aiSpeed, errorMargin;
    switch(aiDifficulty) {
        case 'easy':
            aiSpeed = 2.5;
            errorMargin = 40;
            break;
        case 'medium':
            aiSpeed = paddleSpeed * 0.9;
            errorMargin = 15;
            break;
        case 'hard':
            aiSpeed = paddleSpeed * 1.2;
            errorMargin = 5;
            break;
        case 'insane':
            aiSpeed = paddleSpeed * 1.5;
            errorMargin = 0;
            break;
        default:
            aiSpeed = paddleSpeed;
            errorMargin = 15;
    }
    
    // Add random error for lower difficulties
    const error = (Math.random() - 0.5) * errorMargin * 2;
    const targetY = ballMovingTowardAI ? predictedY + error : ball.y;
    
    // Move paddle toward target
    if (ballCenter < targetY - 15) {
        paddle2.y = Math.min(paddle2.y + aiSpeed, canvas.height - paddle2.height);
    } else if (ballCenter > targetY + 15) {
        paddle2.y = Math.max(paddle2.y - aiSpeed, 0);
    }
}

function updateBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Ball collision with top and bottom
    if (ball.y - ballSize < 0 || ball.y + ballSize > canvas.height) {
        ball.dy = -ball.dy;
        ball.y = Math.max(ballSize, Math.min(canvas.height - ballSize, ball.y));
    }
}

function checkCollisions() {
    // Collision with paddle 1
    if (ball.x - ballSize < paddle1.x + paddle1.width &&
        ball.y > paddle1.y &&
        ball.y < paddle1.y + paddle1.height) {
        ball.dx = Math.abs(ball.dx) * 1.05;
        ball.x = paddle1.x + paddle1.width + ballSize;
        
        // Add spin based on where ball hits paddle
        const hitPos = (ball.y - paddle1.y) / paddle1.height;
        ball.dy = (hitPos - 0.5) * 10;
    }

    // Collision with paddle 2
    if (ball.x + ballSize > paddle2.x &&
        ball.y > paddle2.y &&
        ball.y < paddle2.y + paddle2.height) {
        ball.dx = -Math.abs(ball.dx) * 1.05;
        ball.x = paddle2.x - ballSize;
        
        // Add spin based on where ball hits paddle
        const hitPos = (ball.y - paddle2.y) / paddle2.height;
        ball.dy = (hitPos - 0.5) * 10;
    }
}

function checkScore() {
    // Ball out on left side
    if (ball.x - ballSize < 0) {
        paddle2.score++;
        resetBall();
    }

    // Ball out on right side
    if (ball.x + ballSize > canvas.width) {
        paddle1.score++;
        resetBall();
    }

    // Check win condition (first to 11 points)
    if (paddle1.score >= 11) {
        endGame('🎉 YOU WIN! Amazing! 🎉');
    } else if (paddle2.score >= 11) {
        endGame('💻 ROBOT Wins! Try Again! 💻');
    }

    updateScore();
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = (Math.random() > 0.5 ? 1 : -1) * 5;
    ball.dy = (Math.random() - 0.5) * 8;
}

function endGame(message) {
    gameRunning = false;
    gameOver = true;
    updateStatusText(message + ' - Press ENTER to play again');
}

function drawPaddles() {
    // Paddle 1 (Player - RED)
    const gradient1 = ctx.createLinearGradient(paddle1.x, paddle1.y, paddle1.x + paddle1.width, paddle1.y);
    gradient1.addColorStop(0, '#ff0000');
    gradient1.addColorStop(1, '#cc0000');
    ctx.fillStyle = gradient1;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    
    // Glow effect for paddle 1 (RED)
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.6)';
    ctx.lineWidth = 2;
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

    // Paddle 2 (Robot - GREEN)
    const gradient2 = ctx.createLinearGradient(paddle2.x, paddle2.y, paddle2.x + paddle2.width, paddle2.y);
    gradient2.addColorStop(0, '#00ff00');
    gradient2.addColorStop(1, '#00cc00');
    ctx.fillStyle = gradient2;
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    
    // Glow effect for paddle 2 (GREEN)
    ctx.strokeStyle = 'rgba(0, 255, 0, 0.6)';
    ctx.lineWidth = 2;
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
}

function drawBall() {
    ctx.fillStyle = '#ffff00';
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ballSize, 0, Math.PI * 2);
    ctx.fill();

    // Glow effect (WHITE)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ballSize + 3, 0, Math.PI * 2);
    ctx.stroke();
}

function drawCenterLine() {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);
}

// Initial draw
drawBackground();
drawPaddles();
drawBall();
drawCenterLine();
updateScore();

// DEBUG: Show key states
console.log('Game initialized. Press W/S to move left paddle (RED). Robot controls right paddle (GREEN).');
console.log('Canvas focus: Click on the game area first if keys dont work!');
