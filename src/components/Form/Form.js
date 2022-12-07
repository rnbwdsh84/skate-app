export default function Form() {
    return (
        <div className="queryForm" id="form">
            <h2 className="queryHeading">Contact Form</h2>
            <div className="queryitems">
            <form id="queryFormEntry" onsubmit="thankyou()"/>
                <label className="querylabel" for="fname">First name:</label><br/>
                <input className="queryInput" type="text" id="fname" name="fname" placeholder="First Name:" size="50"/><br/>
                <label className="querylabel" for="lname">Last name:</label><br/>
                <input className="queryInput" type="text" id="lname" name="lname" placeholder="Last Name:" size="50"/><br/>
                <label className="querylabel" for="email">Email:</label><br/>
                <input className="queryInput" type="email" id="email" name="email" placeholder="Email:" size="50"/><br/>
                <label className="querylabel" id="querylabel" for="message">Message:</label><br/>
                <textarea form="queryForm" id="message" name="message" rows="8" cols="50" placeholder="Enter Your Message here...">
                </textarea>
                <br/>
                <label for="radio" className="querylabel">Query Type</label><br/>
                <input className="queryInput" type="radio" id="event" name="query" value="HTML" aria-label="eventQuery"/>
                <label for="Event">Event</label><br/>
                <input className="queryInput" type="radio" id="general" name="query" value="CSS" aria-label="generalQuery"/>
                <label for="General">General</label><br/>
                <input className="queryInput" type="radio" id="learnToSkate" name="query" value="JavaScript" aria-label="learnToSkateQuery"/>
                <label for="Learn To Skate">Learn To Skate</label><br/><br/>
                <input type="submit" id="submit" name="submit" value="SEND INQUIRY" aria-label="Send Request"/>
            </div>
        </div>
    )
}