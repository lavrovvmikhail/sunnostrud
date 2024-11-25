// Example array of arrays
let renderChunks = [
    [1, 2, 3],   // renderChunks[0] has 3 elements
    [],          // renderChunks[1] is empty
    [4, 5]       // renderChunks[2] has 2 elements
];

for (let i = 0; i < renderChunks.length; i++) {
    if (renderChunks[i].length == 0) {
        console.log(`renderChunks[${i}] is empty.`);
    } else {
        console.log(`renderChunks[${i}] has ${renderChunks[i].length} elements.`);
    }
}
