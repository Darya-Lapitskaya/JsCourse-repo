class BotanicalGarden {
    constructor(needHvoya = false) {
        this.treeListvPool = [];
        if (needHvoya) {
            this.treeHvoyaPool = [];
        }
            }

    addTreeHvoya(treeHvoya) {
        if (this.treeHvoyaPool) {
            this.treeHvoyaPool.push(treeHvoya);
        } else {
            console.log('No Hvoya trees needed');
        }
    }

    addTreeListv(treeListv) {
        this.treeListvPool.push(treeListv);
    }

    addHvoyaPool(treeHvoya) {
        if (this.treeHvoyaPool) {
            this.treeHvoyaPool = [...this.treeHvoyaPool, ...treeHvoya];
        } else {
            console.log('No Hvoya trees needed');
        }
    }

    addListvPool(treeListv) {
        this.treeListvPool = [...this.treeListvPool, ...treeListv];
    }

    heightFilter(height) {
        return this.treeHvoyaPool.find((tree) => tree.geHeight() >= height);

        }

    }

module.exports = BotanicalGarden;