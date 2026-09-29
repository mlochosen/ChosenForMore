<script context="module" lang="ts">
	export const prerender = true;
</script>
<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div>
	<img src="chosenformorebackground.jpg" alt="Home Image" class="w-full h-h26" /> 
	<!-- Card for First option -->
	<div class="hero h-96 bg-gray-100 text-blue-800">
		<div class="hero-content flex-col lg:flex-row ">
			<div class="grid grid-cols-2 gap-44 justify-between">
		  <img src="mission.jpg" class="max-w-sm rounded-lg shadow-2xl h-full w-full" />
		  <div>
			<h1 class="text-5xl font-bold text-center mt-2">Mission and Values</h1>
			<p class="py-6 text-center">This is our why, our foundation, and our calling </p>
			<ul class="text-center text-xl">
				<li class="hover:bg-transparent hover:font-semibold hover:underline hover:cursor-pointer" on:click={()=> goto('why_us/mission')}>Mission & Values</li>
				<li class="mt-5 hover:bg-transparent hover:font-semibold hover:underline hover:cursor-pointer" on:click={()=> goto('why_us/our_why')}>Our Why</li>
			</ul>
		  </div>
		  </div>
		</div>
	</div>
		<div class="hero h-48 bg-blue-500 text-white">
			<div class="hero-content text-center">
			  <div class="text-center">
				<h1 class="mb-5 text-5xl font-bold text-white ml-10">Core Services</h1>
			  </div>
			</div>
		  </div>
	<!-- Card for 2nd option -->
	<div class="hero h-96 bg-yellow-400 text-blue-800">
		<div class="hero-content flex-col lg:flex-row ">
			<div class="grid grid-cols-2 gap-56 justify-between">
		  <div>
			<h1 class="text-5xl font-bold text-center">Rise Up</h1>
			<p class="py-6 text-center">(Reach, Inspire, Strengthen, Empower, Unleash Potential)</p>
			<p class="py-3 text-center">Includes programming, goal setting, coaching, and more to assist students in becoming their best selves </p>
			<div class="text-center">
			<button class="btn btn-primary mt-5 bg-blue-500 hover:bg-blue-300" on:click={() => goto('rise_up')}>Learn More</button></div>
		  </div>
		  <div class="ml-20">
		  <img src="services.jpg" class="max-w-sm rounded-lg shadow-2xl h-full w-full" />
		  </div>
		  </div>
		</div>
		</div>
		<!-- Card for service 2 -->
		<div class="hero h-96 bg-blue-500 text-white">
			<div class="hero-content flex-col lg:flex-row ">
				<div class="grid grid-cols-2 gap-44 justify-between">
			  <img src="offering.jpg" class="max-w-sm rounded-lg shadow-2xl h-full w-96" />
			  <div>
				<h1 class="text-5xl font-bold text-center mt-2">More in Motion</h1>
				<p class="py-6 text-center">Focuses on assisting youth in getting one step closer to their purpose in life by taking small steps from where they are.</p>
				<div class="text-center">
			<button class="btn btn-primary mt-5 bg-yellow-400 hover:bg-yellow-300" on:click={() => goto('mim')}>Learn More</button></div>
			  </div>
			  </div>
			</div>
		</div>
		<!-- Addtionally Services-->
	<div class="hero h-96 bg-yellow-400 text-blue-800">
		<div class="hero-content flex-col lg:flex-row ">
			<div class="grid grid-cols-2 gap-56 justify-between">
		  <div>
			<h1 class="text-5xl font-bold text-center">Additional Services</h1>
			<p class="py-6 text-center">We don't stop with the core services - here's what else we offer.</p>
			<ul class="text-center text-xl">
				<li class="hover:bg-transparent hover:font-semibold hover:underline hover:cursor-pointer" on:click={() => goto('mentorship')}>Lead the Way (Mentorship)</li>
				<li class="mt-5 hover:bg-transparent hover:font-semibold hover:underline hover:cursor-pointer" on:click={() => goto('field_trips')}>Next Stop: More (Field Trips)</li>
				<li class="mt-5 hover:bg-transparent hover:font-semibold hover:underline hover:cursor-pointer" on:click={() => goto('summer_camp')}>Summer Camp (Camp CFM)</li>
				<li class="mt-5 hover:bg-transparent hover:font-semibold hover:underline hover:cursor-pointer" on:click={() => goto('homeschool')}>More Academy (Homeschool)</li>
			</ul>
		  </div>
		  <div class="ml-20">
		  <img src="volunteer.jpg" class="max-w-sm rounded-lg shadow-2xl h-full w-full" />
		  </div>
		  </div>
		</div>
		</div>
		<!-- Donation -->
		 <div class="h-72">
		<div class="h-full bg-cover bg-handprints">
			<div class="bg-black h-full bg-opacity-60">
				<br>
			  <div class="text-center">
				<h1 class="my-14 text-5xl font-bold text-white">Make a Difference ~ Donate Now</h1>
				<button class="btn btn-primary mt-5 bg-blue-500 hover:bg-blue-300">Learn More</button>
			  </div>
			</div>
			</div>
			</div>
		  <!-- Opportunities to Serve-->
		<div class="hero h-96 bg-blue-500 text-white">
			<div class="hero-content flex-col lg:flex-row ">
				<div class="grid grid-cols-2 gap-44 justify-between">
				<img src="offering2.jpg" class="max-w-sm rounded-lg shadow-2xl h-full w-96 mr-20" />
				<div>
				<h1 class="text-5xl font-bold text-center mt-2">Join the Mission</h1>
				<p class="py-6 text-center">We're bulding something bigger than us - and we're looking for passionate, purpose-filled people to do it with. Whether you want to serve, lead, learn, or grow, there's a place for you at Chosen For More!</p>
				<ul class="text-center text-xl">
				<li class="hover:bg-transparent hover:font-semibold hover:underline hover:cursor-pointer">Employment</li>
				<li class="mt-5 hover:bg-transparent hover:font-semibold hover:underline hover:cursor-pointer">Volunteering</li>
				<li class="mt-5 hover:bg-transparent hover:font-semibold hover:underline hover:cursor-pointer">Internships</li>
				</ul>
				</div>
				</div>
			</div>
		</div>
		<!-- Contact Us-->
		<div class="hero h-72 bg-yellow-400 text-blue-800">
			<div class="hero-content text-center">
			  <div class="text-center">
				<h1 class="mb-5 text-5xl font-bold text-blue-800">Feel free to contact us for more info!</h1>
				<button class="btn btn-primary mt-5 bg-blue-500 hover:bg-blue-300">Contact Us</button>
			  </div>
			</div>
		  </div>
</div>

<footer class="bg-white text-gray-700">
	<p>Chosen For More 2025</p> <span><img src="chosenformoreNotTitle.png" alt="Logo Image" class="h-7" /></span>
</footer>

<style>

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
