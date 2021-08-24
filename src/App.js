import logo from "./assets/img/Billionaise.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div className="Greeting">
					① We start, buy, and invest in wonderful internet businesses.
				</div>
				<div className="Greeting">② Our family of companies includes:</div>
				<div className="Greeting">③ We have also invested in:</div>
				<div className="Greeting" id="sub">
					④ Interested in seeling us a business?
					<p>
						ⓐ <b>We arent your typical buyer</b>
					</p>
					<p>ⓑ</p>
				</div>
			</header>
			<main></main>
		</div>
	);
}

export default App;
