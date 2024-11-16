import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
    const news = useLoaderData(null)
    const newsDetails = (news.data[0]);
    const {image_url, title, details, category_id} = newsDetails;
    // console.log(newsDetails);
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <Header></Header>
            </header>
            <main className="grid grid-cols-12 gap-6">
                <section className="col-span-9">
                    <h2 className="font-semibold mb-4">Dragon News</h2>
                    <div className="card bg-base-100 w-full border">
                        <figure className="px-10 pt-10">
                            <img
                                src={image_url}
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${category_id}`} className="btn bg-[#D72050] text-white border-none"> <span><FaArrowLeftLong/></span> All news in this category</Link >
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;