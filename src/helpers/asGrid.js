export default function asGrid(arr, nbElementsPerRow) {
    const nbRows = Math.ceil(arr.length / nbElementsPerRow);
    var grid = new Array(nbRows);
    for(var i = 0, count = 0; i < nbRows; i++) {
            grid[i] = new Array(nbElementsPerRow);
        for(var j = 0; j < nbElementsPerRow && count < arr.length; j++, count ++) {
            grid[i][j] = arr[count];
        }
    }

    return grid;
}