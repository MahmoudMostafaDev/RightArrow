import InfoItem from "./InfoItem";
import email from "./icons/email.png";
import phone from "./icons/phone.png";
import location from "./icons/location.png";
import whatsapp from "./icons/whatsapp.png";
export default function Grid() {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 mx-auto md:w-1/2">
      <InfoItem
        img={phone}
        title={"Call us"}
        data={["035359888", "01068606735", "01212645403"]}
      />
      <InfoItem
        img={whatsapp}
        title={"Whatsapp"}
        data={["01558885880", "01550049592"]}
      />
      <InfoItem
        img={email}
        title={"Our Email"}
        data={["rightarrow@example.com"]}
      />
      <InfoItem
        img={location}
        title={"Visit us"}
        data={["Egypt , Alexandria"]}
      />
    </div>
  );
}
