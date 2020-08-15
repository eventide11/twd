var buttons = document.querySelectorAll('main button');

var facts = [
    "The Opening Credits are Deteriorating. That includes the lettering and logo for the show’s opening credits, which have been yellowing and crumbling for the past eight seasons. The ninth season logo features greenery—signaling a change in the story’s direction, a sense of rebuilding, and the return of nature.",
    "The Little Girl from the Pilot's Opening Returned in Season 8. The first episode established the show’s tone by having Rick Grimes shoot a teddy-bear-holding little girl named Summer. For its 100th episode, the series brought back Addy Miller to play a zombie very similar to the iconic one she played when she was 10 years old.",
    "Daryl Doesn’t Exist in the Comics! Daryl Dixon was created specifically for the show. He doesn’t exist in the comic books. Norman Reedus originally auditioned for the role of Merle. Although Michael Rooker got the part instead, the writers decided to keep Norman simply because they were so impressed by his performance.",
    "A SWAT Team Was Called to the Set. Remember when Merle was shooting from a rooftop back in season 1? Believe it or not, nearby citizens called the police thinking it was a real gunman! They had no idea that a TV show was being filmed.",
    "Human Guts are Made of Ham. Ever wondered what those Walkers are really eating as they rip through human guts on the show? Ham soaked in vinegar! They used to smother ham in barbecue sauce in previous seasons but they soon switched up the ingredients because it wiped all the zombie makeup off.",
    "Carol was Meant to Die Instead of T-Dog. Apparently T-Dog was never meant to die. Carol was the one to get bitten, but T-Dog was sacrificed instead as he wasn’t a popular character.",
    "There has been 16 Judiths! Over its span of 9 seasons, the show has cast a total of 16 actresses to play the role of Judith. Most memorably, there was baby Judith, toddler Judith and now, there’s an almost-teen Judith.",
    "The Cast has a Last Supper when a Character Dies. The Walking Dead cast have a 'Death Dinner' whenever one of the characters dies.",
    "Shane wasn’t Supposed to Make it to Season 2. Shane Walsh was one of the biggest characters of the first two seasons of the show. Frankly, Season 2 on the farm would have probably been a total bore if not for Shane slowly deteriorating in the background. If Frank Darabont’s original plan for the series had come to pass, Shane never would have survived the first season. When The Walking Dead was only given six episodes for Season 1, Shane outlived his comic counterpart and became a driving force for much of the plot during Season 2.",
    "Lauren Cohan was Pulled Over as Maggie. Considering all the work that goes in to transforming sets into a zombie apocalypse wasteland and extras into zombies, actors must have a hard time returning to the real world sometimes. In the case of Maggie actress Lauren Cohan, however, she had a swift jolt back to reality when she left set after a hard day of zombie-slaying and was pulled over by a cop while still covered with fake blood and Walker guts. Surprisingly, the officer was more interested in a date than why she looked like she’d gone on a recent murder spree.",
    "HBO and NBC Both Passed on the Show because it was too Violent. Have the HBO execs ever sat down and watched an episode of Game of Thrones? There’s typically more violence in the first five minutes of GOT than there is in an episode of The Walking Dead.",
    "The walker that bit Amy on the neck in the first season was the show’s production designer Greg Nicotero.",
    "The name of the doctor at CDC, Edwin Jenner, was a reference to Edward Jenner who developed the first vaccine for smallpox."
    ];

function randomNum() {
    var n = Math.random() * 12;
    n = Math.floor(n) + 1;
    alert(facts[n]);
}

var characters = ['Rick [W]', 'Negan [A]', 'Shane [S]', 'Morgan [D]', 'Daryl [J]', 'Merle [K]', 'Glenn [L]'];

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        randomNum();
        this.classList.add('version2');
        if (this.innerHTML === characters[0]) {
            var sound = new Audio('rick.mp3');
            sound.play();
            this.style.backgroundImage = 'url(rick2.jpg)';
        }
        else if (this.innerHTML === characters[1]) {
            var sound = new Audio('negan.mp3');
            sound.play();
            this.style.backgroundImage = 'url(negan2.png)';
        }
        else if (this.innerHTML === characters[2]) {
            var sound = new Audio('shane.mp3');
            sound.play();
            this.style.backgroundImage = 'url(shane2.jpg)';
        }
        else if (this.innerHTML === characters[3]) {
            var sound = new Audio('morgan.mp3');
            sound.play();
            this.style.backgroundImage = 'url(morgan2.png)';
        }
        else if (this.innerHTML === characters[4]) {
            var sound = new Audio('daryl.mp3');
            sound.play();
            this.style.backgroundImage = 'url(daryl2.png)';
        }
        else if (this.innerHTML === characters[5]) {
            var sound = new Audio('merle.mp3');
            sound.play();
            this.style.backgroundImage = 'url(merle2.jpg)';
        }
        else if (this.innerHTML === characters[6]) {
            var sound = new Audio('glenn.mp3');
            sound.play();
            this.style.backgroundImage = 'url(glenn2.jpg)';
        }
    });
}

document.addEventListener('keydown', function(event) {
        if (event.key === 'w') {
            randomNum();
            var sound = new Audio('rick.mp3');
            sound.play();
            buttons[0].style.backgroundImage = 'url(rick2.jpg)';
        }
        else if (event.key === 'a') {
            randomNum();
            var sound = new Audio('negan.mp3');
            sound.play();
            buttons[1].style.backgroundImage = 'url(negan2.png)';
        }
        else if (event.key === 's') {
            randomNum();
            var sound = new Audio('shane.mp3');
            sound.play();
            buttons[2].style.backgroundImage = 'url(shane2.jpg)';
        }
        else if (event.key === 'd') {
            randomNum();
            var sound = new Audio('morgan.mp3');
            sound.play();
            buttons[3].style.backgroundImage = 'url(morgan2.png)';
        }
        else if (event.key === 'j') {
            randomNum();
            var sound = new Audio('daryl.mp3');
            sound.play();
            buttons[4].style.backgroundImage = 'url(daryl2.png)';
        }
        else if (event.key === 'k') {
            randomNum();
            var sound = new Audio('merle.mp3');
            sound.play();
            buttons[5].style.backgroundImage = 'url(merle2.jpg)';
        }
        else if (event.key === 'l') {
            randomNum();
            var sound = new Audio('glenn.mp3');
            sound.play();
            buttons[6].style.backgroundImage = 'url(glenn2.jpg)';
        }
        else {
            console.log(0);
        }
})