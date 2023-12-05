document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#spawn-button-square").addEventListener("click", function () {
        draw_squares(get_amount());
    });
    document.querySelector("#spawn-button-triangle").addEventListener("click", function () {
        draw_triangles(get_amount());
    });
    document.querySelector("#spawn-button-circle").addEventListener("click", function () {
        draw_circles(get_amount());
    });
});

function get_amount() {
    return Number(document.querySelector('input').value) || 0;
}

function draw_squares(amount) {
    const drawField = document.querySelector('.draw-field');

    for (let i = 0; i < amount; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        const size = 250 * Math.random() + 50;
        const x = Math.random() * (innerWidth - size - 30);
        const y = (Math.random() * (innerHeight - size - 30)) * 0.9 + 88;
        square.style.position = 'absolute';
        square.style.left = x + 'px';
        square.style.top = y + 'px';
        square.style.width = size + 'px';
        square.style.height = size + 'px';
        square.style.backgroundColor = '#FF1A1A';
		
        let firstClick = true;
        square.addEventListener('click', function () {
            if (firstClick) {
                square.style.backgroundColor = '#FFFF1A';
                firstClick = false;
            } else {
                square.remove();
            }
        });

        drawField.appendChild(square);
    }
}

function draw_triangles(amount) {
    const drawField = document.querySelector('.draw-field');

    for (let i = 0; i < amount; i++) {
        const triangle = document.createElement('div');
        triangle.classList.add('triangle');

        const size = 250 * Math.random() + 50;
        const x = Math.random() * (innerWidth - size - 30);
        const y = (Math.random() * (innerHeight - size - 30)) * 0.9 + 88;
        triangle.style.position = 'absolute';
        triangle.style.left = x + 'px';
        triangle.style.top = y + 'px';
        triangle.style.borderLeft = size / 2 + 'px solid transparent';
        triangle.style.borderRight = size / 2 + 'px solid transparent';
        triangle.style.borderBottom = size + 'px solid #1A1AFF';

        let firstClick = true;
        triangle.addEventListener('click', function () {
            if (firstClick) {
                triangle.style.borderBottom = size + 'px solid #FFFF1A';
                firstClick = false;
            } else {
                triangle.remove();
            }
        });

        drawField.appendChild(triangle);
    }
}

function draw_circles(amount) {
    const drawField = document.querySelector('.draw-field');

    for (let i = 0; i < amount; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        const size = 250 * Math.random() + 50;
        const x = Math.random() * (innerWidth - size - 30);
        const y = (Math.random() * (innerHeight - size - 30)) * 0.9 + 88;
        circle.style.position = 'absolute';
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
        circle.style.backgroundColor = '#1A8D1A';
        circle.style.borderRadius = '50%';

        let firstClick = true;
        circle.addEventListener('click', function () {
            if (firstClick) {
                circle.style.backgroundColor = '#FFFF1A';
                firstClick = false;
            } else {
                circle.remove();
            }
        });

        drawField.appendChild(circle);
    }
}

