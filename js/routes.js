//load the file
async function loadComponent(id, file) {
    const res = await fetch(`components/${file}`);
    const html = await res.text();
    document.getElementById(id).innerHTML= html;
}

loadComponent('header','header.html');
loadComponent('main','main.html');
loadComponent('footer','footer.html');

//inside main.html
loadComponent('hero-section','main-components/hero-section.html');
loadComponent('icons','main-components/icons.html');
loadComponent('featured','main-components/featured.html');
loadComponent('trending','main-components/trending.html');
loadComponent('service','main-components/services.html');
loadComponent('testemonials','main-components/testemonials.html');
loadComponent('news','main-components/news.html');
loadComponent('subscribe','main-components/subscribe.html');