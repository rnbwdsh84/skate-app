function Quote() {
    let quote = [
        "A skate a day keeps the doctor away", 
        "What's better than a skate? A skate with a mate!", 
        "Skate like you mean it", 
        "Make every date, a skate date!",
        "I skate, therefore I am!"
    ]
    const chosenQuote = quote[Math.floor(Math.random() * quote.length)]; 
    const printableQuote = (`Todays Quote: ${chosenQuote}`)

    return (
        <p className="skateQuote">{printableQuote}</p>
    )
}

export default function Nav() {
    return (
        <div>
            <nav>
                <nav className="header">
                    <h1 class="logo"><a href="#">A.S.A</a></h1>
                    <Quote />
                    <ul className="main-nav">
                    <li><a href="#Events" classNameName="navlink">Events</a></li>
                    <li><a href="#About" className="navlink">About</a></li>
                    <li><a href="#form" className="navlink">Contact</a></li>
                    </ul>
                </nav> 
            </nav>
        </div>
    )
}