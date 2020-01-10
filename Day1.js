const str = `120847
60347
63340
72773
57020
133960
98163
121548
87233
59150
59712
146816
93205
61936
75319
141998
97125
73450
106250
129939
94854
113782
112044
127923
67114
119770
130034
70876
82204
101939
132604
142836
117066
95861
75597
94630
50085
101107
77937
94286
74091
140875
118543
52767
54544
93062
115681
142065
111737
131214
75160
115432
140504
115376
86589
104631
133012
108690
85993
99533
133725
87698
133480
68379
107852
111209
116623
98717
130227
114356
144516
89663
118355
77816
149914
105080
116793
65259
143900
67838
148389
129753
140524
90005
147305
118428
79940
59110
78120
87066
64722
142066
81410
106958
92984
95584
108534
66362
126340
143660`;

// function calculateTotalFuel(str) {
//   const moduleMasses = str.split("\n");
//   const dividedByThree = moduleMasses.map(item => {
//     return Math.floor(item / 3) - 2;
//   });
//   const TotalFuelRequired = dividedByThree.reduce(
//     (accumulator, currentValue) => {
//       return accumulator + currentValue;
//     }
//   ); // this is adding up all of the entries in the dividedByThree array
//   return TotalFuelRequired;
// }

// calculateTotalFuel(str);

// need to work out how much fuel is needed to carry the fuel required for the module masses - don't stop until the fuel require is negative
function accountForFuelMass(string) {
  const moduleMasses = string.split("\n");
  const fuelRequiredForEachModule = moduleMasses.map(item => {
    return Math.floor(item / 3) - 2;
  });

  const arrayOfFuelValues = fuelRequiredForEachModule.map(fuelMass => {
    let arrayOfFuelsToSum = [];

    while (fuelMass > 0) {
      arrayOfFuelsToSum.push(fuelMass);
      fuelMass = Math.floor(fuelMass / 3) - 2;
    }
    return arrayOfFuelsToSum.reduce((a, b) => {
      return a + b;
    });
  });
  return arrayOfFuelValues.reduce((a, b) => {
    return a + b;
  });
}

const totalSumOfFuelRequired = accountForFuelMass(str);
