const Poll = require('./Poll.js');
const Option = require('./Option.js');
const poll = new Poll('Who should be president of USA?');
let app = require('lotion')({
  initialState: {
    count: 0,
    poll,
    options: {}
  }
})





app.use((state, tx) => {
  console.log(state)
  if(tx.action === 'vote'){
    if(!state.options[tx.option]) state.options[tx.option] = new Option(tx.option);
    state.options[tx.option].votes++;
  }

  if(tx.action === 'addOption'){
    if(!state.options[tx.option]) state.options[tx.option] = new Option(tx.option);
  }

  state.count++
})

app.listen(8000)
