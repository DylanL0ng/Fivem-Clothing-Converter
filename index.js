const fs = require("fs");
let startTime = new Date().getTime()
const getCurName = (dirname) => {
    console.log("Current file names:")
    fs.readdirSync(dirname).forEach(file => {
        let rename = file + "^"
        // console.log(rename)
        fs.renameSync(`${dirname}/${file}`, `${dirname}/${rename}`)
        fs.readdirSync(`${dirname}/${rename}`).forEach(renamedFile => {
            // console.log(renamedFile)
            fs.renameSync(`${dirname}/${rename}/${renamedFile}`, `${dirname}/${rename}/${rename+renamedFile}`)
        })
    })
    let finishedTime = new Date().getTime() - startTime
    console.log(`Completed in ${finishedTime} milliseconds`)
}

getCurName('stream')