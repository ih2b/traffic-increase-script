const puppeteer = require('puppeteer');
async function main() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--proxy-server=socks5://127.0.0.1:9050']
  });
  const page = await browser.newPage();
  await page.goto("your link");
  setTimeout(() => {
    browser.close();
  }, 1500);

}
async function loop(){
while(true){
	try{
		await main();
	}
	catch(error) {
  console.error(error);
}

	
}

}
loop();
