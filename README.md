
# _C.R.E.A.M. [Currency Converter]_

#### _Change your money, honey_

#### By _**Melissa Schatz-Miller**_

## Technologies Used

* _JavaScript_
* _webpack_
* _HTML_
* _CSS_

## Description

_This application will allow users to accurately convert amounts of money between any of the currencies listed in our current currencies [currentcies, if you will] list [see below]._  

_To find out how your money stacks up in other countries, Gentle Reader, all you need do is input any amount in the "cash amount" field, select your home currency & your desired currency in the appropriate drop-downs, and click "Change Money." This app will do the dirty work for you [with a little help from [ExchangeRate-API](https://www.exchangerate-api.com/)]._

#### Currentcies
* US Dollars, United States of America
* UAE Dirham, United Arab Emirates
* Afghan Afghani, Afghanistan
* Bermudian Dollar, Bermuda
* Bolivian Boliviano, Bolivia
* Falkland Islands Pound, Falkland Islands

## Setup/Installation Requirements

1. _Clone [this repository](https://github.com/tigertiger/cream) to an empty folder or to your desktop.  
Instructions for cloning can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)._
2. _Open the cream folder in Visual Studio Code or your alternate code editor of choice.
   Please note that these instructions were written with VS Code MacOS in mind. If you are using a different code editor/OS, the process may vary. You can download VS Code here: [VS Code Download](https://code.visualstudio.com/download)_
3. _In VS Code, use the Terminal dropdown to open a new Terminal_
4. _Run the command ```npm install``` to set up the environment_
5. _Visit [https://www.exchangerate-api.com/](https://www.exchangerate-api.com/) & follow their instructions to get your free API Key_
6. _In your terminal, use ```touch .env``` to create a new .env file to hold your API Key_
7. _Next, run the command ```npm install dotenv-webpack@2.0.0 --save-dev``` to let webpack know what's going on_
8. _Add the following to your .env file: ```API_KEY: YOUR-API-KEY-GOES-HERE```_
9. _Run ```npm run start``` to build & access your live development environment_
10. _Edit, play, test, convert currency, etc. to your heart's content_

## Known Bugs

* _Converting to USD is currently broken_

## License

_[GPL](https://opensource.org/licenses/gpl-license)_
_Copyright (c) 2021, Melissa Schatz-Miller_

## Contact Information

Melissa Schatz-Miller <melissa.scmi@gmail.com>  

_Please feel free to reach out to me with suggested changes/improvements, or if you have any questions._