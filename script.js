/******************************************************************************

Scroll to bottom of this file for the creation of a MixedMessages instance and start of the game. To understand how the game works, start at the 'start' method inside the MixedMessages class and work up from there. The first callback function is "getName" which is the first time the user is prompt for an input.

*******************************************************************************/


// Import all arrays from the data folder and prompt-sync from the NPM package
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


  // Handles creation of random number to be used for index by passing it an array
  generateRandomNumber(array) {
    return Math.floor(Math.random()*array.length);
  }


  // Log final result
  getResult() {
    // Create an array for the name value
    const array = this.name.split('');
    const lastLetter = array[array.length - 1]

    // Check for names ending in 's'
    if(lastLetter === 's') {
      console.log(`Your team name is... ${this.name}' ${this.adjective} ${this.noun}`);
    } else {
      // Create team name from the randomly generated variables
      console.log(`Your team name is... ${this.name}'s ${this.adjective} ${this.noun}`);
    }

    // End application
    return;
  }


  // Prompt user for category, use category to select random string of array and update variable then log final team name
  getNoun() {

    // Prompt user input of a specific category
    const noun = prompt('Pick a noun category: Any, Football, Wrestling, Bodypart, or Animal: ');
    // Change all versions of input to lowercase for handling errors
    const nounLower = noun.toLowerCase();

    switch (nounLower) {
      case 'any':
        // Store all noun categories
        const nounArray = [ football, wrestling, bodypart, animal ];
        // Get random index and random category then update the state of noun in MixedMessages constructor
        const nounCategory = nounArray[this.generateRandomNumber(nounArray)];
        this.noun = nounCategory[this.generateRandomNumber(nounCategory)];
        break;

      case 'football':
        // Get random index and update the state of noun in MixedMessages constructor
        this.noun = football[this.generateRandomNumber(football)];
        break;

      case 'wrestling':
        this.noun = wrestling[this.generateRandomNumber(wrestling)];
        break;

      case 'bodypart':
        this.noun = bodypart[this.generateRandomNumber(bodypart)];
        break;

      case 'animal':
        this.noun = animal[this.generateRandomNumber(animal)];
        break;

      default:
        console.log('Sorry, not an option. Please try again.');
        // Prompt user again for proper input
        this.getNoun();
    }

    this.getResult();
  }


  // Prompt user for category, use category to select random string of array and update variable then move to getNoun()
  getAdjective() {

    // Prompt user input of a specific adjective category
    const adjective = prompt('Pick an adjective category: Any, Common, Vulgar, or Sexy? ');
    // Change all versions of input to lowercase for handling errors
    const adjectiveLower = adjective.toLowerCase();

    // Use selected category to late a string in the given array
    switch (adjectiveLower) {
      case 'any':
        // Store all adjectives categories
        const adjectiveArray = [ common, vulgar, sexy ];
        // Get random index and random category then update the state of adjective in MixedMessages constructor
        const adjectiveCategory = adjectiveArray[this.generateRandomNumber(adjectiveArray)];
        this.adjective = adjectiveCategory[this.generateRandomNumber(adjectiveCategory)];
        break;

      case 'common':
        // Get random index and update the state of adjective in MixedMessages constructor
        this.adjective = common[this.generateRandomNumber(common)];
        break;

      case 'vulgar':
        this.adjective = vulgar[this.generateRandomNumber(vulgar)];
        break;

      case 'sexy':
        this.adjective = sexy[this.generateRandomNumber(sexy)];
        break;

      default:
        console.log('Sorry, not an option. Please try again.');
        // Prompt user again for proper input
        this.getAdjective();

    }
    // Move on to selecting a noun
    this.getNoun();
  }


  // Prompt user for category, use category to select random string of array and update variable then move to getAdjective()
  getName() {
    // Prompt user input of a specific name category
    const name = prompt('Pick a name category: Any, Coach, QB, RB, or WR? ');
    // Change all versions of input to lowercase for handling errors
    const nameLower = name.toLowerCase();

    // Use selected category to late a string in the given array
    switch (nameLower) {
      case 'coach':
        // Get random index and update the state of name in MixedMessages constructor
        this.name = coaches[this.generateRandomNumber(coaches)];
        break;

      case 'qb':
        this.name = quarterbacks[this.generateRandomNumber(quarterbacks)];
        break;

      case 'rb':
        this.name = runningbacks[this.generateRandomNumber(runningbacks)];
        break;

      case 'wr':
        this.name = widereceivers[this.generateRandomNumber(widereceivers)];
        break;

      case 'any':
        const nameArray = [ coaches, quarterbacks, runningbacks, widereceivers ];
        const nameCategory = nameArray[this.generateRandomNumber(nameArray)];
        this.name = nameCategory[this.generateRandomNumber(name)];
        break;

      default:
        console.log('Sorry, not an option. Please try again.');
        // Prompt user again for proper input
        this.getName();
    }

    // Move on to selecting an adjective
    this.getAdjective();
  }


  start() {
    prompt('Welcome to the Fantasy Football Name Generator! Press Enter to Start');

    // Start by prompting user for a name category
    this.getName();
  }
}


// Create an instance of the game
const game = new MixedMessages();

// Start MixedMessages
game.start();