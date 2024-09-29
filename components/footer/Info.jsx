import InfoItem from "./InfoItem";
import email from "@/public/images/icons/email.png";
import phone from "@/public/images/icons/phone.png";
import location from "@/public/images/icons/location.png";
import whatsapp from "@/public/images/icons/whatsapp.png";
import facebook from "@/public/images/icons/facebook.png";
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
