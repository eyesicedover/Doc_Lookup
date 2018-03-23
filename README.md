# template
#### JavaScript, JQuery, and Node based html project, 3-21-18  

#### _By Stephanie Faber_  

## Description
_Description here_  

## Specifications

1. User enters their birth date into the page.
* Example input: User enters 12/12/1992
* Example output: The value of that date is stored

2. The input date is converted into seconds.
* Example input: date of 12/12/1992 stored in js datetime format, date of today
* Example output: use getTime() to return milliseconds, divide by 1000 to return seconds.

3. Take seconds of user input and todays date and subtract them to determine age in seconds.
* Example input: todaysDateInSeconds - usersDateInSeconds
* Example output: usersAgeInSeconds

4. Convert seconds to years. There are roughly 31,536,000 seconds in a year on Earth.
* Example input: usersAgeInSeconds/31536000
* Example output: usersAgeInYearsEarth

5. Convert age in years (25.27 in this example) on Earth to years on another planet, like Mars.
* Example input: usersAgeInYearsEarth/1.88 (25.27/1.88)
* Example output: You are 13.44 years old on Mars

6. User enters the age of their life expectancy on Earth. Convert it to the age on another planet, for example Mars.
* Example input: My age expectancy is 83 years.
* Example output: That would be 43.7 years on Mars.

7. Determine if difference between users age and age of life expectancy. Return years left on that planet, for example Mars.
* Example input: Your age on Mars is 13.44 years, and you expect to live until you are 43.7 Martian years old.
* Example output: You have 30.26 Martian years left.

8. Should user's age exceed the given life expectancy, return the number of years they have exceeded that life expectancy.
* Example input: Your age on Mars is 45.89 years, and you expect to live until you are 43.7 Martian years old.
* Example output: You have lived 2.19 Martian years past your expectancy date! Congratulations!


## Setup/Installation Requirements

* _Clone Repository_

* _Download and install Node_

* _Open command prompt (or your preferred command line shell), navigate to project directory, and enter >npm install_

* _In console enter >npm build_

* _Check for errors. If there are any, please report them to me at my email address included on this README_

* _In console enter >npm run start_

* _The program should open in a new Chrome window_

* _Use the program_

* _When ready to quit, close the Chrome window and hold control+c to terminate the program in console_

Github Repository Link ()

## Support and contact details

_Please email me directly at eyesicedover@gmail.com_

## Technologies Used

* HTML
* Jquery
* Bootstrap
* Node
* npm
* Jasmine
* Karma
* Lint

### License

*MIT License*

Copyright (c) 2018 **_Stephanie Faber_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
