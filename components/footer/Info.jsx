import InfoItem from "./InfoItem";
import email from "@/public/icons/email.png";
import phone from "@/public/icons/phone.png";
import location from "@/public/icons/location.png";
import whatsapp from "@/public/icons/whatsapp.png";
import facebook from "@/public/icons/facebook.png";
export default function Info() {
  return (
    <ul className="mt-10 flex flex-col gap-5">
      <InfoItem img={location} data="Egypt , Alexandria" />
      <InfoItem img={phone} data="035359888" />
      <InfoItem img={email} data="rightarrow888@gmail.com" />
      <InfoItem img={whatsapp} data="01550049592" />
      <InfoItem
        img={facebook}
        data={
          <a
            href="https://www.facebook.com/share/p/RMGkh4ebFxmpCcc7/?mibextid=qi2Omg"
            className="text-[#5B68C0]"
          >
            Facebook Page
          </a>
        }
      />
    </ul>
  );
}
