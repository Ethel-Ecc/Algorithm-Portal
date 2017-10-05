// Hide the displaySection once the page loads
function hideDisplaySection() {
    "use strict";
    document.getElementById('displaySection').style.visibility = 'hidden';
    document.getElementById('mainPortal').style.visibility = 'hidden';
}//End of the Hide display Section.
//AnimateScroll Section
    function animateScroll() {
        let anchor = document.getElementById('mainPortal');
        let anchorPos = anchor.offsetTop;
        if (anchorPos !== 0 && this.hash !== '') {
            $("#algorithmPortal").fadeOut("slow");
            anchor.style.visibility = 'visible';
            $('html, body').animate({scrollTop: $(anchor).offset().top}, 1000);
        }
    }
//Global variable declaration and // user choice selection
    let parentDiv = document.getElementById('displaySection');
    let counter = 1;
    let temp = [];
    let arrHolder = [];
    let arrChunk = [];
    let slasherArr = [];
    let arrMutation = [];
    let clickCount = 1;
    let res = '';
    let destroyerArrVal = [];
    let chosenDestroy = [];
    let unSortArr = [];
    let valuesToSortArr = [];

    let algorithmOptions = document.getElementById('algorithmOptions');
    let pElem = document.getElementById('paraDescription');
    algorithmOptions.addEventListener('change', algorithmChoice); // When a new <option> is selected
    function algorithmChoice() {
        "use strict";
        let index = algorithmOptions.selectedIndex;
        switch (index) {
            case 1:
                pElem.innerHTML = 'The String-Reversal algorithm utilizes the JS built-in string and array methods.'+
                    ' It uses the array method for character segregation. Your inputs are captured as you type ' +
                    'and run through the algorithm which produces the output in the display section.';
                clearDisplay(); // Remove all Other elements
                displayBlock();
                outputDiv();
                option1Elements(); // String Reversal Ops
                break;
            case 2:
                pElem.innerHTML = 'Number Factorization describes the product of all positive integers less than or' +
                    ' equal to n(where n is a given positive integer). The value of 0! is 1, according to the' +
                    ' convention for an empty product. The factorial operation is encountered in many areas of' +
                    ' mathematics, notably in Combinatorics, Algebra, and Mathematical analysis. ' +
                    'Its most basic occurrence is the fact that there are n! ways to arrange n distinct objects into a ' +
                    'sequence (i.e., permutations of the set of objects).'+
                    'Your inputs are captured as you type ' +
                    'and run through the algorithm which produces the output in the display section.';
                clearDisplay();  // Remove all Other elements
                displayBlock();
                outputDiv();
                option2Elements(); // factorial Ops
                break;
            case 3:
                pElem.innerHTML = 'A palindrome is a word, phrase, number, or other sequence of characters which reads ' +
                    'the same backward as forward, such as "madam" or "racecar" Use the input below to test your' +
                    ' words or sentences';
                clearDisplay();  // Remove all Other elements
                displayBlock();
                outputDiv();
                option3Elements(); // Palindrome Checker
                break;
            case 4:
                pElem.innerHTML = 'The Longest Word Algorithm checks your entries and returns the length of the' +
                    ' longest word. You can type or paste your texts or complete paragraphs using the input' +
                    ' below.';
                clearDisplay();  // Remove all Other elements
                displayBlock();
                outputDiv();
                option4Elements(); // Find Longest Word
                break;
            case 5:
                pElem.innerHTML = 'Sentence Capitalization Algorithm receives your inputs and returns a string' +
                    ' with the first letter of each word capitalized.';
                clearDisplay();  // Remove all Other elements
                displayBlock();
                outputDiv();
                option5Elements(); // Title Case a sentence
                break;
            case 6:
                pElem.innerHTML ='This LNA Algorithm uses the array sort method to sort user input values in arrays' +
                    ' and return the largest numbers from each array regardless of array sizes. Application areas' +
                    ' for this algorithms may include Data Mining, where the highest values of different tests need' +
                    ' to be segregated and acted upon.';
                clearDisplay();  // Remove all Other elements
                displayBlock();
                option6Elements(); // Return Largest Numbers in Arrays
                break;
            case 7:
                pElem.innerHTML ='The CSE Algorithm checks if the user input ends with any text, or value specified ' +
                    'by the user. (for example: checking if the sentence "Three little birds" ends with' +
                    ' an "s" or a full-stop "." or even any other text like: "bird" )';
                clearDisplay();  // Remove all Other elements
                displayBlock();
                option7Elements();
                break;
            case 8:
                pElem.innerHTML ='The String Repeater Algorithm [SRA], allows you make repetitions of your input,' +
                    ' from "0" to "infinity". The repetitions in direct proportion to the number inputs entered.';
                clearDisplay();  // Remove all Other elements
                displayBlock();
                option8Elements();
                break;
            case 9:
                pElem.innerHTML ='The String Truncating Algorithm [STA], as its name suggests, truncates your entries' +
                    ' based on your specified number. NB: it adds the ellipses "..." to the truncated texts which' +
                    ' affects the total length of your text.';
                clearDisplay();  // Remove all Other elements
                displayBlock();
                option9Elements();
                break;
            case 10:
                pElem.innerHTML ='Chunky Monkey Algorithm [CMA] handles numbers only. It splits user  entries into' +
                    ' arrays; allows a user to specify chunk values; then returns a new array in two-dimensional' +
                    ' format.';
                clearDisplay();  // Remove all Other elements
                displayBlock();
                option10Elements();
                break;
            case 11:
                pElem.innerHTML = 'Slasher FLick Algorithm [SFA] is a slice-&-thrash algorithm. It does this by' +
                    ' allowing you to insert as much entries as possible. Once finished, you also specify the' +
                    ' degree to which you want to slash your entries. With an event listener, the arrays are slashed' +
                    ' based on your input. Default is set to 1.';
                clearDisplay();  // Remove all Other elements
                displayBlock();
                option11Elements();
                break;
            case 12:
                pElem.innerHTML = 'Mutation Algorithm [Mut-A], takes in ONLY two(2) entries. DNA properties' +
                    ' and Specie genes. It checks if the genes of a specie are contained in the DNA property' +
                    ' superset. The Genes and DNAs are any unicode or ascii characters. Each entry is stored in a' +
                    ' verification array. The first entry (Entry: 1) holds the DNA property, and the second property' +
                    ' (Entry: 2) holds the specie gene.';
                    clearDisplay();  // Remove all Other elements
                displayBlock();
                option12Elements();
                break;
            case 13:
                pElem.innerHTML ='Falsy Bouncer Algorithm [FBA] removes all the falsy values in JS. They include:' +
                    ' "NaN"; 0; "undefined"; "null"; ""(an empty string); and of course, "false";';
                clearDisplay();  // Remove all Other elements
                displayBlock();
                option13Elements();
                break;
            case 14:
                pElem.innerHTML ='Seek & Destroy Algorithm [SDA] removes identical array entries via a destroyer' +
                    ' function. Array elements are parsed and compared, and all identical representations are' +
                    ' removed, returning only a complete set void of those identities. If there is no match, the' +
                    ' original array is returned.';
                clearDisplay();  // Remove all Other elements
                displayBlock();
                option14Elements();
                break;
            case 15:
                pElem.innerHTML ='WHERE AM I [WAI] Algorithm. This algorithm deals with numerical values. It takes in' +
                    ' rough numerical data, and a specific test-set data (as positional arguments), sorts them,' +
                    ' and returns an ordered data set plus the right index(ice) where the test-set data can be' +
                    ' inserted.';
                clearDisplay();  // Remove all Other elements
                displayBlock();
                option15Elements();
                break;
            case 16:
                pElem.innerHTML ='Caesar\'s Cipher Algorithm [CCA]. This is a substitution encryption cipher based' +
                    ' on a specified rotary number. The encryption step performed by a Caesar Cipher is often' +
                    ' incorporated as part of more complex schemes, such as the "Vigenère cipher", and still has' +
                    ' modern application in the ROT13 system.';
                clearDisplay();  // Remove all Other elements
                displayBlock();
                option16Elements();
                break;
        }

        if(index !== 3){ parentDiv.style.backgroundColor ='initial'; }
        if(index !== 6){ counter = 1; temp = []; arrHolder = []; }
        if(index !== 10){ arrChunk = [];}
        if(index!== 11){slasherArr = []; document.getElementById('newDiv2Child').style.backgroundColor ='initial';}
        if(index!== 12){ arrMutation = []; clickCount = 1;}
        if(index!== 13){ res = '';}
        if(index !== 14){ destroyerArrVal = []; chosenDestroy = []; }
        if(index !== 15){ unSortArr = []; valuesToSortArr = [];}
    }

// THIS SECTION HANDLES THE DISPLAY SECTION
// Remove all Other elements - clearDisplay
    function clearDisplay() {
        "use strict";
        let removed = document.getElementById("displaySection");
        if (removed.hasChildNodes()) {
            while (removed.firstChild) {
                removed.removeChild(removed.firstChild);
            }
        }
    }
// Show the output section
    function displayBlock() {
        parentDiv.style.visibility = 'visible';
    }
//Create new result div
    function outputDiv() {
        let newDiv = document.createElement('div');
        newDiv.id = 'output';
        parentDiv.appendChild(newDiv);

        let newDiv1child = document.createElement('div');
        newDiv1child.className = 'card bg-primary mb-1';
        newDiv.appendChild(newDiv1child);

        let newDiv2Child = document.createElement('div');
        newDiv2Child.className = 'card-body';
        newDiv2Child.id = 'newDiv2Child';
        newDiv1child.appendChild(newDiv2Child);

        let header = document.createElement('h5');
        header.id = 'outputLabel';
        newDiv2Child.appendChild(header);

        let outputResult = document.createElement('div');
        outputResult.id = 'outputResults';
        newDiv2Child.appendChild(outputResult);
    }
    function outputDiv2() {
        let newDiv = document.createElement('div');
        newDiv.id = 'output2';
        parentDiv.appendChild(newDiv);

        let newDiv1child = document.createElement('div');
        newDiv1child.className = 'card bg-primary mb-1';
        newDiv.appendChild(newDiv1child);

        let newDiv2Child = document.createElement('div');
        newDiv2Child.className = 'card-body';
        newDiv1child.appendChild(newDiv2Child);

        let header = document.createElement('h5');
        header.id = 'outputLabel2';
        newDiv2Child.appendChild(header);

        let outputResult = document.createElement('div');
        outputResult.id = 'outputResults2';
        newDiv2Child.appendChild(outputResult);
    }

//Option1: String Reversal HTML elements - SectionA
    function option1Elements() {
        let parentDiv = document.getElementById('displaySection');
        // Create the Input Section
        let newElement = document.createElement('textArea');
        newElement.id = 'option1';
        newElement.placeholder = 'Enter your text here...';
        newElement.className = 'form-control form-control-lg mb-2';
        newElement.autofocus = true;
        parentDiv.appendChild(newElement);
        parentDiv.insertBefore(newElement, document.getElementById('output'));
        // Assign event listener to the newly created element
        document.getElementById('option1').addEventListener('input', option1Operation);
    }
    function option1Operation(e) {
        let userString = e.target.value;
        document.getElementById('outputLabel').textContent = 'Reversed Text:';
        document.getElementById('outputResults').innerHTML = userString.split('').reverse().join('');
    }

//Option2: factorial.
    function option2Elements() {
        let parentDiv = document.getElementById('displaySection');
        // Create the Input Section
        let newElement = document.createElement('input');
        newElement.type = 'number';
        newElement.id = 'option2';
        newElement.placeholder = 'Enter a number...';
        newElement.className = 'form-control form-control-lg mb-2';
        newElement.autofocus = true;
        parentDiv.appendChild(newElement);
        parentDiv.insertBefore(newElement, document.getElementById('output'));
        // Assign event listener to the newly created element
        document.getElementById('option2').addEventListener('input', factorialSub);
    }
    function factorialSub(e) {
        let userNumber = e.target.value;
        document.getElementById('outputLabel').textContent = 'Factorial Result:';
        let product = 1;
        if (userNumber === 0) {
            return 1;
        } else {
            for (let i = 1; i <= userNumber; i++) {
                product *= [i];
            }
            document.getElementById('outputResults').innerHTML = product;
        }
    }

//Option3: Palindrome.
    function option3Elements() {
        let parentDiv = document.getElementById('displaySection');
        // Create the Input Section
        let newElement = document.createElement('textArea');
        newElement.id = 'option3';
        newElement.placeholder = 'Enter your text here...';
        newElement.className = 'form-control form-control-lg mb-2';
        newElement.autofocus = true;
        parentDiv.appendChild(newElement);
        parentDiv.insertBefore(newElement, document.getElementById('output'));
        // Assign event listener to the newly created element
        document.getElementById('option3').addEventListener('input', palindromeCheck);
    }
    function palindromeCheck(e) {
        "use strict";
        let userString = e.target.value;
        let myRegEx = /\w/g;
        let myMatch = userString.toLowerCase().match(myRegEx);
        for (let i = 0; i <= myMatch.length; i++) {
            if (myMatch[i] === '_') {
                delete myMatch[i];
            }
        }
        let result = myMatch.join('');
        let reverseResult = myMatch.reverse().join('');
        if (result === reverseResult) {
            document.getElementById('displaySection').style.backgroundColor ='green';
            document.getElementById('outputLabel').textContent = 'Palindrome Check Result:';
            document.getElementById('outputResults').innerHTML = 'Truly, This is a palindrome!';
        } else if(result !== reverseResult) {
            document.getElementById('displaySection').style.backgroundColor ='red';
            document.getElementById('outputLabel').textContent = 'Palindrome Check Result:';
            document.getElementById('outputResults').innerHTML = 'Hmmm. Sorry, This is not a palindrome';
        }
    }

//Option4: Find Longest Word.
    function option4Elements() {
        'use strict';
        let parentDiv = document.getElementById('displaySection');
        // Create the Input Section
        let newElement = document.createElement('textArea');
        newElement.id = 'option4';
        newElement.placeholder = 'Enter your text here...';
        newElement.className = 'form-control form-control-lg mb-2';
        newElement.autofocus = true;
        parentDiv.appendChild(newElement);
        parentDiv.insertBefore(newElement, document.getElementById('output'));
        // Assign event listener to the newly created element
        document.getElementById('option4').addEventListener('input', findLongestWord);
    }
    function findLongestWord(e) {
        let str = e.target.value;
        let strVal = str.split(' ');
        let big = 0;
        for (let i = 0; i < strVal.length; i++) {
            if (strVal[i].length >= big) {
                big = strVal[i].length;
                document.getElementById('outputLabel').textContent = 'Length of the longest word is: ' + big;
                document.getElementById('outputResults').innerHTML = "The word is: "+"'"+strVal[i]+"'";
            }
        }
    }

// Option5: Title case a sentence.
    function option5Elements() {
        'use strict';
        let parentDiv = document.getElementById('displaySection');
        // Create the Input Section
        let newElement = document.createElement('textArea');
        newElement.id = 'option5';
        newElement.placeholder = 'Enter your text here...';
        newElement.className = 'form-control form-control-lg mb-2';
        parentDiv.appendChild(newElement);
        parentDiv.insertBefore(newElement, document.getElementById('output'));
        newElement.autofocus = true;
        // Assign event listener to the newly created element
        document.getElementById('option5').addEventListener('input', titleCasing);
    }
    function titleCasing(e) {
        'use strict';
        let sentence = e.target.value;
        sentence = sentence.toLowerCase().split(' ');
        for (let i = 0; i < sentence.length; i++) {
            sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
        }
        document.getElementById('outputLabel').textContent = 'Output: ';
        document.getElementById('outputResults').innerHTML = sentence.join(' ');
    }

//Option6: Return Largest numbers in Array.
    function option6Elements() {
        "use strict";
        let parentDiv = document.getElementById('displaySection');
        // Create the Input Section
        let newElement = document.createElement('input');
        newElement.type = 'number';
        newElement.id = 'option6';
        newElement.placeholder = 'Enter number...';
        newElement.className = 'form-control form-control-lg mb-2';
        newElement.autofocus = true;

        // Create the AddNumber to Array Button
        let newButton = document.createElement('button');
        newButton.textContent = 'Add number to array';
        newButton.id = 'option6Button';
        newButton.className = 'btn btn-outline-dark btn-lg mb-2';
        parentDiv.appendChild(newElement);
        parentDiv.appendChild(newButton);
        parentDiv.insertBefore(newElement, newButton);
        outputDiv();
        // Assign event listener to the newly created buttonElement
        document.getElementById('option6Button').addEventListener('click', validate);
    }
    function validate() {
        "use strict";
        let numberVal = Number(document.getElementById('option6').value);
        if (numberVal === '' || numberVal === undefined) {
            alert('Please enter a number.');
        } else {
            temp.push(numberVal);
            document.getElementById('outputLabel').textContent = 'Array: ' + counter;
            document.getElementById('outputResults').innerHTML = temp;
            document.getElementById('option6').value = '';
            document.getElementById('option6').focus();
            // Do a check before creating the checkbox
            let parentDiv = document.getElementById('displaySection');
            let childCheckBox = document.getElementById('option6CheckBox');
            if (parentDiv.contains(childCheckBox)) {
                return false;
            } else {
                createCheckBox();
            }
            // Do a check if the created checkbox is checked.
            document.getElementById('option6CheckBox').addEventListener('click', function () {
                if (document.getElementById('option6CheckBox').checked === true) {
                    document.getElementById('option6Button').disabled = true;
                    document.getElementById('option6').disabled = true;
                    document.getElementById('option6CheckBox').disabled = true;
                    // Do a check before creating the addMoreArrayButton & submitEntriesButton
                    let addMoreArrayButton = document.getElementById('addMoreArrayButton');
                    let submitEntriesButton = document.getElementById('submitEntriesButton');
                    if (parentDiv.contains(addMoreArrayButton) && parentDiv.contains(submitEntriesButton)) {
                        return false;
                    } else {
                        AddMoreOrSubmitEntriesButton();
                    }
                }
            });
        }
    }
    function createCheckBox() {
        "use strict";
        // Create the CheckBox label Section
        let newCheckBoxLabel = document.createElement('label');
        newCheckBoxLabel.htmlFor = 'option6CheckBox';
        newCheckBoxLabel.className = 'custom-control custom-checkbox mr-3';
        newCheckBoxLabel.id = 'option6CheckBoxLabel';
        newCheckBoxLabel.appendChild(document.createTextNode('Done with Array:' + counter));
        // Create the CheckBox Section
        let newCheckBox = document.createElement('input');
        newCheckBox.type = 'checkbox';
        newCheckBox.aria_label = "...";
        newCheckBox.class ='custom-control-input';
        newCheckBox.id = 'option6CheckBox';
        // Append to page.
        parentDiv.appendChild(newCheckBox);
        parentDiv.appendChild(newCheckBoxLabel);

    }
    function AddMoreOrSubmitEntriesButton() {
        // create addMore Button
        let addMoreArrayButton = document.createElement('button');
        addMoreArrayButton.textContent = 'Add another array';
        addMoreArrayButton.id = 'addMoreArrayButton';
        addMoreArrayButton.className = 'btn btn-outline-primary btn-sm mr-3';
        parentDiv.appendChild(addMoreArrayButton);

        // Create the Array Computation Button
        let submitEntriesButton = document.createElement('button');
        submitEntriesButton.textContent = 'Submit Entries';
        submitEntriesButton.id = 'submitEntriesButton';
        submitEntriesButton.className = 'btn btn-outline-danger btn-sm mr-3';
        parentDiv.appendChild(submitEntriesButton);
        // Event listeners to the newly created buttons.
        addMoreArrayButton.addEventListener('click', removeSelf);
        document.getElementById('submitEntriesButton').addEventListener('click', function () {
            arrHolder.push(temp); // perform the last push operation
            arrayOperations(arrHolder);
        });
    }
    function removeSelf() {
        counter++;
        arrHolder.push(temp);
        temp = [];
        document.getElementById('option6Button').disabled = false;
        document.getElementById('option6').disabled = false;
        document.getElementById('option6').value = '';
        document.getElementById('option6').focus();
        document.getElementById('option6CheckBox').parentNode.removeChild(document.getElementById('option6CheckBox'));
        document.getElementById('option6CheckBoxLabel').parentNode.removeChild(document.getElementById('option6CheckBoxLabel'));
        document.getElementById('submitEntriesButton').parentNode.removeChild(document.getElementById('submitEntriesButton'));
        document.getElementById('addMoreArrayButton').parentNode.removeChild(document.getElementById('addMoreArrayButton'));
    }
    function arrayOperations(arr) {
        let arrTemp = [];
        for (let i = 0; i < arr.length; i++) {
            let maxNum = 0;
            maxNum = arr[i].reduce(function (a, b) {
                return Math.max(a, b);
            });
            arrTemp.push(maxNum);
        }
        document.getElementById('outputLabel').textContent = 'Array of Large Numbers: ';
        document.getElementById('outputResults').innerHTML = arrTemp;
        document.getElementById('option6CheckBox').disabled = true;
        document.getElementById('addMoreArrayButton').disabled = true;
        document.getElementById('submitEntriesButton').disabled = true;
        restart();
    }
    function restart() {
        // create the restart Buttons
        let restartButton = document.createElement('button');
        restartButton.textContent = 'Start Again';
        restartButton.id = 'restartButton';
        restartButton.className = 'btn btn-outline-success btn-sm';
        document.getElementById('displaySection').appendChild(restartButton);

        document.getElementById('restartButton').addEventListener('click', function () {
            document.getElementById('restartButton').parentNode.removeChild(document.getElementById('restartButton'));
            removeSelf();
            document.getElementById('outputLabel').textContent = '';
            document.getElementById('outputResults').innerHTML = '';
            temp = [];
            arrHolder = [];
            counter = 1;
        });
    }

//Option7: Confirm Sentence Ending.
    function option7Elements() {
        let parentDiv = document.getElementById('displaySection');
        // Create the main text Section
        let newElement = document.createElement('textArea');
        newElement.id = 'option7';
        newElement.placeholder = 'Enter your main text here...';
        newElement.className = 'form-control form-control-lg mb-2';
        newElement.autofocus = true;
        parentDiv.appendChild(newElement);

        // create the target test section
        let newElementTarget = document.createElement('textArea');
        newElementTarget.id = 'option7Target';
        newElementTarget.placeholder = 'Enter your target text here...';
        newElementTarget.className = 'form-control form-control-lg mb-2';
        parentDiv.appendChild(newElementTarget);

        parentDiv.insertBefore(newElement, newElementTarget);

        outputDiv();

        document.getElementById('option7Target').addEventListener('input', confirmEnding);
    }
    function confirmEnding(e) {
        let str = document.getElementById('option7').value;
        let mainTarget = e.target.value;
        if (str.substr(-[mainTarget.length]) === mainTarget.substring(mainTarget)) {
            document.getElementById('outputLabel').textContent = 'Target Check: ';
            document.getElementById('outputResults').innerHTML = 'Truly, the text has the target Ending';
        } else {
            document.getElementById('outputResults').innerHTML = 'No IT DOES not HAVE THE ENDING';
        }
    }

//Option8: String Repeater.
    function option8Elements() {
        let parentDiv = document.getElementById('displaySection');
        // Create the main text Section
        let newElement = document.createElement('textArea');
        newElement.id = 'option8';
        newElement.placeholder = 'Enter your text here...';
        newElement.className = 'form-control form-control-lg mb-2';
        newElement.autofocus = true;
        parentDiv.appendChild(newElement);

        // create the target test section
        let newElementTarget = document.createElement('input');
        newElementTarget.id = 'option8Target';
        newElementTarget.type = 'number';
        newElementTarget.placeholder = 'Enter number of repetition...';
        newElementTarget.className = 'form-control form-control-lg mb-2';
        parentDiv.appendChild(newElementTarget);
        parentDiv.insertBefore(newElement, newElementTarget);
        outputDiv();
        document.getElementById('option8Target').addEventListener('input', stringRepeater);
    }
    function stringRepeater(e) {
        let str = document.getElementById('option8').value;
        let num = e.target.value;
        if (num < 0) {
            document.getElementById('outputLabel').textContent = 'Repetitions: ';
            document.getElementById('outputResults').innerHTML = 'None';
        } else {
            let newStr = str;
            for (let i = 1; i < num; i++) {
                newStr += str;
            }
            document.getElementById('outputLabel').textContent = 'Repetitions: ';
            document.getElementById('outputResults').innerHTML = newStr;
        }
    }

//Option9: Truncate a String.
    function option9Elements() {
        let parentDiv = document.getElementById('displaySection');
        // Create the main text Section
        let newElement = document.createElement('textArea');
        newElement.id = 'option9';
        newElement.placeholder = 'Enter your text here...';
        newElement.className = 'form-control form-control-lg mb-2';
        newElement.autofocus = true;
        parentDiv.appendChild(newElement);

        // create the target number section
        let newElementTarget = document.createElement('input');
        newElementTarget.id = 'option9Target';
        newElementTarget.type = 'number';
        newElementTarget.placeholder = 'Enter truncation number...';
        newElementTarget.className = 'form-control form-control-lg mb-2';
        parentDiv.appendChild(newElementTarget);
        parentDiv.insertBefore(newElement, newElementTarget);
        outputDiv();
        document.getElementById('option9Target').addEventListener('input', truncateString);
    }
    function truncateString(e) {
        'use strict';
        let str = document.getElementById('option9').value;
        let num = e.target.value;
        let strLen = str.length;
        document.getElementById('outputLabel').textContent = 'Truncation Result: ';
        if (strLen > num && num > 3) {
            document.getElementById('outputResults').innerHTML = str.slice(0, [num - 3]).concat('...');
        } else if (strLen === num || num > strLen) {
            document.getElementById('outputResults').innerHTML = str;
        } else if (num <= 3) {
            document.getElementById('outputResults').innerHTML = str.slice(0, num).concat('...');
        }
    }

//Option10: Chunky Monkey.
    function option10Elements() {
        "use strict";
        let parentDiv = document.getElementById('displaySection');
        // Create the Input Section
        let newElement = document.createElement('input');
        newElement.type = 'text';
        newElement.id = 'option10';
        newElement.placeholder = 'Enter array value...';
        newElement.className = 'form-control form-control-lg mb-2';
        newElement.autofocus = true;

        // Create the AddNumber to Array Button
        let newButton = document.createElement('button');
        newButton.textContent = 'Add value to array';
        newButton.id = 'option10Button';
        newButton.className = 'btn btn-outline-success btn-lg mb-2';
        parentDiv.appendChild(newElement);
        parentDiv.appendChild(newButton);
        parentDiv.insertBefore(newElement, newButton);

        //Create the sizeInput area
        let newArraySize = document.createElement('input');
        newArraySize.type = 'number';
        newArraySize.id = 'newArraySize';
        newArraySize.placeholder = 'Enter chunk size...';
        newArraySize.className = 'form-control form-control-lg mb-2';
        parentDiv.appendChild(newArraySize);
        parentDiv.insertBefore(newButton, newArraySize);
        outputDiv();

        // Assign event listener to the newly created buttonElement
        document.getElementById('option10Button').addEventListener('click', addValToArray);
        document.getElementById('newArraySize').addEventListener('input', chunkyMonkey);
    }
    function addValToArray() {
        let arrVal = document.getElementById('option10').value;
        arrChunk.push(arrVal);
        document.getElementById('outputLabel').textContent = 'Array values: ';
        document.getElementById('outputResults').innerHTML = arrChunk;
        //Clear space
        document.getElementById('option10').value = '';
        document.getElementById('option10').focus();
    }
    function chunkyMonkey(e) {
        document.getElementById('outputResults').innerHTML = arrChunk;
        let size = e.target.value;
        let newArr = [];
        if (size <= 1 || size >= arrChunk.length) {
            return arrChunk;
        } else {
            for (let i = 0; i < arrChunk.length; i += size) {
                let arrDiv = arrChunk.slice(i, i + size);
                newArr.push(arrDiv);
            }
            document.getElementById('outputLabel').textContent = '';
            document.getElementById('outputResults').innerHTML = '';
            document.getElementById('outputLabel').textContent = 'Array Chunk:';
            document.getElementById('outputResults').innerHTML = JSON.stringify(newArr);
        }
    }

//Option11: Slasher Flick 
    function option11Elements() {
        "use strict";
        let parentDiv = document.getElementById('displaySection');
        // Create the Input Section
        let newElement = document.createElement('input');
        newElement.type = 'text';
        newElement.id = 'option11';
        newElement.placeholder = 'Enter array value...';
        newElement.className = 'form-control form-control-lg mb-2';
        newElement.autofocus = true;

        // Create the AddNumber to Array Button
        let newButton = document.createElement('button');
        newButton.textContent = 'Add value to array';
        newButton.id = 'option11Button';
        newButton.className = 'btn btn-outline-success btn-lg mb-2';
        parentDiv.appendChild(newElement);
        parentDiv.appendChild(newButton);
        parentDiv.insertBefore(newElement, newButton);

        //Create the sizeInput area
        let newArraySize = document.createElement('input');
        newArraySize.type = 'number';
        newArraySize.id = 'newArraySize';
        newArraySize.placeholder = 'Enter flicker number...';
        newArraySize.className = 'form-control form-control-lg mb-2';
        parentDiv.appendChild(newArraySize);
        parentDiv.insertBefore(newButton, newArraySize);
        outputDiv();

        // Assign event listener to the newly created buttonElement
        document.getElementById('option11Button').addEventListener('click', addValToSlasherArray);
        document.getElementById('newArraySize').addEventListener('input', slasherFlick);
    }
    function addValToSlasherArray() {
        let arrSlashVal = document.getElementById('option11').value;
        slasherArr.push(arrSlashVal);
        document.getElementById('outputLabel').textContent = ' Array values: ';
        document.getElementById('outputResults').innerHTML = slasherArr;
        //Clear space
        document.getElementById('option11').value = '';
        document.getElementById('option11').focus();
    }
    function slasherFlick(e) {
        document.getElementById('outputLabel').textContent = ' Array values: ';
        document.getElementById('outputResults').innerHTML = slasherArr;
        let num = e.target.value;
        if (num <= slasherArr.length) {
            let val = slasherArr.slice(0, num);
            document.getElementById('newDiv2Child').style.backgroundColor ='initial';
            document.getElementById('outputLabel').textContent = 'Slashed array: ';
            document.getElementById('outputResults').innerHTML = JSON.stringify(slasherArr.splice(val.length));
        } else {
            document.getElementById('newDiv2Child').style.backgroundColor ='red'; //Monitor this
            document.getElementById('outputLabel').textContent = 'Slashed array: ';
            document.getElementById('outputResults').innerHTML = 'Flicker Number is Larger than Array length';
        }
    }

//Option12: Mutation.
    function option12Elements() {
        "use strict";
        let parentDiv = document.getElementById('displaySection');
        // Create the Input Section
        let newElement = document.createElement('textArea');
        newElement.id = 'option12';
        newElement.placeholder = 'Enter gene characteristics/specie DNA';
        newElement.className = 'form-control form-control-lg mb-2';
        newElement.value = '';
        newElement.focus();

        // Create the AddMutationValue to Array Button
        let newButton = document.createElement('button');
        newButton.textContent = 'Add entry to verification center';
        newButton.id = 'addMutationValue';
        newButton.className = 'btn btn-outline-info btn-lg mb-2 mr-3';

        parentDiv.appendChild(newElement);
        parentDiv.appendChild(newButton);
        parentDiv.insertBefore(newElement, newButton);
        outputDiv();
        // Assign event listener to the newly created buttonElement
        document.getElementById('addMutationValue').addEventListener('click', validateMutation);
    }
    function validateMutation() {
        "use strict";
        let mutationVal = document.getElementById('option12').value;
        if (mutationVal === '' || mutationVal === undefined) {
            alert('Please enter Specie ID or description.');
        } else if (clickCount <= 2) {
            arrMutation.push(mutationVal);

            document.getElementById('outputLabel').textContent = 'Entry: ' + clickCount;
            document.getElementById('outputResults').innerHTML = arrMutation;
            document.getElementById('option12').value = '';
            document.getElementById('option12').focus();

            if (clickCount === 2) {
                document.getElementById('option12').disabled = true;
                document.getElementById('addMutationValue').disabled = true;
                // Create the submitMutationButton to Array Button
                let parentDiv = document.getElementById('displaySection');
                let submitMutationButton = document.createElement('button');
                submitMutationButton.textContent = 'Check for mutants';
                submitMutationButton.id = 'submitMutationButton';
                submitMutationButton.className = 'btn btn-outline-dark btn-lg mb-2 mr-3';
                parentDiv.appendChild(submitMutationButton);
                document.getElementById('submitMutationButton').addEventListener('click', mutation)
            }
        }
        clickCount++;
    }
    function mutation() {
        "use strict";
        let arr = arrMutation;
        let temp = '';
        let arr1 = arr.slice(0, 1).join('').toLowerCase();
        let arr2 = arr.slice(1).join('').toLowerCase();

        for (let i = 0; i <= arr2.length; i++) {
            let x = arr2.charAt(i);
            if (arr1.indexOf(x) !== -1) {
                temp += x;
            } else {
                temp = '';
                alert('========== Mutant Check ========== \nNOT CONFIRMED: Specie is not a Mutant. Specie is free to go' +
                    ' Home');
                document.getElementById('submitMutationButton').disabled = true;
                resetMutants();
                return
            }
        }
        if (temp !== '') {
            //return true
            alert('========== Mutant Check ========== \nCONFIRMED: Extract Mutant Specie to the Mutation Facility.');
            document.getElementById('submitMutationButton').disabled = true;
            resetMutants();
        }
    }
    function resetMutants() {
        let parentDiv = document.getElementById('displaySection');
        let resetMutants = document.createElement('button');
        resetMutants.textContent = 'Start new Mutant check';
        resetMutants.id = 'resetMutants';
        resetMutants.className = 'btn btn-outline-success btn-lg mb-2';
        parentDiv.appendChild(resetMutants);
        parentDiv.insertBefore(document.getElementById('submitMutationButton'), resetMutants);

        document.getElementById('resetMutants').addEventListener('click', function () {
            clickCount = 1;
            arrMutation = [];
            document.getElementById('addMutationValue').disabled = false;
            document.getElementById('option12').disabled = false;
            document.getElementById('outputLabel').textContent = '';
            document.getElementById('outputResults').innerHTML = '';
            document.getElementById('option12').value = '';
            document.getElementById('option12').focus();
            document.getElementById('resetMutants').parentNode.removeChild(document.getElementById('resetMutants'));
            document.getElementById('submitMutationButton').parentNode.removeChild(document.getElementById('submitMutationButton'));
        });
    }

//Option13: Falsy Bouncer
    function option13Elements() {
        "use strict";
        let parentDiv = document.getElementById('displaySection');
        // Create the Input Section
        let newElement = document.createElement('input');
        newElement.id = 'option13';
        newElement.placeholder = 'Enter values here';
        newElement.className = 'form-control form-control-lg mb-2';

        // Create the AddBouncerValue to Array Button
        let newButton = document.createElement('button');
        newButton.textContent = 'Add values to Bouncer Machine';
        newButton.id = 'addBouncerButton';
        newButton.style.border = '2px solid black';
        newButton.className = 'btn btn-outline-primary btn-sm mb-2';

        // Create the created elements to page.
        parentDiv.appendChild(newElement);
        parentDiv.appendChild(newButton);
        parentDiv.insertBefore(newElement, newButton);

        outputDiv(); // create the output section.
        document.getElementById('option13').value = ''; //clear input space
        document.getElementById('option13').autofocus = true; //set focus cursor in input space

        // Assign event listener to the newly created buttonElement
        document.getElementById('addBouncerButton').addEventListener('click', bouncer);
    }
    function bouncer() {
        let bouncerVal = document.getElementById('option13').value;
        if (bouncerVal === '') {
            alert('Empty values are not allowed. Do enter a value');
        } else {
            document.getElementById('outputLabel').textContent = 'Bouncer Machine Entries';
            document.getElementById('outputResults').innerHTML += bouncerVal + ',';
            res += bouncerVal + ',';
            res = res.toLowerCase();
            document.getElementById('option13').value = '';
            document.getElementById('option13').focus();
            let parentDiv = document.getElementById('displaySection');
            let newCheckBoxLabel = document.getElementById('option13CheckBoxLabel');
            let newCheckBox = document.getElementById('option13CheckBox');
            if (parentDiv.contains(newCheckBox) || parentDiv.contains(newCheckBoxLabel)) {
                return false;
            } else {
                let newCheckBox = document.createElement('input');
                newCheckBox.type = 'checkbox';
                newCheckBox.aria_label = "...";
                newCheckBox.class = 'custom-control-input mb-2';
                newCheckBox.id = 'option13CheckBox';
                parentDiv.appendChild(newCheckBox);

                let newCheckBoxLabel = document.createElement('label');
                newCheckBoxLabel.htmlFor = 'option13CheckBox';
                newCheckBoxLabel.className = 'custom-control custom-checkbox mr-3';
                newCheckBoxLabel.id = 'option13CheckBoxLabel';
                newCheckBoxLabel.appendChild(document.createTextNode('Done with Bouncer Entries'));
                parentDiv.appendChild(newCheckBoxLabel);

                newCheckBox.addEventListener('click', function () {
                    if (newCheckBox.checked === true) {
                        document.getElementById('option13').disabled = true;
                        document.getElementById('addBouncerButton').disabled = true;
                        document.getElementById('option13CheckBox').disabled = true;
                        // create runBouncerMachine button
                        let runBouncerMachine = document.createElement('button');
                        runBouncerMachine.textContent = 'Run Bouncer Machine';
                        runBouncerMachine.id = 'runBouncerMachine';
                        runBouncerMachine.className = 'btn btn-outline-success btn-sm mr-2';
                        parentDiv.appendChild(runBouncerMachine);
                        document.getElementById('runBouncerMachine').addEventListener('click', removeFalse);
                    }
                });
            }
        }
    }
    function removeFalse() {
        let rest = res.split(',');
        let z = [];
        for (let i = 0; i < rest.length; i++) {
            if (rest[i] === '' || rest[i] === 'undefined' || rest[i] === 'false' || rest[i] === 'null' || rest[i] === '0' || rest[i] === 'nan') {
                delete(rest[i]);
            }
        }
        let y = rest.join(',').split(',');
        for (let j = 0; j < y.length; j++) {
            if (y[j] !== '') {
                z.push(y[j]);
            }
        }
        alert(JSON.stringify(z));

        document.getElementById('runBouncerMachine').disabled = true;

        // create reloadBouncerMachine button
        let reloadBouncerMachine = document.createElement('button');
        reloadBouncerMachine.textContent = 'Reload Bouncer Machine';
        reloadBouncerMachine.id = 'reloadBouncerMachine';
        reloadBouncerMachine.style.border = '2px solid black';
        reloadBouncerMachine.className = 'btn btn-outline-success btn-sm mr-2';
        document.getElementById('displaySection').appendChild(reloadBouncerMachine);

        document.getElementById('reloadBouncerMachine').addEventListener('click', function () {
            z = [];
            res = '';
            document.getElementById('outputLabel').textContent = '';
            document.getElementById('outputResults').innerHTML = '';
            document.getElementById('option13').value = '';
            document.getElementById('option13').focus();
            document.getElementById('option13').disabled = false;
            document.getElementById('addBouncerButton').disabled = false;
            document.getElementById('runBouncerMachine').disabled = false;
            document.getElementById('runBouncerMachine').parentNode.removeChild(document.getElementById('runBouncerMachine'));
            document.getElementById('option13CheckBox').checked = false;
            document.getElementById('option13CheckBox').parentNode.removeChild(document.getElementById('option13CheckBox'));
            document.getElementById('option13CheckBoxLabel').parentNode.removeChild(document.getElementById('option13CheckBoxLabel'));
            document.getElementById('reloadBouncerMachine').parentNode.removeChild(document.getElementById('reloadBouncerMachine'));

        });
    }

//Option14: Seek and destroy
    function option14Elements() {
        "use strict";
// Create the Input Section
        let newElement = document.createElement('input');
        newElement.id = 'option14';
        newElement.placeholder = 'Enter array values here';
        newElement.className = 'form-control form-control-lg mb-2';

// Create the AddValuesToDestroyer Button
        let newButton = document.createElement('button');
        newButton.textContent = 'Add values to array';
        newButton.id = 'addSeekValues';
        newButton.style.border = '2px solid sienna';
        newButton.className = 'btn btn-outline-primary btn-sm mr-3 mb-3';

// Âdd the created elements to page.
        parentDiv.appendChild(newElement);
        parentDiv.appendChild(newButton);
        parentDiv.insertBefore(newElement, newButton);

        outputDiv(); // create the output section.
        document.getElementById('option14').value = ''; //clear input space
        document.getElementById('option14').autofocus = true; //set focus cursor in input space

// Assign event listener to the newly created buttonElement
        document.getElementById('addSeekValues').addEventListener('click', destroyer);
    }
    function destroyer() {
        let destroyerVal = document.getElementById('option14').value;
        if (destroyerVal === '') {
            alert('Please enter an array value');
        } else {
            destroyerArrVal.push(destroyerVal);
            document.getElementById('outputLabel').textContent = 'Array Entries';
            document.getElementById('outputResults').innerHTML = destroyerArrVal;
            document.getElementById('option14').value = '';
            document.getElementById('option14').focus();

            //Create CheckBox & its label.
            let newCheckBoxLabel = document.getElementById('option14CheckBoxLabel');
            let newCheckBox = document.getElementById('option14CheckBox');
            if (parentDiv.contains(newCheckBox) || parentDiv.contains(newCheckBoxLabel)) {
                return false;
            } else {
                let newCheckBox = document.createElement('input');
                newCheckBox.type = 'checkbox';
                newCheckBox.aria_label = "...";
                //newCheckBox.className = 'custom-control-input m-2';
                newCheckBox.id = 'option14CheckBox';
                parentDiv.appendChild(newCheckBox);

                let newCheckBoxLabel = document.createElement('label');
                newCheckBoxLabel.htmlFor = 'option14CheckBox';
                newCheckBoxLabel.id = 'option14CheckBoxLabel';
                newCheckBoxLabel.className = 'custom-control custom-checkbox';
                newCheckBoxLabel.appendChild(document.createTextNode('Done with array entries'));
                parentDiv.appendChild(newCheckBoxLabel);
                newCheckBox.addEventListener('click', function () {
                    if (newCheckBox.checked === true) {
                        document.getElementById('option14').disabled = true;
                        document.getElementById('addSeekValues').disabled = true;
                        document.getElementById('option14CheckBox').disabled = true;
                        otherDestroyer(); //create new button.
                    }
                });
            }
        }
    }
    function otherDestroyer() {
        // Create the 2nd Input Section
        let newElement2 = document.createElement('input');
        newElement2.id = 'option14_2';
        newElement2.placeholder = 'Enter values you want to destroy';
        newElement2.className = 'form-control form-control-lg mb-2';

        // Create the AddValuesToDestroyer Button
        let newButton2 = document.createElement('button');
        newButton2.textContent = 'Add values to destroyer';
        newButton2.id = 'addDestroyerValues';
        newButton2.style.border = '2px solid black';
        newButton2.className = 'btn btn-outline-danger btn-sm mb-3 mr-3';

        // Âdd the created elements to page.
        parentDiv.appendChild(newElement2);
        parentDiv.appendChild(newButton2);
        parentDiv.insertBefore(newElement2, newButton2);
        outputDiv2();
        document.getElementById('option14_2').value = '';
        document.getElementById('option14_2').focus();

        document.getElementById('addDestroyerValues').addEventListener('click', function () {
            let des = document.getElementById('option14_2').value;
            if (des === '') {
                alert('You have not entered any value');
            } else {
                chosenDestroy.push(des);
                document.getElementById('outputLabel2').textContent = 'Values to destroy: ';
                document.getElementById('outputResults2').innerHTML = chosenDestroy;
                document.getElementById('option14_2').value = '';
                document.getElementById('option14_2').focus();
                anotherCheckBox();
            }
        });
    }
    function anotherCheckBox() {
        //Create CheckBox & its label.
        let newCheckBoxLabel2 = document.getElementById('option14_2CheckBoxLabel');
        let newCheckBox2 = document.getElementById('option14_2CheckBox');
        if (parentDiv.contains(newCheckBox2) || parentDiv.contains(newCheckBoxLabel2)) {
            return false;
        } else {
            let newCheckBox2 = document.createElement('input');
            newCheckBox2.type = 'checkbox';
            newCheckBox2.aria_label = "...";
            //newCheckBox2.className = 'form-check-input mb-2';
            newCheckBox2.id = 'option14_2CheckBox';
            parentDiv.appendChild(newCheckBox2);

            let newCheckBoxLabel2 = document.createElement('label');
            newCheckBoxLabel2.htmlFor = 'option14_2CheckBox';
            newCheckBoxLabel2.className = 'custom-control custom-checkbox mr-3';
            newCheckBoxLabel2.id = 'option14_2CheckBoxLabel';
            newCheckBoxLabel2.appendChild(document.createTextNode('Done with Destroyer values'));
            parentDiv.appendChild(newCheckBoxLabel2);
            newCheckBox2.addEventListener('click', function () {
                if (newCheckBox2.checked === true) {
                    document.getElementById('option14_2').disabled = true;
                    document.getElementById('addDestroyerValues').disabled = true;
                    document.getElementById('option14_2CheckBox').disabled = true;

                    seekAndDestroy(destroyerArrVal); //create new button.
                }
            });
        }
    }
    function seekAndDestroy(arr) {
        let args = Array.prototype.slice.call(chosenDestroy); // converts all argument to an array.

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < args.length; j++) {
                if (arr[i] === args[j]) {
                    delete arr[i];
                }
            }
        }
        let newSelection = arr.filter(Boolean);
        alert('All Invalid Items have been destroyed.\nYour valid item(s) are: \n' + JSON.stringify(newSelection));
        resetButton();
    }
    function resetButton() {
        // Create the AddValuesToDestroyer Button
        let newButton3 = document.createElement('button');
        newButton3.textContent = 'Reload Destroyer Machine';
        newButton3.id = 'reloadDestroyerMachine';
        newButton3.style.border='2px solid black';
        newButton3.className = 'btn btn-outline-success btn-sm';
        // Âdd the created elements to page.
        parentDiv.appendChild(newButton3);
        document.getElementById('reloadDestroyerMachine').addEventListener('click', function () {
            document.getElementById('option14_2CheckBoxLabel').parentNode.removeChild(document.getElementById('option14_2CheckBoxLabel'));
            document.getElementById('option14_2CheckBox').parentNode.removeChild(document.getElementById('option14_2CheckBox'));
            document.getElementById('option14_2').parentNode.removeChild(document.getElementById('option14_2'));
            document.getElementById('addDestroyerValues').parentNode.removeChild(document.getElementById('addDestroyerValues'));

            //clear all entries:
            chosenDestroy = [];
            destroyerArrVal = [];
            document.getElementById('outputLabel2').textContent = '';
            document.getElementById('outputResults2').innerHTML = '';

            //Clear the first Set of Outputs
            document.getElementById('outputLabel').textContent = '';
            document.getElementById('outputResults').innerHTML = '';

            //remove all OutPutDiv2 creation
            document.getElementById('output2').parentNode.removeChild(document.getElementById('output2'));

            //delete the first set of checkBox
            document.getElementById('option14CheckBoxLabel').parentNode.removeChild(document.getElementById('option14CheckBoxLabel'));
            document.getElementById('option14CheckBox').parentNode.removeChild(document.getElementById('option14CheckBox'));

            //Enable the first set of Input
            document.getElementById('option14').disabled = false;
            document.getElementById('addSeekValues').disabled = false;

            //Remove itself
            document.getElementById('reloadDestroyerMachine').parentNode.removeChild(document.getElementById('reloadDestroyerMachine'));

            //Set focus
            document.getElementById('option14').value = '';
            document.getElementById('option14').focus();


        });
    }

//Option15: Where Do I Belong
    function option15Elements() {
        "use strict";
// Create the Input Section
        let newElement = document.createElement('input');
        newElement.id = 'option15';
        newElement.type = "number";
        newElement.placeholder = 'Enter unsorted numbers';
        newElement.className = 'form-control form-control-lg mb-2';

// Create the AddValuesToDestroyer Button
        let newButton = document.createElement('button');
        newButton.textContent = 'Add number to array';
        newButton.id = 'addUnsortedNum';
        newButton.style.border = '2px solid navy';
        newButton.className = 'btn btn-outline-primary btn-sm mb-2 mr-3';

// Âdd the created elements to page.
        parentDiv.appendChild(newElement);
        parentDiv.appendChild(newButton);
        parentDiv.insertBefore(newElement, newButton);

        outputDiv(); // create the output section.
        document.getElementById('option15').value = ''; //clear input space
        document.getElementById('option15').autofocus = true; //set focus cursor in input space

// Assign event listener to the newly created buttonElement
        document.getElementById('addUnsortedNum').addEventListener('click', whereAmI);
    }
    function whereAmI() {
        let unSortNum = document.getElementById('option15').value;
        if (unSortNum === '') {
            alert('Empty values are not allowed');
        } else {
            unSortArr.push(unSortNum);
            document.getElementById('outputLabel').textContent = 'Number Entries:';
            document.getElementById('outputResults').innerHTML = unSortArr;
            document.getElementById('option15').value = '';
            document.getElementById('option15').focus();

            //Create CheckBox & its label.
            let newCheckBoxLabel = document.getElementById('option15CheckBoxLabel');
            let newCheckBox = document.getElementById('option15CheckBox');
            if (parentDiv.contains(newCheckBox) || parentDiv.contains(newCheckBoxLabel)) {
                return false;
            } else {
                let newCheckBox = document.createElement('input');
                newCheckBox.type = 'checkbox';
                newCheckBox.aria_label = "...";
                newCheckBox.id = 'option15CheckBox';
                parentDiv.appendChild(newCheckBox);

                let newCheckBoxLabel = document.createElement('label');
                newCheckBoxLabel.htmlFor = 'option15CheckBox';
                newCheckBoxLabel.id = 'option15CheckBoxLabel';
                newCheckBoxLabel.className ='custom-control custom checkbox';
                newCheckBoxLabel.appendChild(document.createTextNode('Done with entries'));
                parentDiv.appendChild(newCheckBoxLabel);
                newCheckBox.addEventListener('click', function () {
                    if (newCheckBox.checked === true) {
                        document.getElementById('option15').disabled = true;
                        document.getElementById('addUnsortedNum').disabled = true;
                        document.getElementById('option15CheckBox').disabled = true;
                        nextUnsortedInput();
                    }
                });
            }
        }
    }
    function nextUnsortedInput() {
        "use strict";
// Create the Input Section
        let newElement2 = document.createElement('input');
        newElement2.id = 'option15_2';
        newElement2.type = "number";
        newElement2.placeholder = 'Enter values you want to sort';
        newElement2.className = 'form-control form-control-lg mb-2';

// Create the AddValuesToDestroyer Button
        let newButton2 = document.createElement('button');
        newButton2.textContent = 'Add sort values to array';
        newButton2.id = 'addNumToSorted2';
        newButton2.style.border = '2px solid black';
        newButton2.className = 'btn btn-outline-dark btn-sm mb-2 mr-3';

// Âdd the created elements to page.
        parentDiv.appendChild(newElement2);
        parentDiv.appendChild(newButton2);
        parentDiv.insertBefore(newElement2, newButton2);

        outputDiv2(); // create the output section.
        document.getElementById('option15_2').value = ''; //clear input space
        document.getElementById('option15_2').focus(); //set focus cursor in input space

        document.getElementById('addNumToSorted2').addEventListener('click', addToSortMachine);

    }
    function addToSortMachine() {
        let valuesToSortNum = document.getElementById('option15_2').value;
        if (valuesToSortNum === '') {
            alert('Empty values are not allowed');
        } else {
            valuesToSortArr.push(valuesToSortNum);
            document.getElementById('outputLabel2').textContent = 'Values to Sort';
            document.getElementById('outputResults2').textContent = valuesToSortArr;
            document.getElementById('option15_2').value = ''; //clear input space
            document.getElementById('option15_2').focus(); //set focus cursor in input space

            //Create 2nd CheckBox & its label.
            let newCheckBoxLabel = document.getElementById('option15_2CheckBoxLabel');
            let newCheckBox = document.getElementById('option15_2CheckBox');
            if (parentDiv.contains(newCheckBox) || parentDiv.contains(newCheckBoxLabel)) {
                return false;
            } else {
                let newCheckBox = document.createElement('input');
                newCheckBox.type = 'checkbox';
                newCheckBox.aria_label = "...";
                newCheckBox.id = 'option15_2CheckBox';
                parentDiv.appendChild(newCheckBox);

                let newCheckBoxLabel = document.createElement('label');
                newCheckBoxLabel.htmlFor = 'option15_2CheckBox';
                newCheckBoxLabel.id = 'option15_2CheckBoxLabel';
                newCheckBoxLabel.className = 'custom-control custom-checkbox mr-3';
                newCheckBoxLabel.appendChild(document.createTextNode('Done with sort values'));
                parentDiv.appendChild(newCheckBoxLabel);
                newCheckBox.addEventListener('click', function () {
                    if (newCheckBox.checked === true) {
                        document.getElementById('option15_2').disabled = true;
                        document.getElementById('addNumToSorted2').disabled = true;
                        document.getElementById('option15_2CheckBox').disabled = true;

                        getIndexToIns(unSortArr, valuesToSortArr);
                    }
                });
            }
        }
    }
    function getIndexToIns(arr, num) {
        let arrIndices = [];
        let z = arr.concat(num);
        z.sort(function (a, b) {
            return a - b;
        });
        for (let i = 0; i <= z.length; i++) {
            for (let j = 0; j < num.length; j++) {
                if (num[j] === z[i] && num[j] !== undefined) {
                    arrIndices.push(z.indexOf(num[j]));
                }
            }
        }
        alert('Your sorted values are: \n' + JSON.stringify(z) +
            '\nYou can insert them at these Indices\n' + JSON.stringify(arrIndices));
        // Create the resetFunction15Button
        let resetFunction15Button = document.createElement('button');
        resetFunction15Button.textContent = 'Restart Sort Machine';
        resetFunction15Button.id = 'resetFunction15Button';
        resetFunction15Button.style.border ='2px solid darkgreen';
        resetFunction15Button.className = 'btn btn-outline-success btn-sm';
// Âdd the created elements to page.
        parentDiv.appendChild(resetFunction15Button);
        document.getElementById('resetFunction15Button').addEventListener('click', resetFunction15); //Event
    }
    function resetFunction15() {
        document.getElementById('option15_2').parentNode.removeChild(document.getElementById('option15_2'));
        document.getElementById('addNumToSorted2').parentNode.removeChild(document.getElementById('addNumToSorted2'));
        document.getElementById('option15_2CheckBox').parentNode.removeChild(document.getElementById('option15_2CheckBox'));
        document.getElementById('option15_2CheckBoxLabel').parentNode.removeChild(document.getElementById('option15_2CheckBoxLabel'));

        document.getElementById('output2').parentNode.removeChild(document.getElementById('output2'));
        document.getElementById('option15CheckBox').parentNode.removeChild(document.getElementById('option15CheckBox'));
        document.getElementById('option15CheckBoxLabel').parentNode.removeChild(document.getElementById('option15CheckBoxLabel'));

        unSortArr = [];
        valuesToSortArr = [];

        document.getElementById('outputLabel').textContent = '';
        document.getElementById('outputResults').innerHTML = '';

        document.getElementById('option15').disabled = false;
        document.getElementById('addUnsortedNum').disabled = false;
        document.getElementById('option15').value = '';
        document.getElementById('option15').focus();

        document.getElementById('resetFunction15Button').parentNode.removeChild(document.getElementById('resetFunction15Button'));
    }

//Option16: Caesar's Cipher.
    function option16Elements() {
        "use strict";
        // Create the Input Section
        let newElement = document.createElement('textArea');
        newElement.id = 'option16';
        newElement.placeholder = 'Enter the text you want to encrypt: ';
        newElement.className = 'form-control form-control-lg mb-2';

        // Add the created elements to page.
        parentDiv.appendChild(newElement);

        document.getElementById('option16').value = ''; //clear input space
        document.getElementById('option16').focus(); //set focus cursor in input space

        outputDiv(); // create the output section.

        // Assign event listener to the newly created buttonElement
        document.getElementById('option16').addEventListener('input', caesarCipher);
    }

    function caesarCipher(e) {
        "use strict";
        let str = e.target.value;
        str = str.toUpperCase();
        let temp = [];
        let hold = [];
        let holder;
        let myRegEx = /[A-Z]/gi;
        let myMatchArr = str.match(myRegEx);

        for (let i = 0; i < str.length; i++) {
            if (myMatchArr[i] === str[i]) {
                temp.push(myMatchArr[i]);
            } else {
                temp.push(str[i]);
            }
        }
        temp = temp.join('');
        for (let j = 0; j < temp.length; j++) {
            let initialHold = temp.codePointAt(j);
            holder = initialHold;
            if (holder < 65 || holder > 90) {
                hold.push(temp[j]);
            } else {
                holder += 13;
                if (holder > 90) {
                    let firstStr = String.fromCharCode(initialHold - 13);
                    hold.push(firstStr);
                } else {
                    let secondStr = String.fromCharCode(initialHold + 13);
                    hold.push(secondStr);
                }
            }
        }
        document.getElementById('outputLabel').textContent = 'Caesar Cipher Encrypted Codes: ';
        document.getElementById('outputResults').textContent = hold.join('');
    }
