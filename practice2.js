let marks = {
  A: 90,
  B: 80,
  C: 70,
  D: 60,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "Marks " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]
  );
}
