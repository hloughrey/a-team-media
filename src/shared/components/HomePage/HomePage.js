'use strict';
import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import Weddings from '../Weddings/Weddings';
import ContactUs from '../ContactUs/ContactUs';
import SchoolsGroups from '../SchoolsGroups/SchoolsGroups';
import PhotoSlideConversions from '../PhotoSlideConversions/PhotoSlideConversions';
import VideoTapeConversions from '../VideoTapeConversions/VideoTapeConversions';
import FAQ from '../FAQ/FAQ';

// Import Text
import text from '../../lib/text';

const HomePage = () => (
	<div className='row'>
		<Hero />
		<About />
		<Weddings />
		<SchoolsGroups />
		<VideoTapeConversions />
		<PhotoSlideConversions />
		<FAQ text={text.FAQ}/>
		<ContactUs />
	</div>
);

export default HomePage;