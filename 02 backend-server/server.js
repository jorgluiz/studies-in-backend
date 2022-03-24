const express = require("express")
const bodyParser = require("body-parser")
const { studentsData } = require("./student")
const app = express()

const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/svr/students", (req, res) => {
    res.send(studentsData)
})

app.get("/svr/students/:id", (req, res) => {
    const id = +req.params.id
    const student = studentsData.find(st => st.id === id)

    if (!student) return res.status(404).send({ error: "not the client with this ID" })
    res.send(student)
})

app.get("/svr/students/course/:name", (req, res) => {
    const name = req.params.name
    const arr1 = studentsData.filter(st => st.course === name)
    res.send(arr1)
})

app.post("/svr/students", (req, res) => {
    let body = req.body
    let maxid = studentsData.reduce((acc, curr) => (curr.id >= acc ? curr.id : acc), 0)
    let newid = maxid + 1
    let newStudent = { id: newid, ...body }
    studentsData.push(newStudent)
    res.send(newStudent)
})

app.put("/svr/students/:id", (req, res) => {
    let id = +req.params.id
    let body = req.body
    let index = studentsData.findIndex(st => st.id === id)
    console.log(index)
    if (index >= 0) {
        let updatestudent = { id: id, ...body }
        studentsData[index] = updatestudent
        res.send(updatestudent)
    } else {
        res.status(404).send({ error: "not the client with this ID" })
    }
})

app.delete("/svr/students/:id", (req, res) => {
    let id = +req.params.id
    let index = studentsData.findIndex(st => st.id === id)
    if (index >= 0) {
        let deletedStudent = studentsData.splice(index, 1)
        res.send(deletedStudent)
    } else res.status(404).send({ error: "not the client with this ID" })
})


app.listen(port, () => {
    console.log(`server conected port ${port}`)
})