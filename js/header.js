const header = document.querySelector("header");
const encabezado = `
		<div class="logoYtit">
			<div class="logo">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 0C78.3 0 64 14.3 64 32v96h64V32c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32v96h64V32c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 77.4 55 142 128 156.8V480c0 17.7 14.3 32 32 32s32-14.3 32-32V412.8C297 398 352 333.4 352 256V224c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"/></svg>
			</div>
			<h1 class="titulo">LF Instalaciones Eléctricas</h1>
		</div>
		<nav class="nav-bar">
			<ul>
				<li> <a href="index.html">Home</a></li>
				<li> <a href="servicios.html">Nuestros Servicios</a></li>
				<li> <a href="consejos.html">Consejos Útiles</a></li>
				<li> <a href="contacto.html">Contactenos</a></li>
			</ul>
		</nav>
`
header.innerHTML = encabezado;