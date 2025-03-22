import { writeFileSync, readFileSync } from 'node:fs'

const users = [{ name: "T'challa", email: 'black@pant.her' }]

const usersJson = JSON.stringify(users)

writeFileSync('backend/users.json', usersJson)

const readUsersJson = readFileSync('backend/users.json')
const readUsers = JSON.parse(readUsersJson)

console.log(readUsers)
