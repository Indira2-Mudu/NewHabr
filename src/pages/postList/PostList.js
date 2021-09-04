import React from "react";
import Header from "../../components/header/Header";
import Postcard from "../../components/postcard/Postcards";
import Footer from "../../components/footer/Footer";

class PostList extends React.Component{
	render() {
		return(
			<>
				<Header/>
				<Postcard createName="Тестов Тест"
						  createDate="12.02.2021 15:45"
						  title="ИИ соцсети Facebook принял людей на видео за приматов, компании пришлось извиниться"/>
				<Postcard createName="Тестова Теста"
						  createDate="14.02.2021 19:45"
						  title="Facebook открыла код решения CacheLib для кэширования на энергонезависимой памяти"/>
				<Footer/>
			</>
		)
	}
}
export default PostList