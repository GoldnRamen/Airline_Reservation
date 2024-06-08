document.getElementById("bookForm").addEventListener('submit', function(e){
    e.preventDefault()
    console.log("conneceted")

    let data = {fName: document.getElementById("fName").value,
    sName: document.getElementById("sName").value,
    age: document.getElementsByClassName("ageInput")[0].value,
    guardianName: document.getElementsByClassName("guardianNameInput"),
    guardianNumber: document.getElementsByClassName("guardianNumberInput").value,
    areacode: document.getElementById("areacodeInput"),
    phone: document.getElementsByClassName("phoneInput")[0].value,
    eMail: document.getElementsByClassName("emailInput")[0].value,
    trip: document.getElementById("tripInput"),
    monWed: document.getElementById("monWed"),
    tue: document.getElementById("tue"),
    thurSun: document.getElementById("thurSun"),
    friSat: document.getElementById("friSat"),
    departure: document.getElementById("departureDate").value,
    reTurn: document.getElementById("returnDate").value,
    depart_city: document.getElementById("departureCity"),
    arrival_city: document.getElementById("arrivalCity"),
    tickClass: document.getElementById("ticketClass"),
    numPassengers: document.getElementById("numPassengers").value,

    }

    console.log("heres it ", document.getElementById("tripInput").value)
    console.log("and heres area", document.getElementById("areacodeInput").value)
    
    const numberRegex = /^[0-9]*$/
    const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let dept_date = new Date(data.departure)
    let ret_date = new Date(data.reTurn)
    const msPerDay = 1000 * 60 * 60 * 24;
    var new_dept_date = Math.round(dept_date / msPerDay)
    var new_ret_date = Math.round(ret_date / msPerDay)
    console.log("Hello 1", new_dept_date)
    console.log("Hello 2", new_ret_date)
   
    const basePrice = Math.floor(Math.random() * 500) + 100; // Random base price for demo
    
    function calculateFlightPricing(departCity, arrivalCity, tickClass) {
        if (departCity === "Select" || arrivalCity === "Select") {
            return null;
        }
        let finalPrice = basePrice;
    
        if(tickClass === "Economy"){
            finalPrice = basePrice
        }
        else if (tickClass === "First Class") {
            finalPrice *= 10;
        }
        else if(tickClass === "Business"){
            finalPrice *= 5
        }
        return finalPrice;
    }
    function checkUnavailableFlights(departCity, arrivalCity) {
        // Mock unavailable flights logic, you can replace with real logic
        if (departCity === arrivalCity && departCity !== "Select") {
            return "Same city travel not allowed";
        }
        return "Available";
    }
    
    let pricing = calculateFlightPricing(data.depart_city.value, data.arrival_city.value);
    let unavailableFlights = checkUnavailableFlights(data.depart_city.value, data.arrival_city.value);
    
    valid = true
    
    if(data.fName === ""){
        valid = false
        document.getElementById("fName").classList.add("error")
        document.getElementsByClassName("errorMsg")[0].classList.add("block")   
    }
    if(data.sName === ""){
        valid = false
        document.getElementById("sName").classList.add("error")
        document.getElementsByClassName("errorMsg")[1].classList.add("block")
    }
    if(data.age === ""){
        valid = false
        document.getElementsByClassName("ageInput")[0].classList.add("error")
        document.getElementsByClassName("errorMsg")[2].classList.add("block")
    }
    else if(!numberRegex.test(data.age)){
        valid = false
        document.getElementsByClassName("ageInput")[0].classList.add("error")        
        document.getElementsByClassName("typeError")[0].classList.add("block")
    }
    else if(data.age < 18){
        document.getElementsByClassName("ageInput")[0].classList.add("error")        
        document.getElementsByClassName("guardianInfo")[0].classList.remove("none")
        document.getElementsByClassName("guardianInfo")[0].classList.add("block")
    }
    else if(data.age < 18 && data.guardianName === ""){
        document.getElementsByClassName("ageInput")[0].classList.add("error")        
        document.getElementsByClassName("guardianNameInput")[0].classList.add( "error")        
        document.getElementsByClassName("guardiannameError")[0].classList.add("block")
    }
    else if(data.age < 18 && data.guardianNumber === ""){
        document.getElementsByClassName("ageInput")[0].classList.add("error")        
        document.getElementsByClassName("guardianNumberInput")[0].classList.add( "error")        
        document.getElementsByClassName("guardiannumberError")[0].classList.add("block")
    }
    else if(data.age < 18 && !numberRegex.test(data.guardianNumber) && data.guardianNumber.length != 5){
        document.getElementsByClassName("ageInput")[0].classList.add("error")        
        document.getElementsByClassName("guardianNumberInput")[0].classList.add( "error")        
        document.getElementsByClassName("guardiannumberError")[0].classList.add("block")
    }
    if ((data.areacode === " ") || (data.areacode.value === "Select")){
        document.getElementsByClassName("areacodeInput")[0].classList.add("error")
        document.getElementById("areacodeMsg").classList.add("block")
    }
    if(data.phone === " "){
        valid = false
        document.getElementsByClassName("phoneInput")[0].classList.add("error")
        document.getElementsByClassName("errorMsg")[3].classList.add("block")
    }
    if(!numberRegex.test(data.phone)){
        valid = false
        document.getElementsByClassName("phoneInput")[0].classList.add("error")
        document.getElementsByClassName("numberError")[0].classList.add("block")
    }
    else if(data.phone.length < 5){
        valid = false
        document.getElementsByClassName("phoneInput")[0].classList.add("error")
        document.getElementsByClassName("lessError")[0].classList.add("block")
    }
    else if(data.phone.length > 5){
        valid = false
        document.getElementsByClassName("phoneInput")[0].classList.add("error")
        document.getElementsByClassName("greaterError")[0].classList.add("block")
    }
    else if (data.eMail == " "){
        valid = false
        document.getElementsByClassName("emailInput")[0].classList.add("error")
        document.getElementsByClassName("errorMsg")[3].classList.add("block")
    }
    if(!emailRegex.test(data.eMail)){
        valid = false
        document.getElementsByClassName("emailInput")[0].classList.add("error")
        document.getElementsByClassName("emailMsg")[0].classList.add("block")
    }
    
    if(data.trip.value == "Select"){
        valid = false
        document.getElementsByClassName("tripInput")[0].classList.add("error")
        document.getElementsByClassName("tripMsg")[0].classList.add("block")
    }
    else if(data.trip.value == "One Way")
        document.getElementById("returnDate").classList.add("none")
        // document.getElementById("retDateMsg").popover
        document.getElementById("returnLabel").classList.add("none")
        valid = true
    if(!data.departure){
        valid = false
        document.getElementById("departureDate").classList.add("error")
        document.getElementById("deptdateMsg").classList.add("block")
    }
    if(!data.reTurn){
        valid = false
        document.getElementById("returnDate").classList.add("error")
        document.getElementById("retdateMsg").classList.add("block")
    }
    if(new_dept_date > new_ret_date){
        valid = false
        document.getElementById("departureDate").classList.add("error")
        document.getElementById("deptErrMsg").classList.add("block")
    }
    if(data.depart_city.value === "Select"){
        valid = false
        document.getElementById("departureCity").classList.add("error")
        document.getElementsByClassName("departcityError")[0].classList.add("block")
    }
    if(data.arrival_city.value === "Select"){
        valid = false
        document.getElementById("arrivalCity").classList.add("error")
        document.getElementsByClassName("arrivalcityError")[0].classList.add("block")
    }
    if(data.depart_city.value === data.arrival_city.value && (data.depart_city.value != "Select" && data.arrival_city.value != "Select")){
        valid = false
        document.getElementsByClassName("departcityError")[0].classList.add("error")
        document.getElementById("departcityMsg").classList.add("block")
    }
    if(data.tickClass.value === "Select"){
        valid = false
        document.getElementById("ticketClass").classList.add("error")
        document.getElementsByClassName("ticketclassMsg")[0].classList.add("block")
    }
    if (data.numPassengers === "" || !numberRegex.test(data.numPassengers) || data.numPassengers <= 0) {
        valid = false;
        document.getElementById("numPassengers").classList.add("error");
    }
    

    if (pricing === null) {
        valid = false;
        document.getElementById("flightPricing").value = "Unavailable";
    } else {
        document.getElementById("flightPricing").value = `$${pricing}`;
    }

    document.getElementById("unavailableFlights").value = unavailableFlights;

    if (valid) {
        document.getElementById("booking_info").classList.remove("none");
        let details = `
            <p><h1> Your Booking Details are Below</h1></p>
            <hr>
            <p>First Name: ${data.fName}</p>
            <p>Last Name: ${data.sName}</p>
            <p>Age: ${data.age}</p>
            <p>Area Code: ${data.areacode.value}</p>
            <p>Phone: ${data.phone}</p>
            <p>Email: ${data.eMail}</p>
            <p>Trip: ${data.trip.value}</p>
            <p>Departure Date: ${data.departure}</p>
            <p>Return Date: ${data.reTurn}</p>
            <p>Departure City: ${data.depart_city.value}</p>
            <p>Arrival City: ${data.arrival_city.value}</p>
            <p>Ticket Class: ${data.tickClass.value}</p>
            <p>Ticket Price: $${basePrice}</p> 
            <p>Number of Passengers: ${data.numPassengers}</p>
            <p>Total Flight Ticket Cost: $${pricing * data.numPassengers}</p>
            <p>Flight Status: ${unavailableFlights}</p>
        `;
        document.getElementById("details").innerHTML = details;
        document.getElementById("details").style.padding = "50px";
        document.getElementById("details").style.marginTop = "300px";
        document.getElementById("details").style.backgroundColor = "white";
        document.getElementById("details").style.borderColor = "rgb(0, 121, 121)";        
        document.getElementById("details").style.borderWidth = "5px";

        document.getElementById("lockBtn").addEventListener("click", function(){
            alert("Flight has been Booked successfully!!")
            window.location.href = "index.html"

        })   
        
        document.getElementById("editBtn").addEventListener("click", function(){
            window.location.href = booking.html
        })
    
    }  
})