var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        poster: './img/harry_potter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        poster: './img/lion_king.jpg'
    },
    {
        id: 3,
        title: 'Szklana pułapka',
        desc: 'Film sensacyjny',
        poster: './img/die_hard.jpg'
    },
    {
        id: 4,
        title: 'Koszmar z ulicy Wiązów',
        desc: 'Horror',
        poster: './img/nightmare.jpg'
    },
];

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.object.isRequired,
    },
    render: function() {
    return (
        React.createElement('h2', {}, this.props.title)
        );
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.object.isRequired,
    },
    render: function() {
    return (
        React.createElement('p', {}, this.props.desc)
        );
    }
});

var MoviePoster = React.createClass({
    propTypes: {
        poster: React.PropTypes.object.isRequired,
    },
    render: function() {
    return (
        React.createElement('img', {src: this.props.poster})
        );
    }
}); 
    
var MovieList = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    
    render: function() {
        return (
                React.createElement('li', {src: this.props.movie.id},
                    React.createElement(MovieTitle, {title: this.props.movie.title}),
                    React.createElement(MovieDesc, {desc: this.props.movie.desc}),
                    React.createElement(MoviePoster, {poster: this.props.movie.poster})
                )
        );
    }
});
    
var moviesElements = movies.map(function(movie) {
    return React.createElement(MovieList, {key: movie.id, movie: movie}); 
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));