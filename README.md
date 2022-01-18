This repo is a comparison of tools related to cypress tests result organisation.

‼️ _IMPORTANT_ ‼️ after running any of these examples global defualt version of Cypress would be patched. It is done by `cy2` package and otherwise would not allow to use anything except cypress dashboard.
After running test in this project on your machine consider reinstalling Cypress completely by removing this folder `~/Library/Caches/Cypress/{default version}/` (run `cypress -v` to find out default version). You can read more [in this github issue](https://github.com/sorry-cypress/cy2/issues/19)

# Cypress dashboard [[pricing](https://www.cypress.io/pricing/)]
Default paid tool provided by Cypress. To play with it:
* go to [https://www.cypress.io/dashboard/](https://www.cypress.io/dashboard/), register, create a project
* replace projectId in `cypress.cypress-dashboard.json` with yours
* create `.env` file and put there a line `CYPRESS_DASHBOARD_RECORD_KEY=<your record key>`
* run `npm run run:cypress-dashboard`
* Observe results on cypress dashboard in the browser


# Currents.dev [[pricing](https://currents.dev/#pricing)]
Less featured and less expensive tool based on sorry-cypress
* go to [https://www.cypress.io/](https://www.cypress.io/pricing/), register, create a project
* replace projectId in `cypress.currents.json` with yours
* create `.env` file and put there a line `CURRENTS_RECORD_KEY=<your record key>`
* run `npm run run:currents`
* Observe results on currents.dev in the browser


# Self-hosted sorry-cypress [*Free*]
Even less featured but free self-hosted tool
* run `sorry-docker:start`
* go to `http://localhost:8080/` in the browser and create project with custom projectId
* replace projectId in `cypress.sorry-cypress.json` with yours
* run `npm run run:sorry-cypress`
* Observe results on `http://localhost:8080/` in the browser


# Self-hosted Allure[*Free*]
Tool to collect and analyze test statistics
* run `npm run run:local:allure`
* run `allure-docker:start` and observe results 


### Links
[Parallelizing Cypress with Jenkins, AWS, and Sorry-Cypress](https://medium.com/geekculture/parallelizing-cypress-with-jenkins-aws-and-sorry-cypress-8241331fe50f)
