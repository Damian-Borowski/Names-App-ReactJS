class App extends React.Component {
    state = {
        wrozba: ["Jagienka", "Lukas", "Krystian"],
        wylosowana: null,
        value: "",
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    handleAdd = () => {
        if (this.state.value === "") return alert("Brak")
        const options = [...this.state.wrozba]
        options.push(this.state.value)
        this.setState({
            wrozba: options,
            value: "",
        })
        alert('Wrozba dodana')
    }

    handleShow = () => {
        const name = Math.floor(Math.random() * this.state.wrozba.length);
        this.setState({
            wylosowana: this.state.wrozba[name]
        })
    }

    render() {
        const { wrozba } = this.state;
        return (
            <label>
                <button onClick={this.handleShow}>Zobacz wróżbę</button>
                <br />
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleAdd}>Dodaj wróżbę</button>
                <h1>{this.state.wylosowana}</h1>
            </label>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))
