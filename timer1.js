const alarm = process.argv.slice(2);

for (let seconds of alarm) {
  if (!isNaN(seconds) && seconds >= 1) {

    setTimeout(() => {
      //process.stdout.write('\x07');
      process.stdout.write('beep' + ' ');
    }, seconds * 1000);
  }
}


