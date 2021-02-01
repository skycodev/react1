
import React, { Component } from "react";
import axios from 'axios'
import Global from '../Global'


class Articles extends Component {

    url = Global.url;
   
  state = {
    articles: [],
    status: null,
  };

  UNSAFE_componentWillMount() {
    this.getArticles();
  }

  getArticles = () => {
    console.log("vamos a recibir los articulos");

    axios.get(this.url+"search/primer").then((res) => {
      console.log("veces que entramos");
      this.setState({
        articles: res.data.articles,
        status: "success",
      });

      console.log(this.state);
    });
  };

  render() {
    if (this.state.articles.length >= 1) {
        let listArticles = this.state.articles.map((article)=>{
            return(
                <article key={article._id} className="article-item" id="article-template">
                        <div className="image-wrap">
                            {article.image !== null ?(
                                <img src={this.url + 'get-image/'+article.image} alt={article.title} />
                            ):( <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" alt={article.title} />)}
                           
                        </div>
    
                        <h2>{article.title}</h2>
                        {console.log(article.title)}
                        {console.log("HOLLALAAA")}
                        <span className="date">
                            {article.date}
                        
                        
                        </span>
                        <a href="#">Leer más</a>

                        <div className="clearfix"></div>
                    </article>
            );
        });
      return (
        <div id="articles">
           <h1>{listArticles}</h1>
         </div>
       );
    } else if (
      this.state.articles.length === 0 &&
      this.state.status === "success"
    ) {
      return (
        <div id="articles">
          <h1>No hay articulos para mostrar</h1>
          <p>Todavía no hay contenido en esta sección</p>
        </div>
      );
    } else {
      return (
        <div id="articles">
          <h1>Se está cargando la página....</h1>
        </div>
      );
    }
  }
}

export default Articles;
