
import Slider from "./Slider";


import Sidebar from "./Sidebar";
import Articles from "./Articles";



const Blog = () => {


  return (
    <div id="blog">
      <Slider
        title="Blog de AníbalTorices anibaltorices.com"
        size="slider-small"
      />

      <div className="center">
        <div id="content">{/**LISTADO DE ARTICULOS DEL API */}
        
        <Articles />
        </div>
      </div>

      <Sidebar creaArticulo="true" />
    </div>
  );
};

export default Blog;
