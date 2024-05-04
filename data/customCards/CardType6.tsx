import { ICustomCard } from "@/lib/types";

const CardType6: ICustomCard = {
  title: "Card type 6",
  source: (
    <div className=" group relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-purple-600">
      <img
        alt="..."
        src="https://source.unsplash.com/JO_S6ewBqAk"
        className="w-full h-64 object-cover align-middle rounded-t-lg "
        loading="lazy"
      />
      <blockquote className="relative p-8 mb-4">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 583 95"
          className="absolute left-0 w-full block"
          style={{ height: "95px", top: "-94px" }}
        >
          <polygon
            points="-30,95 583,95 583,65"
            className="text-purple-600 fill-current"
          ></polygon>
        </svg>
        <h4 className="text-xl font-bold text-white">
          Lorem ipsum dolor, sit amet consectetur
        </h4>
        <p className="text-sm mt-2 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          doloribus rerum nam earum cupiditate, esse iure ut quaerat adipisci
          modi vitae officia fuga nesciunt labore! Ducimus aperiam doloribus
          nobis, accusamus asperiores fuga praesentium iusto quam id expedita
          commodi amet minima, accusantium at adipisci eius sed architecto
          recusandae ad animi modi!
        </p>
      </blockquote>
    </div>
  ),
};

export default CardType6;
