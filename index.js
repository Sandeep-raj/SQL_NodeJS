const mssql = require('mssql');
const dbConfig = require('./dbconfig.json');

function main() {
    CreateAndInsertTable();
}

function connectToDB() {
    return mssql.connect(dbConfig);
}

function CreateAndInsertTable() {
    connectToDB().then(pool => {
        // Query
        console.log('connected');

        const table = new mssql.Table('tempTable')
        table.create = true
        table.columns.add('a', mssql.Int, { primary: true, nullable: false })
        table.columns.add('b', mssql.VarChar(50), { nullable: false })

        table.rows.add(627, 'test')

        const request = new mssql.Request()
        request.bulk(table, (err, result) => {
            // ... error checks
            if (err) {
                console.log(err);
            } else {
                return result;
            }
        }).then(result => {
            console.log(result)
        })
        pool.close();
    }).catch(err => {
        console.log(err);
    });
}

function CallTheStoredProcedure() {
    connectToDB().then(pool => {
        return pool.request()
            .input('n', mssql.Int, 5)
            //.output('output_parameter', sql.VarChar(50))
            .execute('[tempdb].[dbo].[selectnrecords]')
    }).then(result => {
        console.log(result)
    }).catch(err => {
        // ... error checks
        console.log(err)
    });
    pool.close();
}

function QueryTheTable() {
    connectToDB().then(pool => {
        pool.request().query('select * from tempTable', (err, result) => {
            if (!err)
                console.log(result);
            else
                console.log(err);
            return pool;
        }).then(pool => {
            pool.close();
        })
    });
}

function CreateTable() {
    connectToDB().then(pool => {
        pool.request()
            .query('create table tempTable2 (id int identity, field1 varchar(5), field2 varchar(5))')
            .then((err, result) => {
                if (!err) {
                    console.log(result);
                }
                else {
                    console.log(err);
                }
                pool.close();
            });
    });
}

function InsertDataIntoTable() {
    connectToDB().then(pool => {
        const table = new mssql.Table('tempTable2')
        //table.create = true
        table.columns.add('field1', mssql.VarChar(5), { nullable: true })
        table.columns.add('field2', mssql.VarChar(5), { nullable: true })

        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')
        table.rows.add('noob', 'test')


        const request = new mssql.Request()
        request.bulk(table, (err, result) => {
            if (!err) {
                console.log(result);
            }
            else {
                console.log(err);
            }
            pool.close();

        });
    })
}

function QueryStream() {
    connectToDB().then(pool => {
        const request = new mssql.Request();
        request.stream = true // You can set streaming differently for each request
        request.query('select * from temptable2') // or request.execute(procedure)

        request.on('recordset', columns => {
            // Emitted once for each recordset in a query
            console.log(columns);
        })

        request.on('row', row => {
            // Emitted for each row in a recordset
            console.log(row);
        })

        request.on('error', err => {
            // May be emitted multiple times
            console.log(err);
        })

        request.on('done', result => {
            // Always emitted as the last one
            console.log(result);
            pool.close()
        })
    })
}

function QueryStreamInBatches() {

    connectToDB().then(pool => {
        const request = new mssql.Request();
        request.stream = true // You can set streaming differently for each request
        request.query('select * from temptable2') // or request.execute(procedure)

        let rowsToProcess = [];
        request.on('row', row => {
            rowsToProcess.push(row);
            if (rowsToProcess.length >= 15) {
                request.pause();
                processRows();
            }
        });
        request.on('done', () => {
            processRows();
            pool.close();
        });
    
        function processRows() {
            // process rows
            console.log(rowsToProcess.length);
            rowsToProcess = [];
            request.resume();
        }
    })
}

main();