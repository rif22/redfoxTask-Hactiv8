//input "hello world!"
//output "!dlrow olleh"

	
	function balikString (hello) {
		
		var balikKata = '';

		for (var i = hello.length -1; i >= 0; i--) {
			balikKata += hello [i]
		}
		return balikKata
	}
	console.log (balikString('Hello world!'))