// buttons
const btnScore = document.getElementById("score");
const btnAccept = document.getElementById("accept");
const btnReset = document.getElementById("reset");
const btnScore1 = document.getElementById("score1");
const btnAccept1 = document.getElementById("accept1");
const btnReset1 = document.getElementById("reset1");
const gamescore1 = document.getElementById("frsscr")
const gamescore2 = document.getElementById("secscr")

// texts
const textScore = document.getElementById("score-text");
const textAccept = document.getElementById("accept-text");
const textScore1 = document.getElementById("score-text1");
const textAccept1 = document.getElementById("accept-text1");


// team
const team = {
  players: 11,
  subStitute: 5,
  goals: {
    scored: 0,
    accepted: 0,
    scored1: 0,
    accepted1: 0,
    gamescore1: 0,
    gamescore2: 0,
  },
  disqualified: 0,
  time: 0,
  btns: {
    score: btnScore,
    accept: btnAccept,
    reset: btnReset,
    score1: btnScore1,
    accept1: btnAccept1,
    reset1: btnReset1,
  },
  texts: {
    score: textScore,
    accept: textAccept,
    score1: textScore1,
    accept1: textAccept1,
    gamescore1: gamescore1,
    gamescore2: gamescore2,
  },
  changeScore1() {
    this.goals.scored1++;
    this.goals.accepted++
    this.goals.gamescore2++
    this.texts.score1.innerText = this.goals.scored1
    this.texts.gamescore2.innerText = this.goals.gamescore2;
    this.texts.accept.innerText = this.goals.accepted;
  },
  changeScore() {
    this.goals.scored++;
    this.goals.accepted1++
    this.goals.gamescore1++
    this.texts.accept1.innerText = this.goals.accepted1;
    this.texts.gamescore1.innerText = this.goals.gamescore1;
    this.texts.score.innerText = this.goals.scored;
  },
  changeAccept1() {
    this.goals.accepted1++;
    this.goals.scored++
    this.goals.gamescore2++;
    this.texts.score.innerText = this.goals.scored;
    this.texts.gamescore1.innerText = this.goals.gamescore1;
    this.texts.accept1.innerText = this.goals.accepted1;
  },
  changeAccept() {
    this.goals.accepted++;
    this.goals.scored1++
    this.goals.gamescore2++;
    this.texts.score1.innerText = this.goals.scored1;
    this.texts.gamescore2.innerText = this.goals.gamescore2;
    this.texts.accept.innerText = this.goals.accepted;
  },
  resetGoals() {
    this.goals.accepted = 0;
    this.goals.scored = 0;
    this.goals.gamescore1 = 0;
    this.goals.gamescore2 = 0;
    this.goals.accepted1 = 0;
    this.goals.scored1 = 0;
    this.texts.accept1.innerText = 0;
    this.texts.score1.innerText = 0;
    this.texts.gamescore1.innerText = 0;
    this.texts.gamescore2.innerText = 0;
    this.texts.score.innerText = 0;
    this.texts.accept.innerText = 0;
  },
  resetGoals1() {
    this.goals.accepted = 0;
    this.goals.scored = 0;
    this.goals.gamescore1 = 0;
    this.goals.gamescore2 = 0;
    this.goals.accepted1 = 0;
    this.goals.scored1 = 0;
    this.texts.accept1.innerText = 0;
    this.texts.score1.innerText = 0;
    this.texts.gamescore1.innerText = 0;
    this.texts.gamescore2.innerText = 0;
    this.texts.score.innerText = 0;
    this.texts.accept.innerText = 0;
  },
  init() {
    this.btns.score.onclick = () => this.changeScore();
    this.btns.accept.onclick = () => this.changeAccept();
    this.btns.reset.onclick = () => this.resetGoals();
    this.btns.score1.onclick = () => this.changeScore1();
    this.btns.accept1.onclick = () => this.changeAccept1();
    this.btns.reset1.onclick = () => this.resetGoals1();
  },
};

team.init();


let id2 = setInterval(() => {
  if (progress.value >= 60) {
    clearInterval(id2);
    return;
  }
  progress.value += 1;
}, 1000);
const repeatt = document.getElementById("p")
let value = 60;
let id;
 function repeat() {
  document.getElementById('p').innerText = value
  if(value==0) {
    return
  }
 value--
 let id = setTimeout(repeat, 1000)
}
repeat()



