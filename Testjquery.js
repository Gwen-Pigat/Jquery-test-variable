if (Meteor.isClient) {

$(document).ready(function(){

  var counter = 0
  var victoire = 0
  var defaite = 0

  $(".btn1").click(function(){
  	var counter = 0
  	$(this).text(counter)
  	$(".test").fadeIn(1000)
  	$(".test").css({"background-color" : "#EFEFCE"})

  	$(".test").one("click" ,function(){
  	var random = Math.floor(Math.random()*(21-1)+1)
  	counter = counter + 1
  	$(".btn1").text(counter)
  	if (counter == 9){
  		alert("You win !!")
  		$(".test").hide(1000)
  		victoire = victoire + 1
  		$(".victoires").text(victoire)
  	}
  	if (random > 19){
  		$(this).css({"background-image" : "url(tf.png)"})
  		alert ("You lose !!!!")
  		$(".test").hide(1000)
  		defaite = defaite + 1
  		$(".defaites").text(defaite)
  	}
  	else{
  		$(".btn1").text(counter)
  		$(this).css({"background-color" : "#28C223"})
  	}
   });
  });

  $(".test").one("click" ,function(){
  	var random = Math.floor(Math.random()*(21-1)+1)
  	counter = counter + 1
  	$(".btn1").text(counter)
  	if (counter == 9){
  		alert("You win !!")
  		$(".test").hide(1000);
  		victoire = victoire + 1
  		$(".victoires").text(victoire)
  	}
  	if (random > 19){
  		$(this).css({"background-image" : "url(tf.png)"})
  		alert ("You lose !!!!")
  		$(".test").hide(1000)
  		defaite = defaite + 1
  		$(".defaites").text(defaite)
  	}
  	else{
  		$(this).css({"background-color" : "#28C223"})
  	}
  });
})

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
