import React from "react";
import styles from './PostCard.module.css';

class Postcard extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props)
	}
	render() {
		return (
			<div className={styles.postCard}>
				<div className={styles.postcard}>
					<div className={styles.postcardAuthors}>
						<span className={styles.createName}>{this.props.createName}</span>
						<span className={styles.createDate}>{this.props.createDate}</span>
					</div>
					<div className={styles.postcardImg}>
						<img className={styles.postcardImg} src="https://picsum.photos/1200/200" alt=""/>
					</div>
					<div className={styles.postcardTitle}>
						<a href="#">{this.props.title}</a>
					</div>
				</div>
			</div>

		)
	}
}

export default Postcard;