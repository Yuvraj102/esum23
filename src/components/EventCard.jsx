const SpeakerCard = ({ content, name, title, img, desc1, eid }) => (
  <div
    className="flex items-center flex-col px-10 py-12 rounded-[20px]  w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 event-card"
    id={eid}
  >
    <img src={img} alt="speaker" className="w-[150px] object-contain p-2" />
    <div className="flex flex-row">
      <div className="flex flex-col mt-4 items-center">
        <h4 className="font-poppins font-semibold text-[30px] leading-[50px] text-white text-center">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite text-center">
          {title}
        </p>
        <p className="font-poppins font-normal italic text-[18px] leading-[24px] text-dimWhite text-center">
          {`"` + desc1 + `"`}
        </p>
        <p className="font-poppins font-normal italic text-[18px] leading-[24px] text-dimWhite text-center">
          "In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content"
        </p>
      </div>
    </div>
    {/* <p className="font-poppins text-center font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p> */}
  </div>
);

export default SpeakerCard;
