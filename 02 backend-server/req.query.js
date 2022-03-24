

url = "http:localhost:3000/svr/students?course=JS"

app.get("/svr/students", (req, res) => {
    const course = req.query.course
    const arr1 = studentsData.filter(st => st.course === course)
    res.send(arr1)
})




url = "http:localhost:3000/svr/students?course=JS,React"


app.get("/svr/students", (req, res) => {
    const courseStr = req.query.course
    const arr1 = studentsData
    if(courseStr){
        let courseArr = courseStr.split(",")
         arr1 = arr1.filter(st => courseArr.find(c1 => c1 === st.course))
    }
    res.send(arr1)
})




'http://localhost:3000/svr/students?sort=name&grade=B&course=React,Node,JS'


app.get("/svr/students", (req, res) => {
    let courseStr = req.query.course
    let grade = req.query.grade
    let sort = req.query.sort
    let arr1 = studentsData
    if (courseStr) {
        let courseArr = courseStr.split(",")
        arr1 = arr1.filter(st => courseArr.find(c1 => c1 === st.course))
    }
    if (grade) {
        arr1 = arr1.filter(st => st.grade === grade)
    }
    if (sort === "name")
        arr1.sort((st1, st2) => st1.name.localeCompare(st2.name))
    if (sort === "course")
        arr1.sort((st1, st2) => st1.name.localeCompare(st2.course))
    res.send(arr1)
})
