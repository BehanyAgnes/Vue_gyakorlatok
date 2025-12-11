<template>
<div class="card">
<img :src="img" class="card-img" />
<h3 class="card-title">{{ title }}</h3>
<button class="btn">Részletek</button>
</div>
</template>


<script>
export default {
props: ['title', 'img']
}
</script>


<style>
.card {
border: 1px solid #ddd;
border-radius: 8px;
overflow: hidden;
padding: 10px;
text-align: center;
background: #fff;
}


.card-img {
width: 100%;
height: 180px;
object-fit: cover;
border-radius: 6px;
}


.card-title {
margin: 10px 0;
font-size: 18px;
font-weight: bold;
}


.btn {
margin-top: 8px;
background: #007bff;
color: white;
border: none;
padding: 8px 12px;
cursor: pointer;
border-radius: 4px;
width: 100%;
}


.btn:hover {
background: #0056b3;
}
</style>