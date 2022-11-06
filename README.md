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

## Rakeen Zia's Research(Task 4)

Testing framework Frisby is used by React StoreFront for its API Testing. Jest expects a json response and compares it to set conditions and then passes or fails.

There are not many choices for selecting API tests within React StoreFront. I chose the test ‘getAPIURL.test.js’. It uses Shallow Rendering(). The test first builds and sets buildId to 1 because of beforeEach function and afterEach deletes window.__NEXT_DATA__. The test checks data within the window of __NEXT_DATA__  and compares it with a set variable and passes or fails it based on the result. 

All sources:
https://docs.reactstorefront.io/
https://docs.frisbyjs.com/

