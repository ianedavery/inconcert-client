import React from 'react';

import './Main.css';

export default function Main(props) {
	return (
	    <main role-='main' className='main'>
	      <header role='banner' className='header'>
	        <h1>inConcert</h1>
	        <h2>Never miss the next show.</h2>
	      </header>
	      <section className='first-section'>
	        <h3>Search for live shows in your area</h3>
	        <p>Map out upcoming live music events based on your location.</p>
	      </section>
	      <section className='second-section'>
	        <h3>Add events to your calendar.</h3>
	        <p>When you find an event you want to attend, add it to your calendar so you don't miss it.</p>
	      </section>
	    </main>	
	);
}