
function signs() {
    var day = document.getElementById("day").value;
    var month =document.getElementById("month").value;
    console.log(day);
    console.log(month);
    var day1= day;
    varmonth1=month;
if ((month == 12 && day >= 22 && day <=31) || (month == 1 && day <= 19)) {
    capricorn();
  } else if ((month == 11 && day >= 22 && day <=30) || (month == 12 && day <= 21)) {
    sagittarius();
  } else if ((month == 10 && day >= 24 && day <=31) || (month == 11 && day <= 21)) {
    scorpio();
  } else if ((month == 9 && day >= 23 && day <=30) || (month == 10 && day <= 23)) {
    libra();
  } else if ((month == 8 && day >= 23 && day <=31) || (month == 9 && day <= 22)) {
    virgo();
  } else if ((month == 7 && day >= 23 && day <=31) || (month == 8 && day <= 22)) {
    leo();
  } else if ((month == 6 && day >= 22 && day <=30) || (month == 7 && day <= 22)) {
    cancer();
  } else if ((month == 5 && day >= 21 && day <=31) || (month == 6 && day <= 21)) {
    gemini();
  } else if ((month == 4 && day >= 20 && day <=30) || (month == 5 && day <= 20)) {
    taurus();
  } else if ((month == 3 && day >= 21 && day <=31) || (month == 4 && day <= 19)) {
    aries();
  } else if ((month == 2 && day >= 19 && day <=29) || (month == 3 && day <= 20)) {
    pisces();
  } else if ((month == 1 && day >= 20 && day <=31) || (month == 2 && day <= 18)) {
    aquarius();
  } else {error();}
}


function error() {
    var result = document.getElementById("result");
    result.innerHTML = "That is invalid, fool.";
}


function capricorn() {
    var result = document.getElementById("result");
    result.innerHTML = "Ingrid lives in Salt Lake City, Utah and is a Capricorn too!<br>";
    var audio = new Audio('assets/capricorn.mp3');
    audio.play();

    img = document.createElement("img");
    img.src = "soulmates/capricorn.jpg";
    src = document.getElementById("result");
    src.appendChild(img);
}

function aries() {
    var result = document.getElementById("result");
    result.innerHTML = "Paul lives in Cleveland, Ohio and is an Aries too!<br>";
    var audio = new Audio('assets/aries.mp3');
    audio.play();

    img = document.createElement("img");
    img.src = "soulmates/aries.jpg";
    src = document.getElementById("result");
    src.appendChild(img);
}

function pisces() {
    var result = document.getElementById("result");
    result.innerHTML = "Todd lives in Richmond, Virginia and is a Pisces too!<br>";
    var audio = new Audio('assets/pisces.mp3');
    audio.play();

    img = document.createElement("img");
    img.src = "soulmates/pisces.jpg";
    src = document.getElementById("result");
    src.appendChild(img);
}

function aquarius() {
    var result = document.getElementById("result");
    result.innerHTML = "Lynda lives in Nashville, Tennessee and is an Aquarius too!<br>";
    var audio = new Audio('assets/aquarius.mp3');
    audio.play();

    img = document.createElement("img");
    img.src = "soulmates/aquarius.jpg";
    src = document.getElementById("result");
    src.appendChild(img);
}

function taurus() {
    var result = document.getElementById("result");
    result.innerHTML = "Kyle lives in Seattle, Washington and is a Taurus too!<br>";
    var audio = new Audio('assets/taurus.mp3');
    audio.play();

    img = document.createElement("img");
    img.src = "soulmates/taurus.jpg";
    src = document.getElementById("result");
    src.appendChild(img);
}

function gemini() {
    var result = document.getElementById("result");
    result.innerHTML = "Phil lives in Philadelphia, Pennsylvania and is a Gemini too!<br>";
    var audio = new Audio('assets/gemini.mp3');
    audio.play();

    img = document.createElement("img");
    img.src = "soulmates/gemini.jpg";
    src = document.getElementById("result");
    src.appendChild(img);
}

function cancer() {
    var result = document.getElementById("result");
    result.innerHTML = "Rodney lives in Houston, Texas and is a Cancer too!<br>";
    var audio = new Audio('assets/cancer.mp3');
    audio.play();

    img = document.createElement("img");
    img.src = "soulmates/cancer.jpg";
    src = document.getElementById("result");
    src.appendChild(img);
}

function leo() {
    var result = document.getElementById("result");
    result.innerHTML = "Cynthia lives in Kansas City, Missouri and is a Leo too!<br>";
    var audio = new Audio('assets/leo.mp3');
    audio.play();

    img = document.createElement("img");
    img.src = "soulmates/leo.jpg";
    src = document.getElementById("result");
    src.appendChild(img);
}

function virgo() {
    var result = document.getElementById("result");
    result.innerHTML = "Peter lives in New York, New York and is a virgo too!<br>";
    var audio = new Audio('assets/virgo.mp3');
    audio.play();

    img = document.createElement("img");
    img.src = "soulmates/virgo.jpg";
    src = document.getElementById("result");
    src.appendChild(img);
}

function libra() {
    var result = document.getElementById("result");
    result.innerHTML = "Alfred lives in Tampa, Florida and is a Libra too!<br>";
    var audio = new Audio('assets/libra.mp3');
    audio.play();

    img = document.createElement("img");
    img.src = "soulmates/libra.jpg";
    src = document.getElementById("result");
    src.appendChild(img);
}

function scorpio() {
    var result = document.getElementById("result");
    result.innerHTML = "Janice lives in Little Rock, Arkansas and is a Scorpio too!<br>";
    var audio = new Audio('assets/scorpio.mp3');
    audio.play();

    img = document.createElement("img");
    img.src = "soulmates/scorpio.jpg";
    src = document.getElementById("result");
    src.appendChild(img);
}

function sagittarius() {
    var result = document.getElementById("result");
    result.innerHTML = "Karlyle lives in Portland, Oregon and is a Sagittarius too!<br>";
    var audio = new Audio('assets/sagittarius.mp3');
    audio.play();

    img = document.createElement("img");
    img.src = "soulmates/sagittarius.jpg";
    src = document.getElementById("result");
    src.appendChild(img);
}

function reset(){
    location.reload();
    location.reload();
}