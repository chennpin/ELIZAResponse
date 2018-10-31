
Template.body.onRendered(function() {

});

Template.formSection.events({
  "click #submitMsg": function(event) {
    event.preventDefault();
    let myMsgObj = document.getElementById("myMsg");
    let myMsg = myMsgObj.value;
    var helloAns = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];//符合How are you的回答
	var otherAns = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];//不符合的回答
	var randomResponse = function() {
	let randomIndex = Math.random()*10;
	randomIndex = Math.floor(randomIndex);
	if(myMsg === "How are you?"){
		let ELIZAHelloAns = helloAns[randomIndex];
		return ELIZAHelloAns;
	}
	else{
		let ELIZAOtherAns = otherAns[randomIndex];
		return ELIZAOtherAns;
	}
};
    let conBoxObj = document.getElementById("conversationBox");
    let oldConversation = conBoxObj.value;
    let newConversation = oldConversation+"\n"+"You: "+myMsg;
    let ELIZAResponse = randomResponse();
    newConversation = newConversation+"\n"+"ELIZA: "+ELIZAResponse;
    conBoxObj.value = newConversation;
    myMsgObj.value = "";
  },
  "click #resetMsg": function() {
    let conBoxObj = document.getElementById("conversationBox");
    conBoxObj.value = "ELIZA: How are you doing?";
  }
});