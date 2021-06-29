class Contact extends React.Component{

	render(){
		return(
			
		<form id="section3">
		  <div>
		    <h2><span>Contact</span> <span>Us</span></h2>
		  </div>
		  <div className="form-group">
		    <input className="form-control" type="text" name="name" placeholder="Enter Your Good Name"/>
		  </div>
		  <div className="form-group">

		    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com"/>
		  </div>

		  <div className="form-group">
		    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" placeholder="Your Message"></textarea>
		  </div>
		  <div className="form-group text-center">
		    <button type="button" className="btn btn-primary">Submit</button>
		  </div>
		</form>
			)
	}
}