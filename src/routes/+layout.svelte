<script lang="ts">
    import Navbar from '../lib/components/navigation/Navigation.svelte'
   import '../main.css'
</script>

<Navbar />
<div class="bg-white">
<slot></slot>
</div>