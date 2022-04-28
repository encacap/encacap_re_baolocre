import CustomHead from "../components/CustomHead";
import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <>
            <CustomHead title="Trang chủ" />
            <div className={styles.container} />
        </>
    );
}
