"use strict";
function getAuthors(database) {
    const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
    return authorRows.map(row => ({ first: row[0], last: row[1] }));
}
test('getAuthors', () => {
    const authors = getAuthors({
        runQuery(sql) {
            return [['Toni', 'Morrison'], ['Maya', 'Angelou']];
        }
    });
    expect(authors).toEqual([
        { first: 'Toni', last: 'Morrison' },
        { first: 'Maya', last: 'Angelou' }
    ]);
});
