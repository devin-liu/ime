class Poll {
  constructor(question) {
    this.question = question;
    this.options = {};
  }

  addOption(option) {
    this.options[option] = new Option(option);
  }
}


module.exports = Poll;
