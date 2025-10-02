import styles from "./signin.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Entrar na sua conta</h2>
        <p>acesse e aproveite uma experiencia segura dentro da MTA</p>

        <div className={styles.socialLogin}>
          <button className={styles.google}>
            <FcGoogle size={24} />
          </button>
          <button className={styles.facebook}>
            <FaFacebookF size={24} />
          </button>
        </div>

        <div className={styles.divider}>
          <span>Ou connect com </span>
        </div>

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' placeholder='Digite seu email' />

        <buttom className={styles.login}>Entrar</buttom>
        <p className={styles.register}>
          Não tem uma conta? <a href='#'>Cadastre-se</a>
        </p>
      </div>

      <p className={styles.terms}>
        Ao continuar, Você concorda com nossos <a href='#'>Termos de Serviço</a> e a <a href='#'>Política de Privacidade</a> da MTA e seus parceiros, em receber comunicações da MTA.
        </p>
    </div>
  );
}
