export default function Home({ onLogout }) {
    return (
    <div className="container">
        <header>
            <h1>MindCare - Um Espaço Acolhedor</h1>
        </header>
        <main className="main">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat excepturi sequi vitae. Quos at dolor perspiciatis suscipit, non a cupiditate iure et libero eum quasi nostrum doloremque, soluta corrupti sint!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, hic ex. Eaque, quaerat? Nemo, blanditiis ad! Hic at possimus animi excepturi praesentium modi labore, omnis molestias culpa quisquam tempora. Earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est adipisci, voluptate nulla quia velit dolore enim temporibus quaerat aut quae similique rerum iste autem vero vitae non maiores praesentium dicta.

            <button onClick={onLogout}>
                Sair
            </button>
        </main>
        <footer>
            <p>Todos os direitos reservados</p>
        </footer>
    </div>

  );
}