class Option {
  constructor(name) {
    this.name = name;
    this.votes = 0;
  }

  vote() {
    this.votes++;
  }
}

module.exports = Option;
