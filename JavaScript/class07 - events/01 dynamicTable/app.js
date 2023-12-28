/* 
CREATE A DYNAMIC TABLE
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :)
*/
const colNum = document.querySelector(".colNum");
const rowNum = document.querySelector(".rowNum");
const clickSubmit = document.querySelector("button");
clickSubmit.addEventListener("click");

function createTable() {
    const table = document.createElement("table");
    const tBody = document.createElement("tbody");

    for (let i = 0; i < 2; i++) {
        const row = document.createElement("tr");
    

        for (let j = 0; j < 2; j++) {
            const element = array[j];
            const cell = document.createElement("td");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tBody.appendChild(row);
    }
    table.appendChild(tBody);
    document.body.appendChild(table);
    table.setAttribute("border", "2");
}