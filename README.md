# proj-hnr
## Meeting 1 - 19/10/22
###  Attendees
Hussain
Noureen
Rakeen

Creation of github repository
Discussion regarding the framework to be used for testing
Discussion of releveant and possible test cases using gherkin

------------------------------------------------------------------------------


## Meeting 2 - 21/10/22
###  Attendees
Hussain
Noureen
Rakeen
Sir Jawad

Sir guided us on the issues and how we should take this further.
Sir helped us install CodeceptJS.
[Recorded Video of what we learnt](https://drive.google.com/file/d/1iJrxqXGwnfchdMe2ttF-RFQ85lDuSHgY/view)

------------------------------------------------------------------------------


## Meeting 3 - 22/10/22
###  Attendees
Hussain
Noureen
Rakeen

Hussain made his UI framework and pulled request on GitHub, Noureen and Rakeen cloned that framework to perform their own test cases.

------------------------------------------------------------------------------


## Meeting 4 - 27/10/22
###  Attendees
Hussain
Noureen
Rakeen

- Exploring API Testing 
- Finalising tests to do by each person
- Reviewing last time's work to see if we miss anything

------------------------------------------------------------------------------


## Meeting 5 - 02/11/22
###  Attendees
Hussain
Noureen
Rakeen

- Finalize API Testing 
- Finish tests of api testing
- Review, finalize and test all API tests

------------------------------------------------------------------------------


## Meeting 6 - 06/11/22
###  Attendees
Hussain
Noureen
Rakeen

- Explored Jest
- Explored TestNG
- Explored JUnit Assert
- Explored Enzyme
- Explored One Test File each by each member : From the available test files on GitHub [React Storefront](https://github.com/storefront-foundation/react-storefront)
- Explored tests from [Teammates](https://github.com/TEAMMATES/teammates)
- Enzyme was not installing so we utilised our time to study more about TestNG

[Image 1](https://raw.githubusercontent.com/hussainarslan/files/main/img1.jpg)
[Image 2](https://raw.githubusercontent.com/hussainarslan/files/main/img2.jpg)
[Image 3](https://raw.githubusercontent.com/hussainarslan/files/main/img3.jpg)
[Image 4](https://raw.githubusercontent.com/hussainarslan/files/main/img4.jpg)

------------------------------------------------------------------------------

## Rakeen Zia's Research(Task 4)

Testing framework Frisby is used by React StoreFront for its API Testing. Jest expects a json response and compares it to set conditions and then passes or fails.

There are not many choices for selecting API tests within React StoreFront. I chose the test ‘getAPIURL.test.js’. The test first builds and sets buildId to 1 because of beforeEach function and afterEach deletes window.__NEXT_DATA__. The test checks data within the window of __NEXT_DATA__  and compares it with a set variable and passes or fails it based on the result. 

All sources:
https://docs.reactstorefront.io/
https://docs.frisbyjs.com/

------------------------------------------------------------------------------

## Hussain Arslan's Findings (Task 4)

React Storefront uses the Enzyme framework for UI testing and unit testing. The documentation is available on their official [website](https://enzymejs.github.io/enzyme/) . The UI test that I analysed was the [MenuButton.test.js](https://github.com/storefront-foundation/react-storefront/blob/master/test/menu/MenuButton.test.js) 

Enzyme has three types of rendering, Full DOM rendering, shallow rendering and static rendering. 

Full DOM rendering is used for use cases where there are components that interact with DOM APIs or there is a need to test components that are wrapped in higher order components. 

This test uses full DOM rendering as suggested by the { mount } while importing Enzyme. This test case is all about whether or not the menu button renders correctly. For each case a wrapper is created and a menu button is mounted and after each test is complete that wrapper is unmounted. The name of the function is Fill. If the mounting fails or the icon is not mounted to the menu button, the test fails. 

------------------------------------------------------------------------------

## Noureen Fatima's Findings (Task 4)

React Storefront uses [Enzyme testing framework](https://enzymejs.github.io/enzyme/) along with jest. I tried to install enzyme on our project but failed. I did study a few test cases available on the [github](https://github.com/storefront-foundation/react-storefront) .
What enzyme does is it goes to all the files that end with “.test.js” and runs the test cases.
The one I will be discussing in detail and studying thoroughly is [ErrorBoundry.test.js](https://github.com/storefront-foundation/react-storefront/blob/master/test/ErrorBoundary.test.js)

-Import {mount} from enzyme 

  -Full DOM rendering, including child components, because there are components that interact with child components and they need to be tested too.
  
-Import {eventListnersMock} from [‘./mocks/mockHelper’](https://github.com/storefront-foundation/react-storefront/blob/master/test/mocks/mockHelper.js)

  -From where it uses [spyOn.mockImplementation](https://echobind.com/post/how-to-mock-using-jest-spyon-part-2-3) using [jest](https://jestjs.io/docs/jest-object#jestspyonobject-methodname)
  
-Import ErrorBoundary from [‘react-storefront/ErrorBoundary’](https://github.com/storefront-foundation/react-storefront/blob/master/src/ErrorBoundary.js) 

-The ErrorBoundary class is exported and basically gives a response on errors

-wrapper is a variable which is mounted and unmounted in this test case.

-beforeAll calls the eventListnerMock imported.

-afterAll restores all mocks

-afterEach the wrapper is unmounted

-expect.toBe is used to compare the expected text

------------------------------------------------------------------------------

##The Issue for Task 5 

React 17 is being used in React Storefront and enzyme was not installing on that. We tried multiple websites and ways but all in vain. 

------------------------------------------------------------------------------
0 verbose cli C:\Program Files\nodejs\node.exe C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js
1 info using npm@8.15.0
2 info using node@v16.17.0
3 timing npm:load:whichnode Completed in 1ms
4 timing config:load:defaults Completed in 5ms
5 timing config:load:file:C:\Program Files\nodejs\node_modules\npm\npmrc Completed in 3ms
6 timing config:load:builtin Completed in 3ms
7 timing config:load:cli Completed in 2ms
8 timing config:load:env Completed in 1ms
9 timing config:load:file:C:\Users\Dell\Documents\GitHub\proj-hnr\.npmrc Completed in 1ms
10 timing config:load:project Completed in 3ms
11 timing config:load:file:C:\Users\Dell\.npmrc Completed in 0ms
12 timing config:load:user Completed in 0ms
13 timing config:load:file:C:\Users\Dell\AppData\Roaming\npm\etc\npmrc Completed in 0ms
14 timing config:load:global Completed in 1ms
15 timing config:load:validate Completed in 3ms
16 timing config:load:credentials Completed in 1ms
17 timing config:load:setEnvs Completed in 1ms
18 timing config:load Completed in 20ms
19 timing npm:load:configload Completed in 21ms
20 timing npm:load:mkdirpcache Completed in 1ms
21 timing npm:load:mkdirplogs Completed in 0ms
22 verbose title npm install enzyme enzyme-adapter-react-16 enzyme-to-json
23 verbose argv "install" "--save-dev" "enzyme" "enzyme-adapter-react-16" "enzyme-to-json"
24 timing npm:load:setTitle Completed in 2ms
25 timing config:load:flatten Completed in 4ms
26 timing npm:load:display Completed in 5ms
27 verbose logfile logs-max:10 dir:C:\Users\Dell\AppData\Local\npm-cache\_logs
28 verbose logfile C:\Users\Dell\AppData\Local\npm-cache\_logs\2022-11-06T17_05_14_578Z-debug-0.log
29 timing npm:load:logFile Completed in 7ms
30 timing npm:load:timers Completed in 0ms
31 timing npm:load:configScope Completed in 0ms
32 timing npm:load Completed in 38ms
33 timing arborist:ctor Completed in 1ms
34 silly logfile start cleaning logs, removing 2 files
35 silly logfile done cleaning log files
36 timing idealTree:init Completed in 1629ms
37 timing idealTree:userRequests Completed in 5ms
38 silly idealTree buildDeps
39 silly fetch manifest enzyme@*
40 timing arborist:ctor Completed in 0ms
41 http fetch GET 200 https://npm-proxy.fury.io/moovweb/enzyme 2453ms (cache revalidated)
42 silly fetch manifest enzyme-adapter-react-16@*
43 http fetch GET 200 https://npm-proxy.fury.io/moovweb/enzyme-adapter-react-16 359ms (cache revalidated)
44 silly fetch manifest react@^17.0.1
45 http fetch GET 200 https://npm-proxy.fury.io/moovweb/react 493ms (cache revalidated)
46 silly fetch manifest react@^16.0.0-0
47 timing idealTree Completed in 4990ms
48 timing command:install Completed in 5012ms
49 verbose stack Error: unable to resolve dependency tree
49 verbose stack     at Arborist.[failPeerConflict] (C:\Program Files\nodejs\node_modules\npm\node_modules\@npmcli\arborist\lib\arborist\build-ideal-tree.js:1428:25)
49 verbose stack     at Arborist.[loadPeerSet] (C:\Program Files\nodejs\node_modules\npm\node_modules\@npmcli\arborist\lib\arborist\build-ideal-tree.js:1394:34)
49 verbose stack     at async Arborist.[buildDepStep] (C:\Program Files\nodejs\node_modules\npm\node_modules\@npmcli\arborist\lib\arborist\build-ideal-tree.js:976:11)
49 verbose stack     at async Arborist.buildIdealTree (C:\Program Files\nodejs\node_modules\npm\node_modules\@npmcli\arborist\lib\arborist\build-ideal-tree.js:218:7)
49 verbose stack     at async Promise.all (index 1)
49 verbose stack     at async Arborist.reify (C:\Program Files\nodejs\node_modules\npm\node_modules\@npmcli\arborist\lib\arborist\reify.js:154:5)
49 verbose stack     at async Install.exec (C:\Program Files\nodejs\node_modules\npm\lib\commands\install.js:145:5)
49 verbose stack     at async module.exports (C:\Program Files\nodejs\node_modules\npm\lib\cli.js:78:5)
50 verbose cwd C:\Users\Dell\Documents\GitHub\proj-hnr
51 verbose Windows_NT 10.0.19043
52 verbose node v16.17.0
53 verbose npm  v8.15.0
54 error code ERESOLVE
55 error ERESOLVE unable to resolve dependency tree
56 error
57 error While resolving: [1mtest-storefront[22m@[1m0.0.0[22m
57 error Found: [1mreact[22m@[1m17.0.2[22m[2m[22m
57 error [2mnode_modules/react[22m
57 error   [1mreact[22m@"[1m^17.0.1[22m" from the root project
57 error
57 error Could not resolve dependency:
57 error [35mpeer[39m [1mreact[22m@"[1m^16.0.0-0[22m" from [1menzyme-adapter-react-16[22m@[1m1.15.7[22m[2m[22m
57 error [2mnode_modules/enzyme-adapter-react-16[22m
57 error   [33mdev[39m [1menzyme-adapter-react-16[22m@"[1m*[22m" from the root project
57 error
57 error Fix the upstream dependency conflict, or retry
57 error this command with --force, or --legacy-peer-deps
57 error to accept an incorrect (and potentially broken) dependency resolution.
57 error
57 error See C:\Users\Dell\AppData\Local\npm-cache\eresolve-report.txt for a full report.
58 verbose exit 1
59 timing npm Completed in 5225ms
60 verbose unfinished npm timer reify 1667754314780
61 verbose unfinished npm timer reify:loadTrees 1667754314796
62 verbose unfinished npm timer idealTree:buildDeps 1667754316432
63 verbose unfinished npm timer idealTree:#root 1667754316433
64 verbose code 1
65 error A complete log of this run can be found in:
65 error     C:\Users\Dell\AppData\Local\npm-cache\_logs\2022-11-06T17_05_14_578Z-debug-0.log

------------------------------------------------------------------------------

## Noureen Fatima's Findings (Task 5)

After many failed attempts on React Store front, we could not install enzyme. So we moved to Teammates as mentioned above, but failed to run testNG cases as the suite was not working properly. 


After exploring more we found [Exercism](https://exercism.org/)[(Open Source Java Exercise code](https://github.com/exercism/java], in which they used JUnit and AssertJ(Open source java testing framework). 

The link to [Exercism Unit testing](https://github.com/karissa-kaal/proj-hnr-Unit-ExercismTest) we performed.

------------------------------------------------------------------------------


## Meeting 7 - 22/11/22
###  Attendees
Hussain
Noureen
Rakeen

We made a test case each. And uploaded it on the new Git reprository.
