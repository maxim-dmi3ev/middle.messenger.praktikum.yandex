import styles from './photo.module.styl';
import photoUrl from './photo.png';

export const Photo = () => {
	return (
		<div className={styles.root}>
			<div className={styles.image}>
				<img src={photoUrl} alt="Profile photo"/>
				<div className={styles.action}>Поменять аватар</div>
			</div>
			<div className={styles.caption}>Шелдон Купер</div>
		</div>
	);
};
