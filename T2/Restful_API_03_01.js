const expr = require("express");
const router = expr.Router();
const data = [
    { id: 101, name: "Virat Kohli", team: "Royal Challengers Bengaluru", role: "Batsman", run: 7263, wickets: 4 },
    { id: 102, name: "MS Dhoni", team: "Chennai Super Kings", role: "Wicketkeeper-Batsman", run: 5165, wickets: 0 },
    { id: 103, name: "Rohit Sharma", team: "Mumbai Indians", role: "Batsman", run: 6628, wickets: 15 },
    { id: 104, name: "Hardik Pandya", team: "Mumbai Indians", role: "All-rounder", run: 2309, wickets: 53 },
    { id: 105, name: "Ravindra Jadeja", team: "Chennai Super Kings", role: "All-rounder", run: 2692, wickets: 152 },
    { id: 106, name: "Sai Sudharsan", team: "Gujarat Titans", role: "Batsman", run: 722, wickets: 0 },
    { id: 107, name: "Sai Kishore", team: "Gujarat Titans", role: "Bowler", run: 125, wickets: 7 }
];

router.get('/', (req, res) => {
    res.json(data)
})

router.get('/role/:role', (req, res) => {
    const role = req.params.role;
    const filteredData = data.filter(item => {
        if (item.role.toLowerCase() == role.toLowerCase()) {
            return true;
        }
    })
    if (filteredData.length != 0) {
        res.json(filteredData);
    }
    else {
        res.json("Not Found");
    }
})

router.get('/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const filteredData = data.filter(item => {
        if (item.id === id) {
            return true;
        }
    })
    if (filteredData.length != 0) {
        res.json(filteredData);
    }
    else {
        res.json("Not Found");
    }
})

module.exports = router