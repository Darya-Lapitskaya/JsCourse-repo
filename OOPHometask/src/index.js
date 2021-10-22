const prompt = require('prompt-promise');
let treeHvoya = require('./plantae/treeHvoya');
let treeListv = require('./plantae/treeListv');
let BotanicalGarden = require('./botanicalGarden/botanicalGarden');

let botanicalGarden = new BotanicalGarden(true);
let treesHvoya = [
    new treeHvoya(10,'a'),
    new treeHvoya(15, 'b'),
    new treeHvoya(120, 'c'),
    new treeHvoya(120, 'd'),
];

let treesListv = [
    new treeListv(200, 'red'),
    new treeListv(155, 'blue'),
    new treeListv(17, 'yellow'),
    new treeListv(17, 'black'),
];

botanicalGarden.addHvoyaPool(treesHvoya);
botanicalGarden.addListvPool(treesListv);

(async () => {
    const heigth = parseInt(await prompt('Enter the tree height:'));
    const flavor = await prompt('Please enter the flavor');
    const tree = botanicalGarden.heightFilter(15);
    console.log(tree.toString());
    prompt.finish();

})();



