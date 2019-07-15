# Jasmine

### Suite (describe)
The describe function is for grouping related specs, typically each test file has one at the top level. The string parameter is for naming the collection of specs, and will be concatenated with specs to make a spec's full name. This aids in finding specs in a large suite. If you name them well, your specs read as full sentences in traditional BDD style.

### Specs (it)
Specs are defined by calling the global Jasmine function it, which, like describe takes a string and a function. The string is the title of the spec and the function is the spec, or test. A spec contains one or more expectations that test the state of the code. An expectation in Jasmine is an assertion that is either true or false. A spec with all true expectations is a passing spec. A spec with one or more false expectations is a failing spec.
###### f means focus
###### x means exclude

### Expect
Expectations are built with the function expect which takes a value, called the actual. It is chained with a Matcher function, which takes the expected value.

### Matchers
Each matcher implements a boolean comparison between the actual value and the expected value. It is responsible for reporting to Jasmine if the expectation is true or false. Jasmine will then pass or fail the spec. Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher. 
Check the full list in the [API docs](https://jasmine.github.io/api/edge/matchers.html)
