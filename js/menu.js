function linkMenu() {
	switch (document.location.pathname) {
		case "/index.html":
			document.getElementById("menuHome").innerHTML = '<div class="menu-links-on">Home</div>';
			break;
		case "/work.html":
			document.getElementById("menuWork").innerHTML = '<div class="menu-links-on">Work</div>';
			break;
		case "/logos.html":
			document.getElementById("menuLogos").innerHTML = '<div class="menu-links-on">Logos</div>';
			break;
		case "/about.html":
			document.getElementById("menuAbout").innerHTML = '<div class="menu-links-on">About</div>';
			break;
		case "/blog.html":
			document.getElementById("menuBlog").innerHTML = '<div class="menu-links-on">Blog</div>';
			break;
		default:
			document.getElementById("menuHome").innerHTML = '<div id="menuHome" class="menu-links-on">Home</div>';
	}
}