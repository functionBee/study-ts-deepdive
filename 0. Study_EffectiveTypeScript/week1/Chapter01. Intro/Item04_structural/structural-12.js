"use strict";
function getAuthors(database) {
    const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
    return authorRows.map(row => ({ first: row[0], last: row[1] }));
}
