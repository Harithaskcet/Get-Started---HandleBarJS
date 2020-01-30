const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
}));

app.use(express.static('public'));

const show = () => {
    return [
        {
            name: 'Haritha',
            jobType: 'IT'
        },
        {
            name: 'Sudhan',
            jobType: 'Non - IT'
        },
        {
            name: 'Deepika',
            jobType: 'Government'
        }
    ]
};

const condition = true; 

app.get('/', (req,res) => {
    res.render('main', { proPlayer: show(), show: condition});
});

app.listen(port, ()=> {
    console.log(`App listening to the port ${port}`);
});