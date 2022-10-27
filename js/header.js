const header = document.querySelector("header");
const encabezado = `
            <div class="contact-info">
                <a href="tel:+5492477465740"><i class="fa fa-phone" aria-hidden="true"></i> Tel:+54 9 2477 465740</a> 
                <a href="https://instagram.com/lrf_electricista/" target=_blank> <i class="fa fa-instagram" aria-hidden="true"></i> Instagram </a>
                <!--a href="https://www.google.com/maps/place/Chiclana+1148,+Pergamino,+Provincia+de+Buenos+Aires/@-33.8789497,-60.5709964,3a,75y,202.27h,90t/data=!3m6!1e1!3m4!1splrnHvXQk4FAYxYKMRgAxQ!2e0!7i13312!8i6656!4m5!3m4!1s0x95b9caaff3bd6e05:0x19b7ae18b8ff42ba!8m2!3d-33.8788995!4d-60.5711627" target=_blank><i class="fa-solid fa-map-location"></i> Chiclana 1148, Pergamino, Buenos Aires </a-->  
                <a href="https://wa.me/+5492477465740" target="_blank"><i class="fa-brands fa-whatsapp"></i> Whatsapp: +54 9 2477 465740 </a>
                <a href="mailto:leo_2588@hotmail.com"> <i class="fa fa-envelope" aria-hidden="true"></i> leo_2588@hotmail.com </a>
            </div>
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
