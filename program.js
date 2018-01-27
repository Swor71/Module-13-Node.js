process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
	process.stdout.write('Write "system" to get system info; "version" to get Node.js version or "exit" to end program\n\n')
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case 'version':
				console.log(`Node.js version: ${process.version}`);
				break;
			case 'system':
				console.log(`Your system is: ${process.env.os}`);
				//console.log(`This platform is ${process.platform}`);
				break;
			case 'exit':
				process.exit();
			default:
				process.exit();
				break;
		}
	}	
})