import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var elements =  this.get('store').findAll('school');
    elements.forEach(function(n,i){
        console.log('hi');
    });
    return elements;
  },
  actions: {
  	onShow(){
  		console.log('It works');
  	}
  }
});