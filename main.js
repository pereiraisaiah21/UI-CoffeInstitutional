import './style.css'

document.querySelector('#app').innerHTML = `
<header class="header">
<div class="header__container">
    <div class="header__logo">FrmlaBl__g</div>
    <nav class="header__nav">
        <!-- <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Recents</a></li>
            <li><a href="#">Breaking</a></li>
            <li><a href="#">Scuderia</a></li>
        </ul> -->
    </nav>
    <div class="header__buttons">
        <button class="header__button">Contact us</button>
        <button class="header__button">Spread the message</button>
    </div>
</div>
</header>

<div class="banner">
    <img src="https://th.bing.com/th/id/R.e253a86f7a8515e70d42b4f8b33f6a03?rik=7cZs741bDumCtw&pid=ImgRaw&r=0" class="banner__image" />
    <h1 class="banner__title">legendary coffe.</h1>
    <p class="banner__description"></p>
    <img src="https://th.bing.com/th/id/R.b56e61ed220c1fab11610101abb9a5ca?rik=MpaAdHdq25VWjA&pid=ImgRaw&r=0" class="banner__cup" />

</div>

<section class="welcome">   
    <h3 class="welcome__title">
    Bem-vindo a nosso website!</h3>
</section>

<section>
</section>

<section class="advantadges">
    <div class="advantadges__container">
        <div class="card">
            <h3>Produtos de Qualidade</h3>
            <p>Conheça nossa variedade de parafusos de alta qualidade para atender às suas necessidades.</p>
        </div>

        <div class="card">
            <h3>Entrega Rápida</h3>
            <p>Garantimos entrega rápida e eficiente para que você tenha os produtos quando mais precisar.</p>
        </div>
        <div class="card">
            <h3>Atendimento Personalizado</h3>
            <p>Nossa equipe está pronta para fornecer atendimento personalizado e soluções para seus projetos.</p>
        </div>

        <div class="card">
            <h3>Sustentabilidade</h3>
            <p>Comprometemo-nos com práticas sustentáveis em nossa produção e operações.</p>
        </div>
    </div>
</section>

<section class="products">
    <div class="products__container">
        <h3 class="products__title">
        Conheça nossos produtos</h3>

        <ul class="products__list">
            <li class="products__item">
                <img src="https://reviewcafe.com.br/wp-content/uploads/2020/09/tipos-degraos-de-cafe.jpg" alt="coffee" id="productImage"/>  
                <h4 class="products__name">fsdaf</h4>
            </li>
            <li class="products__item">
                <img src="https://blog.intercoffee.com.br/wp-content/uploads/2021/01/tipos-de-graos-de-cafe.jpg" alt="coffee" id="productImage"/>  
                <h4 class="products__name">fsdaf</h4>
            </li>
            <li class="products__item">
                <img src="https://th.bing.com/th/id/R.04213bf39616e5edac8fa07f832eb5c7?rik=T0jD1RY%2fks1uAg&pid=ImgRaw&r=0" alt="coffee" id="productImage"/>  
                <h4 class="products__name">fsdaf</h4>
            </li>
            <li class="products__item">
                <img src="https://th.bing.com/th/id/OIP.dRsu-g5P2kqDq4GPYwBwTQHaE8?rs=1&pid=ImgDetMain" alt="coffee" id="productImage"/>  
                <h4 class="products__name">fsdaf</h4>
            </li>
        </ul>
    </div>
</section>

<section class="store">
    <div class="store__container">
        <h3 class="store__title">
            Conheça nossa loja
        </h3>
        <p>
            Localizada no distrito de San Petesburg ocupa hoje Localizada no distrito de San Petesburg ocupa hoje Localizada no distrito de San Petesburg ocupa hoje Localizada no distrito de San Petesburg ocupa hoje.
        </p>
        <ul class="store__list">
            <li class="store__item">
                <img src="https://th.bing.com/th/id/OIP.gNiGdodNdn2Bck61_x18dAHaFi?rs=1&pid=ImgDetMain" alt="coffee" id="productImage"/>
            </li>
            <li class="store__item">
                <img src="https://th.bing.com/th/id/OIP.V9ZDi21Kwba34HAaHUrSVwHaFj?w=520&h=390&rs=1&pid=ImgDetMain"/>
            </li>
            <li class="store__item">
                <img src="https://th.bing.com/th/id/OIP.DQIC-lfTFHqKvoz_IvvX4gHaE8?w=1000&h=667&rs=1&pid=ImgDetMain" alt="coffee" id="productImage"/>
            </li>
            <li class="store__item">
                <img src="https://images.squarespace-cdn.com/content/v1/54e41777e4b00dffce332f5b/1557378092931-I5BVJSWQAL6Y4605CTNR/713A6315-2.jpg" alt="coffee" id="productImage"/>
            </li>
        </ul>
    </div>
</section>

<footer class="footer">
<p>&copy; 2024 Legendary Coffe. Todos os direitos reservados.</p>
</footer>
`

document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.querySelector('.products__container')

    function checkScroll() {
        let scrollPosition = window.innerHeight + window.scrollY
        if (scrollPosition > productsContainer.offsetTop) {
            productsContainer.classList.add('show')
            window.removeEventListener('scroll', checkScroll)
        }
    }

    window.addEventListener('scroll', checkScroll)
    checkScroll()
})

document.addEventListener('DOMContentLoaded', function () {
    const storeContainer = document.querySelector('.store__container')

    function checkScroll() {
        let scrollPosition = window.innerHeight + window.scrollY
        if (scrollPosition > storeContainer.offsetTop) {
            storeContainer.classList.add('show')
            window.removeEventListener('scroll', checkScroll)
        }
    }

    window.addEventListener('scroll', checkScroll)
    checkScroll()
})