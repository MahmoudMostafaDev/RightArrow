import InfoItem from "./InfoItem";
import email from "./icons/email.png";
import phone from "./icons/phone.png";
import location from "./icons/location.png";
import whatsapp from "./icons/whatsapp.png";
import facebook from "./icons/facebook.png";
export default function Info() {
  return (
    <ul className="mt-10 flex flex-col gap-5">
      <InfoItem img={location} data="Egypt , Alexandria" />
      <InfoItem img={phone} data="035359888" />
      <InfoItem img={email} data="rightarrow@example.com" />
      <InfoItem img={whatsapp} data="01550049592" />
      <InfoItem
        img={facebook}
        data={
          <a href="#" className="text-[#5B68C0]">
            Facebook Page
          </a>
        }
      />
    </ul>
  );
}
