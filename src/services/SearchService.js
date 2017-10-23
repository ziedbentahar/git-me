import lunr from 'lunr';
import groupBy from '../helpers/groupBy';


export default class SearchService {

    createIndex = (documents) => {

        this.documentsWithId = {};
        const self = this;
        this.index = lunr(function () {
            const indexer = this; 
            indexer.ref('id');
            indexer.field('category');
            indexer.field('command');
            indexer.field('description');

            documents.forEach((item, index) => {
                const documentWithId = {id: index, ...item}
                self.documentsWithId[index] = documentWithId;
                indexer.add(documentWithId)
             });
        });
    }

    searchByPrefix = (queryTerm) => {

        if(!this.index || !queryTerm) {
            return;
        }
        const result = this.index.search(`${queryTerm}^100 ${queryTerm}*^10 ${queryTerm}~2`);
        
        if (result && result.length > 0) {
            return groupBy(result.map(item => this.documentsWithId[item.ref]), 'category');
        } 

    }
}