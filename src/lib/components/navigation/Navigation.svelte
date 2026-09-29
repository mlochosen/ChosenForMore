<script>

import { goto } from "$app/navigation";

</script>
<nav>
  <div class="navbar bg-blue-700 text-white">
    <div class="navbar-start">
      <a class="btn btn-ghost normal-case text-xl hover:bg-yellow-200" href="/">Chosen For More</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li tabindex="0">
          <a>
            The Heart Behind It
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul class="p-2 bg-yellow-500 z-10">
            <li class="hover:bg-yellow-200"><a target="_self" href="/why_us/mission">Mission & Values</a></li>
            <li class="hover:bg-yellow-200"><a target="_self" href="/why_us/our_why">Our Why</a></li>
            <!-- <li class="hover:bg-purple-200"><a>Our Partners</a></li> -->
          </ul>
        </li>
         <li tabindex="0">
          <a>
            Program & Services
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul class="p-2 bg-yellow-500 z-10">
            <li class="hover:bg-yellow-200"><a target="_self" href="/rise_up">Rise Up</a></li>
            <li class="hover:bg-yellow-200"><a target="_self" href="/mim">More in Motion</a></li>
            <li class="hover:bg-yellow-200"><a target="_self" href="/mentorship">Lead the Way</a></li>
            <li class="hover:bg-yellow-200"><a target="_self" href="/field_trips">Next Stop: More (Field Trips)</a></li>
            <li class="hover:bg-yellow-200"><a target="_self" href="/summer_camp">Summer Camp</a></li>
            <li class="hover:bg-yellow-200"><a target="_self" href="/homeschool">More Academy (Homeschool)</a></li>
          </ul>
        </li>
        <li tabindex="0">
          <a>
            Be The Impact
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul class="p-2 bg-yellow-500 z-10">
            <li class="hover:bg-yellow-200"><a target="_self" href="/">Employment Opportunities</a></li>
            <li class="hover:bg-yellow-200"><a target="_self" href="/">Volunteer Opportunities</a></li>
            <li class="hover:bg-yellow-200"><a target="_self" href="/">Internships</a></li>
          </ul>
        </li>
         <li class="hover:bg-yellow-200"><a target="_self" href="/donate">Donate Now</a>
        </li>
         <li class="hover:bg-yellow-200"><a target="_self" href="/contact">Let's Connect</a>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="justify-between">
      <a class="btn bg-white text-yellow-600 hover:bg-yellow-300" on:click={()=> goto('item_shop')}>Store</a>
    </div>
    </div>
  </div>
  </nav>