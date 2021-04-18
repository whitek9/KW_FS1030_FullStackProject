// Base code leveraged from TODO-lab-with-storage from FS1020 gitlab repo

import util from 'util'
import fs from 'fs'

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const readItems = async (databasePath) => {
  
    if (!fs.existsSync(databasePath)) {

        fs.appendFile(databasePath, '[]', (err) => {
            
            if (err) {
                console.log(err)
            }
        })
    }

    const json = await readFile(databasePath)

    return JSON.parse(json)
}


const writeItems = async (items, databasePath) => {

    const json = JSON.stringify(items, null, 2)

    return writeFile(databasePath, json)
}

const getItemById = async (id, databasePath) => {
  
    const items = await readItems(databasePath)
 
    let matchedItem

    items.forEach((item) => {
        
        if (item.id === id) {
            matchedItem = item
        }

    })

    if (matchedItem) {
        return matchedItem
    }

    return null
}

const createItem = async (newItem, databasePath) => {
    
    const items = await readItems(databasePath)
    
    items.push(newItem)

    return writeItems(items, databasePath)
}


export {
    getItemById,
    createItem,
    readItems as getAllItems,
}
