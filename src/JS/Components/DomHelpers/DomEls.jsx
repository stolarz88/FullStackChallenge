/* eslint react/no-multi-comp: 0 */
import React, { Component } from 'react';

class Article extends Component {
	render() {
		return <article {...this.props}>{this.props.children}</article>;
	}
}

class Aside extends Component {
	render() {
		return <aside {...this.props}>{this.props.children}</aside>;
	}
}

class Div extends Component {
	render() {
		return <div {...this.props}>{this.props.children}</div>;
	}
}

class Footer extends Component {
	render() {
		return <footer {...this.props}>{this.props.children}</footer>;
	}
}

class H1 extends Component {
	render() {
		return <h1 {...this.props}>{this.props.children}</h1>;
	}
}

class H2 extends Component {
	render() {
		return <h2 {...this.props}>{this.props.children}</h2>;
	}
}

class H3 extends Component {
	render() {
		return <h3 {...this.props}>{this.props.children}</h3>;
	}
}

class H4 extends Component {
	render() {
		return <h4 {...this.props}>{this.props.children}</h4>;
	}
}

class H5 extends Component {
	render() {
		return <h5 {...this.props}>{this.props.children}</h5>;
	}
}

class Header extends Component {
	render() {
		return <header {...this.props}>{this.props.children}</header>;
	}
}

class Li extends Component {
	render() {
		return <li {...this.props}>{this.props.children}</li>;
	}
}

class Main extends Component {
	render() {
		return <main {...this.props}>{this.props.children}</main>;
	}
}

class Nav extends Component {
	render() {
		return <nav {...this.props}>{this.props.children}</nav>;
	}
}

class P extends Component {
	render() {
		return <p {...this.props}>{this.props.children}</p>;
	}
}

class Section extends Component {
	render() {
		return <section {...this.props}>{this.props.children}</section>;
	}
}

class Small extends Component {
	render() {
		return <small {...this.props}>{this.props.children}</small>;
	}
}

class Span extends Component {
	render() {
		return <span {...this.props}>{this.props.children}</span>;
	}
}

class Strong extends Component {
	render() {
		return <strong {...this.props}>{this.props.children}</strong>;
	}
}

class Ul extends Component {
	render() {
		return <ul {...this.props}>{this.props.children}</ul>;
	}
}

export { Article, Aside, Div, Footer, H1, H2, H3, H4, H5, Header, Li, Main, Nav, P, Section, Small, Span, Strong, Ul };
