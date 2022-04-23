# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Weiwen Dong**

Time spent: **3** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![basic features + random pattern](http://g.recordit.co/g41WCXz8F6.gif)
![Speed up + basic game playing](http://g.recordit.co/r8OMxo2HgB.gif)
![lost game(after 3 mistake)](http://g.recordit.co/KmUhnMDs8x.gif)
![won game](http://g.recordit.co/607V3AOHCV.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://www.geeksforgeeks.org/how-to-create-an-array-with-random-values-with-the-help-of-javascript/]
[https://stackoverflow.com/questions/5836833/create-an-array-with-random-values]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[I was stuck on the process of writing the function that constructs an array containing random numbers generated between the range of 1 to the number of buttons. It was a challenge because I was most familiar with Java but had limited experience with Javascript. I was confused on how to translate syntax in Java to those in Javascript. In addition, the ADT arrays might have been defined differently from that of Java. Overall, it required me to do more research before I got started to write the code. 
I overcame this challenge by searching through credible online sources, like stackoverflow and geeksforgeek, to look for methods and syntax that I might use to implement it. I looked over the examples given in those resources to make sure that I understood each function correctly and accurately. By doing so, I avoided minor mistakes like forgetting to include +1 after random() * buttonSize so that the random integer ranges from 1 to 4 instead of from 0 to 4. Furthermore, I translated all syntax correctly and completed this additional feature within 10 minutes. I tested it multiple times, and it worked properly to give a random pattern of all six buttons. In the end, I took notes of the syntaxs and methods and memorized them for the future use. ]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[I became really curious about what Glitch does with the javascripts, html, and css we wrote to present all of them in the form of a web page, and how could I create a web page without using the websites like Glitch. Although Glitch makes this process more approachable, I think I have lost control over some of the elements in the web page, like the name for hyperlink of the website. What are some processes that Glitch does for us? What’s the actual payoff? Are people in industry also using the application, or are there other ways around? I want to learn more about tools that we can use to develop a web page in industry.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[I would like to add additional features, including but not limited to the timer feature and different images for the buttons. I really want to incorporate some storyline into this game to make it more unique and original. So, the idea I am having right now is to make the picture for buttons to be a picture of part of the human heart when it was clicked. I would keep the sound for buttons the same because they are similar to the sound made by medical equipment which can measure heart rate. By doing so, I want to make players feel like the setting of the game is in the emergency room, and they are the doctor who must choose the correct series of button, to use peacemaker correctly, to save the patient from death. I also want to add timer feature because it is going to make it more fits in to this emergency room setting. Time is limited in the first aid, and this will make game more realistic. ]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://ucsd.zoom.us/rec/share/3fi398hoXoGzKKPVckj6PTT_-yP87sqZf4kp1O5XOp9DMjGEnFw2gbc1BDXFEhbr.Xa3w7Mo7Mo1z1Pg0?startTime=1650682834000
Passcode: =^xDc&41)


## License

    Copyright [Weiwen Dong]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
