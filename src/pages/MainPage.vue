<template> 
    <section class="">
		<div class="py-4 container">
			<div class="py-1 col-lg-12 col-md-8"> 
				<h2 class="fw-bold">main</h2>
				 
			</div>
		</div>
	</section>
	<Map/>
</template>

<script> 


import Map from '@/components/Map.vue';


export default {
    name: 'MainPage',
    components: { 
		Map,
    }
}
</script>