const prompt = require('prompt-sync')({sigint: true});
const { widereceivers, runningbacks, quarterbacks, coaches } = require('./data/names');
const { common, vulgar, sexy } = require('./data/adjectives');
const { football, wrestling, bodypart, animal } = require('./data/nouns')


class MixedMessages {
  constructor() {
    this.name ='',
    this.adjective = '',
    this.noun = ''
  }

  getNoun() {
    console.log('We\'ve got an adjective: ' + this.adjective);
    const noun = prompt('Pick a noun category: Any, Football, Wrestling, Bodypart, or Animal: ');
    const nounLower = noun.toLowerCase();
    switch (nounLower) {
      case 'football':
        this.noun = football[Math.floor(Math.random()*football.length)];
        break;
      case 'wrestling':
        this.noun = wrestling[Math.floor(Math.random()*wrestling.length)];
        break;
      case 'bodypart':
        this.noun = bodypart[Math.floor(Math.random()*bodypart.length)];
        break;
      case 'animal':
        this.noun = animal[Math.floor(Math.random()*animal.length)];
        break;
      default:
        const nounArray = [ football ];
        const noun = nounArray[Math.floor(Math.random()*nounArray.length)];
        this.noun = noun[Math.floor(Math.random()*noun.length)];
    }
    console.log(`Your team name is... ${this.name}'s ${this.adjective} ${this.noun}`);
    return;
  }

  getAdjective() {
    console.log('We\'ve got a name: ' + this.name)
    const adjective = prompt('Pick an adjective: Any, Common, Vulgar, or Sexy? ');
    const adjectiveLower = adjective.toLowerCase();
    switch (adjectiveLower) {
      case 'any':
        const adjectiveArray = [ common, vulgar, sexy ];
        const adjective = adjectiveArray[Math.floor(Math.random()*adjectiveArray.length)];
        this.adjective = adjective[Math.floor(Math.random()*adjective.length)];
        break;
      case 'common':
        this.adjective = common[Math.floor(Math.random()*coaches.length)];
        break;
      case 'vulgar':
        this.adjective = vulgar[Math.floor(Math.random()*coaches.length)];
        break;
      case 'sexy':
        this.adjective = sexy[Math.floor(Math.random()*coaches.length)];
        break;
      default:
        console.log('Sorry, not an option. Please try again.');
        this.getAdjective();
    }
    this.getNoun();
  }

  getName() {
    const name = prompt('Pick a name: Any, Coach, QB, RB, or WR? ');
    const nameLower = name.toLowerCase();

    switch (nameLower) {
      case 'coach':
        this.name = coaches[Math.floor(Math.random()*coaches.length)];
        break;
      case 'qb':
        this.name = quarterbacks[Math.floor(Math.random()*quarterbacks.length)];
        break;
      case 'rb':
        this.name = runningbacks[Math.floor(Math.random()*runningbacks.length)];
        break;
      case 'wr':
        this.name = widereceivers[Math.floor(Math.random()*widereceivers.length)];
        break;
      case 'any':
        const nameArray = [ coaches, quarterbacks, runningbacks, widereceivers ];
        const name = nameArray[Math.floor(Math.random()*nameArray.length)];
        this.name = name[Math.floor(Math.random()*name.length)];
        break;
      default:
        console.log('Sorry, not an option. Please try again.');
        this.getName();
    }
    this.getAdjective();
  }

  start() {
    prompt('Welcome to the Fantasy Football Name Generator! Press Enter to Start');
    this.getName();
  }
}

const game = new MixedMessages();
game.start();