import React from "react";

import styles from './Post.module.css';

class Post extends React.Component {
	render() {
		return (
			<div className={styles.block}>
				<div className={styles.posts}>
					<div>
						<div>
							<p className={styles.findP}><a href="#" className={styles.find}>finobond </a> сегодня в 18:50</p>

						</div>
					</div>
					<div>
						<a href="#" className={styles.H2}><h2>Python: конфигурация проекта без боли</h2></a>
					</div>
					<div>
						<img src="https://habrastorage.org/getpro/habr/upload_files/f62/da7/713/f62da77130ca5fc16d8e8fe1c4d6e00b.png"
							 alt="картинка" />
					</div>
					<span className={styles.span4}>
						<p>Расскажу о проделанном пути, чтобы найти идеальный, для моих целей, инструмент конфигурирования
						проекта и о создании легковесной библиотеки <a href="#" className={styles.H2}>bestconfig</a>, впитавшей в себя
						преимущества изложенных	подходов.</p>
						<p>В статье речь пойдет только о локальных способах хранения настроек, здесь не разбираются
						случаи загрузки из сети.</p>
						<p>После создания проекта рано или поздно возникает вопрос: куда записывать
						номер версии, где хранить токены, пароли, настройки, каким форматом файлов конфигурации
						воспользоваться: span .json, .yaml, .env, .cfg, .ini или просто создать config.pyи записывать туда
						переменные?</p>
						<p>Для каждого из перечисленных вариантов есть библиотека на python, приведу примеры
						самых популярных форматов.</p>
					</span>
				</div>
			</div>
		)
	}
}

export default Post;