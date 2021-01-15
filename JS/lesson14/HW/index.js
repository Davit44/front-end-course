const btnScoreFirst = document.getElementById("scoreFirst");
const btnAcceptFirst = document.getElementById("acceptFirst");
const btnScoreSecond = document.getElementById("scoreSecond");
const btnAcceptSecond = document.getElementById("acceptSecond");
const btnRedFirst = document.getElementById("redFirst");
const btnRedSecond = document.getElementById("redSecond");
const btnReset = document.getElementById("reset");

const textScoreFirst = document.getElementById("scored-text1");
const textAcceptFirst = document.getElementById("accepted-text1");
const textScoreSecond = document.getElementById("scored-text2");
const textAcceptSecond = document.getElementById("accepted-text2");
const textRedFist = document.getElementById("red-card-team1");
const textRedSecond = document.getElementById("red-card-team2");
const textPlayersFirst = document.getElementById("players1");
const textPlayersSecond = document.getElementById("players2");

const teamFirst = {
  players: 11,
  subStitute: 5,
  goals: {
    scored: 0,
    accepted: 0,
  },
  disqualified: 0,
  time: 0,
  btns: {
    score: btnScoreFirst,
    accept: btnAcceptFirst,
    red: btnRedFirst,
  },
  texts: {
    score: textScoreFirst,
    accept: textAcceptFirst,
    red: textRedFist,
    players: textPlayersFirst,
  },
};

const teamSecond = {
  players: 11,
  subStitute: 5,
  goals: {
    scored: 0,
    accepted: 0,
  },
  disqualified: 0,
  time: 0,
  btns: {
    score: btnScoreSecond,
    accept: btnAcceptSecond,
    red: btnRedSecond,
  },
  texts: {
    score: textScoreSecond,
    accept: textAcceptSecond,
    red: textRedSecond,
    players: textPlayersSecond,
  },
};

const team = {
  teamFirst: teamFirst,
  teamSecond: teamSecond,
  btns: btnReset,

  changeScoreFirst() {
    this.teamFirst.goals.scored++;
    this.teamSecond.goals.accepted++;

    this.teamFirst.texts.score.innerText = this.teamFirst.goals.scored;
    this.teamSecond.texts.accept.innerText = this.teamSecond.goals.accepted;
  },
  changeScoreSecond() {
    this.teamSecond.goals.scored++;
    this.teamFirst.goals.accepted++;

    this.teamSecond.texts.score.innerText = this.teamSecond.goals.scored;
    this.teamFirst.texts.accept.innerText = this.teamFirst.goals.accepted;
  },

  redCardCountFirst () {
    this.teamFirst.disqualified++;
    this.teamFirst.players--;
    // function technicalDefeat () {
    //     if (this.teamFirst.players > 6) {
    //     return this.teamFirst.players--;
    //     } else  {
    //         return "Second Team Win"
    //     }  
    // }; 
    this.teamFirst.texts.red.innerText = this.teamFirst.disqualified;
    this.teamFirst.texts.players.innerText = this.teamFirst.players;
  },

  redCardCountSecond () {
    this.teamSecond.disqualified++;
    this.teamSecond.players--;
    this.teamSecond.texts.red.innerText = this.teamSecond.disqualified;
    this.teamSecond.texts.players.innerText = this.teamSecond.players;
  },

  resetGoals() {
    this.teamFirst.goals.scored = 0;
    this.teamFirst.goals.accepted = 0;
    this.teamSecond.goals.scored = 0;
    this.teamSecond.goals.accepted = 0;
    this.teamFirst.disqualified = 0;
    this.teamFirst.players = 11;
    this.teamSecond.disqualified = 0;
    this.teamSecond.players = 11;


    this.teamFirst.texts.score.innerText = 0;
    this.teamFirst.texts.accept.innerText = 0;
    this.teamSecond.texts.score.innerText = 0;
    this.teamSecond.texts.accept.innerText = 0;
    this.teamFirst.texts.red.innerText = 0;
    this.teamFirst.texts.players.innerText = 11;
    this.teamSecond.texts.red.innerText = 0;
    this.teamSecond.texts.players.innerText = 11;
  },
  initTeam() {
    this.teamFirst.btns.score.onclick = () => this.changeScoreFirst();
    this.teamFirst.btns.accept.onclick = () => this.changeScoreSecond();

    this.teamSecond.btns.score.onclick = () => this.changeScoreSecond();
    this.teamSecond.btns.accept.onclick = () => this.changeScoreFirst();

    this.teamFirst.btns.red.onclick = () => this.redCardCountFirst();
    this.teamSecond.btns.red.onclick = () => this.redCardCountSecond();



    this.btns.onclick = () => this.resetGoals();
  },
};

team.initTeam();
