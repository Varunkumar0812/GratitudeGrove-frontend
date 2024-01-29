import HomePageReason from "./reason";
import Image1 from "../../assests/enhanced-well-being.jpg";
import Image2 from "../../assests/improved-mental-health.jpg";
import Image3 from "../../assests/stress-reduction.jpg";
import Image4 from "../../assests/promotes-mindfulness.jpg";

const reasons = [
  [
    {
      title: "Enhanced Well-Being",
      image: Image1,
      content:
        "Gratitude journaling has been linked to increased overall well-being. By focusing on positive experiences and acknowledging them, individuals may experience a greater sense of lifesatisfaction.",
    },
    {
      title: "Improved Mental Health",
      image: Image2,
      content:
        "Regularly expressing gratitude has been associated with a reduction in symptoms of depression and anxiety. It can contribute to a more positive mindset and help individuals cope with life's challenges.",
    },
  ],
  [
    {
      title: "Stress Reduction",
      image: Image3,
      content:
        "Gratitude journaling has the potential to alleviate stress. Reflecting on positive aspects of life may shift the focus away from stressors, promoting a more balanced and resilient mindset.",
    },
    {
      title: "Promotes Mindfulness",
      image: Image4,
      content:
        "Gratitude journaling encourages individuals to be present and mindful of the positive elements in their lives. This mindfulness can lead to a greater appreciation of the present moment.",
    },
  ],
];

function HomePageMidSection() {
  const items = reasons;

  const renderedItems = items.map((item) => {
    return <HomePageReason item={item} />;
  });

  return (
    <div className="pt-10 lg:p-20 flex flex-wrap justify-center bg-[#FFF3E2]">
      <div className="flex justify-center items-center w-2/3 flex-wrap">
        <div className="font-semibold text-2xl sm:text-4xl mb-5">
          Why GratitudeGrove ?
        </div>
        <div className="2xl:px-40 text-center text-lg">
          Gratitude journaling is a practice that involves regularly expressing
          gratitude and appreciation for the positive aspects of life. This
          simple yet powerful habit has been associated with numerous positive
          effects on mental, emotional, and even physical well-being.
        </div>
      </div>
      <div className="m-2 sm:m-10 2xl:px-20 text-center">{renderedItems}</div>
    </div>
  );
}

export default HomePageMidSection;
