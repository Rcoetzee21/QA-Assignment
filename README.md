Young Capital QA assignment

## Description

The following project contains a cypress/cucumber test suite that tests the young capital simple page app according to the field requirements specified

### Test execution
The following tags are specified in the feature files and can be used to execute specific execution flows
* @regression
* @registration
* @edit
* @delete

```
npx cypress run -e TAGS='@registration' --headed                     
```
Alternatively the following commands can also be used to run the test suites 
```
* npm run full-regression-headed-chrome
* npm run full-regression-headless-chrome
* npm run registration-tests-headed-chrome
* npm run registration-tests-headless-chrome
* npm run edit-tests-headed-chrome
* npm run edit-tests-headless-chrome
* npm run delete-tests-headed-chrome
* npm run delete-tests-headless-chrome


```

