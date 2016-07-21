const stateMachine = {
  state: Object.freeze({
    a: 1
  }),
  update: function(k, v){
    console.log(this);
    this.state = Object.freeze({a: v});
    console.log(this);
  }
};
export default stateMachine;
