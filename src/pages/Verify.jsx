import styles from './Verify.module.css';

export default function Verify() {
  return (
    <div className={styles.container}>
      <h1>
        Please check your email for a verification link to login.
      </h1>
      <p>
        If you have verified and are still not able to access your account,
        please contact support at admin@swiftsend.com
      </p>
    </div>
  );
}
