import QRCode from "qrcode";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  text: string;
};
export default function QRCodeComponent({ text }: Props) {
  const [code, setCode] = useState("");

  useEffect(() => {
    const getQrCode = async () => {
      if (text.length > 0) {
        console.time("QR");
        const result = await QRCode.toDataURL(text, { margin: 0, scale: 10 });
        console.timeEnd("QR");
        setCode(result);
      } else {
        setCode("");
      }
    };

    getQrCode();
  }, [text]);

  if (text === "" || code === "") {
    return <></>;
  }

  return (
    <>
      <Image alt="text" src={code} width={256} height={256}></Image>
    </>
  );
}
