# String Calculator TDD Kata

## Overview

The String Calculator TDD Kata is a test-driven development exercise that involves creating a simple calculator that can process a string of numbers and perform addition. The goal is to build the functionality incrementally while adhering to TDD principles.

## Features

- **Add** method that takes a string of numbers and returns their sum.
- Handles comma-separated numbers.
- Supports new lines as delimiters.
- Allows custom delimiters.
- Throws an error for negative numbers and lists all negative numbers in the error message.

## Installation

1. **Clone the Repository**

   ```
   git clone 

   cd string-calculator

   Install Dependencies   - npm install
   ng test
   ```

## Implementation Details

**StringCalculatorService**

This service provides the add method with the following behavior:

Empty string: Returns 0.
Single number: Returns the number itself.
Comma-separated numbers: Returns the sum of the numbers.
New lines: Supports new lines as delimiters.
Custom delimiters: Supports custom delimiters specified at the start of the string.
Negative numbers: Throws an exception with a message listing all negative numbers.