var now = 1;

var get = function(id) {
    return document.getElementById(id);
};

var range = function(n, max = Infinity, min = 1) {
    if (n > max) return max;
    if (n < min) return min;
    else return n;
}

get('next').addEventListener('click', function() {
    get(`p${now}`).style.display = 'none';
    now = range(now + 1, l);
    console.log(`NowRding${now}`);
    get(`p${now}`).style.display = 'block';
});

get('back').addEventListener('click', function() {
    get(`p${now}`).style.display = 'none';
    now = range(now - 1);
    console.log(`NowRding${now}`);
    get(`p${now}`).style.display = 'block';
});

function change(s) {
    for (i = 1; i <= l; i++) {
        get(`t${i}`).style.fontSize = `${s}px`;
        console.log(`${s}`);
    }
}

function font(f) {
    for (i = 1; i <= l; i++) {
        get(`t${i}`).style.fontFamily = `${f}`;
    }
}