import lunr from 'lunr';
import groupBy from 'helpers/groupBy';

class SearchService {

    initialize(documents, index) {
        this.index = lunr.Index.load(index);
        this.documents = documents;
    }

    searchByPrefix = (queryTerm) => {

        if(!this.index|| !this.documents) {
            throw  new Error(
                `Search service was not properly initialized. 
                initialize() was not invoked properly.
            `);
        }

        if(!queryTerm) {
            return;
        }

        const result = this.index.search(`${queryTerm}^100 ${queryTerm}*^10`);
        
        if (result && result.length > 0) {
            return groupBy(result.map(item => this.documents[item.ref]), 'category');
        } 

    }
}

export default new SearchService();