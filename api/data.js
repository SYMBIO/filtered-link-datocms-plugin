module.exports = (req, res) => {

    const data = [{
        value: 1,
        text: 'First item'
    }, {
        value: 2,
        text: 'Second item'
    }];

    res.json(data);
};
