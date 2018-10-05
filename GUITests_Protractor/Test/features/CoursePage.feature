Feature: Test the homepage
@smoke
Scenario:  Verify Course Details


When Get all the headings
And Click on 'Selenium Framework Course' course
Then Shoud see 'Selenium Framework Course' under Course Details Page
