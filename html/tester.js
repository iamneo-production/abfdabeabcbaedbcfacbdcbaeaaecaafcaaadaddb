const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  console.log("hai")
  try{
    await page.goto('https://8081-abfdabeabcbaedbcfacbdcbaeaaecaafcaaadaddb.premiumproject.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    console.log('TESTCASE:testcase_for_aboutsection:success');
  
    }catch(e){
    console.log('TESTCASE:testcase_for_aboutsection:failure');
  }

  
})();
