const { setHeadlessWhen } = require('@codeceptjs/configure');
const server = require('./server/server');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
//--window-size=1920,1200 /--headless 'chromium'
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './steps/create_user_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://automationpractice.com/index.php',
      show: true,
      browser: process.env.BROWSER || 'chromium',
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: {
          args: ["--window-size=1920,1200"]
        }
      },
      Mochawesome: {
        uniqueScreenshotNames: true
    }
    }
  },
  include: {
    I: './steps_file.js',
    home_page: './pages/home_page.js',
    login_page: './pages/login_page.js',
    create_user_page: './pages/create_user_page.js',
    my_account_page: './pages/my_account_page.js',
  },
  bootstrap: null, //'./server/server.js',
  teardown: null, //'./server/server.js',
  mocha: {},
  name: 'Aula_1',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        user: {
          // loginAdmin function is defined in `steps_file.js`
          login: (I) => {
            I.amOnPage('/')
            I.click('.login')
            I.waitForElement('#email', 10)
            I.fillField('#email','adrielson2@adrielson.com')
            console.log('Preencheu o email')
            I.fillField('#passwd',secret('12345qa'))
            console.log('Preencheu o email')
            I.click('#SubmitLogin')
            console.log('Logou')
          },
          // if we see `Admin` on page, we assume we are logged in
             check: (I) => {
             I.amOnPage('/');
             I.see('Adrielson Pinheiro');
            }
          
        }  
      }
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    },
    mocha: {
      reporterOptions: {
          reportDir: {

          }
      }
    },
    allure: {
      enabled: true
    }
  }  
}