function linkMenu() {
	switch (document.location.pathname) {
		case "/index.html":
			document.getElementById("menuHome").innerHTML = '<div class="menu-links-on">Главная</div>';
			break;
		case "/works.html":
			document.getElementById("menuWorks").innerHTML = '<div class="menu-links-on">Работы</div>';
			break;
		case "/logos.html":
			document.getElementById("menuLogos").innerHTML = '<div class="menu-links-on">Logos</div>';
			break;
		case "/about.html":
			document.getElementById("menuAbout").innerHTML = '<div class="menu-links-on">Обо мне</div>';
			break;
		case "/blog.html":
			document.getElementById("menuBlog").innerHTML = '<div class="menu-links-on">Blog</div>';
			break;
		default:
			document.getElementById("menuHome").innerHTML = '<div class="menu-links-on">Главная</div>';
	}
}