const CHEAT_SHEET_DOCUMENTS_FILE_SUFFIX = '-cheat-sheet.json';
const CHEAT_SHEET_INDEX_FILE_SUFFIX = '-cheat-sheet-index.json';

const cheatSheetsConfig = {
    git: {
        name: 'git cheat sheet',
        data: {
            documents: `/git${CHEAT_SHEET_DOCUMENTS_FILE_SUFFIX}`,
            index: `/git${CHEAT_SHEET_INDEX_FILE_SUFFIX}`
        },
    },
    docker: {
        name: 'docker cheat sheet',
        data: {
            documents: `/docker${CHEAT_SHEET_DOCUMENTS_FILE_SUFFIX}`,
            index: `/docker${CHEAT_SHEET_INDEX_FILE_SUFFIX}`
        },
    }
}

export default cheatSheetsConfig;