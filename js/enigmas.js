
function enigmaOk( solucao, proximo ){

	let resposta = document.querySelector("#resposta").value;
	if( resposta.toLowerCase().trim() != solucao ){
		let texto_antigo = document.querySelector(".btn").innerHTML;
		let cor_antiga = document.querySelector(".btn").style.backgroundColor;

		document.querySelector(".btn").style.backgroundColor = "red";
		document.querySelector(".btn").innerHTML = "Incorreto";

		setTimeout(()=>{
			document.querySelector(".btn").style.backgroundColor = cor_antiga;
			document.querySelector(".btn").innerHTML = texto_antigo;
		}, 1000)

		return;
	}

	if( proximo == 8 ){
		window.location.href = "../fimenigma.html";
		return;
	}

	alert("Parabéns, você solucionou esse enigma!\nSiga para o enigma "+proximo);
	window.location.href = "../index.html";

	let enigma = localStorage.getItem("enigma");
	enigma = parseInt(enigma);
	if( enigma >= proximo )
		return
	localStorage.setItem("enigma", proximo);
}

$(document).ready(function(){

	// $(".card-download").click(function(){
		
	// 	var link = $(".card-download").attr("rel");
		
	// 	$.ajax({ 
		
	// 		 url: link, 
	// 		 data: 'download='+link, 
	// 		 dataType: 'json', 
	// 		 type: 'post'
		
		
	// 	});
	

		
	

	// });

});

