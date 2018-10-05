Feature: Test the homepage
@smoke
Scenario:  Verify Course Details


When Get all the headings
And Click on 'Selenium Framework Course' course
Then Shoud see 'Selenium Framework Course' under Course Details Page
Then Read all the courses from table
|Courses|Duration|
|Test1|2|
|ABC|4|

# @regression
# Scenario:  Verify Course Details Scenario 2


# When Get all the headings
# And Click on 'Selenium Framework Course' course
# Then Shoud see 'Selenium Framework Course' under Course Details Page

# @regression
# Scenario:  Verify Course Details Scenario 2


# When Get all the headings
# And Get the data from External JSON file

# @regression
# Scenario:  Verify Course Details Scenario 2


# When Get all the headings
# And Get the data from External Excel file
