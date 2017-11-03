import lunr from 'lunr';
import groupBy from 'helpers/groupBy';

export default class SearchService {

    constructor({documentsFileName, indexFileName}) {
        this.documentsFileName = documentsFileName;
        this.indexFileName = indexFileName;
    }

    async loadDocumentsAndData() {

        const [documents,
            index] = await Promise.all([
            (await fetch(this.documentsFileName)).json(),
            (await fetch(this.indexFileName)).json()
        ]);

        this.index = lunr.Index.load(index);
        this.documents = documents;
    }

    searchByPrefix = (queryTerm) => {

        if (!this.index || !this.documents) {
            throw new Error(`Search service was not properly initialized. 
                initialize() was not invoked properly.
            `);
        }

        if (!queryTerm) {
            return;
        }

        const result = this
            .index
            .search(`${queryTerm}^100 ${queryTerm}*^10`);

        if (result && result.length > 0) {
            return groupBy(result.map(item => this.documents[item.ref]), 'category');
        }

    }
}