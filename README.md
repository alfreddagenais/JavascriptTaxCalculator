# Javascript Tax Calculator functions

A pure vanilla Javascript way to calculate Tax of a number

```javascript
var tax = 14.975;

// Regular calculation
getTaxValueFromNumber(100, tax)    // => 14.975
addTaxValueToNumber(100, tax)      // => 114.975

// Inverse calculation
getInverseTaxValueFromNumber(114.975, tax)  // => 14.975
removeTaxValueFromNumber(114.975, tax)      // => 100

```

### Components

The implementation uses `countDecimals` to help round number. More details on https://github.com/alfreddagenais/countDecimals