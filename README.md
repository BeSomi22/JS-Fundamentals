# JavaScript Command Line Scripts

A collection of simple Node.js scripts that perform different tasks using command-line arguments.

## Scripts

- **1-arguments.js**  
  Prints:
  - `No argument` if none
  - `Argument found` if one
  - `Arguments found` otherwise

- **2-first_argument.js**  
  Prints the first argument or `No argument` if none (without using `.length`).

- **3-value_arguments.js**  
  Prints: `<first_argument> is <second_argument>`.

- **4-convert_to_integer.js**  
  Converts the first argument to an integer:
  - Prints `My number: <int>` if valid
  - Else prints `Not a number`

- **5-multi_languages_loop.js**  
  Uses a loop to print 3 lines:
  - `C is fun`
  - `Python is cool`
  - `JavaScript is amazing`

- **6-multiple_occurrences.js**  
  Prints `"C is fun"` x times using a loop.
  - If x is not a number → `Missing number of occurrences`

- **7-square.js**  
  Prints an X square of given size.
  - If missing/invalid → `Missing size`

- **8-add.js**  
  Adds two integers using `function add(a, b)` and prints the result.

## Usage

Run with Node.js:

```bash
node <script_name.js> [args]
