import './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Pagina Inicial</h1>
        <Link href="/about">Ir para a página Sobre</Link>
      </main>
    </div>
  );
}