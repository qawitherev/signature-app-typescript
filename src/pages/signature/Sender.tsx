import { useState } from "react";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { createSign } from "../../http/Root";
import { Size, SizedBox } from "../../components/SizedBox";
import { CopyMe } from "../../utils/CopyMe";
import { getPublicKey } from "../../http/GetPublicKey";

export default function Sender() {
  /**
   * state
   * 0: original
   * 1: has sign, not copied yet
   * 2: copied, has sign
   */
  const [plainText, setPlainText] = useState<string>("");
  const [sign, setSign] = useState<string>("");
  const [isSignCopied, setIsSignCopied] = useState<boolean>(false);
  const [publickKey, setPublicKey] = useState<string>("");
  const [isPublicKeyCopied, setIsPublicKeyCopied] = useState<boolean>(false);

  function handleOnChangeTextInput(event: React.ChangeEvent<HTMLInputElement>) {
    setPlainText(event.target.value);
  }

  async function handleCreateSign() {
    if (plainText === "") {
      alert("cannot be empty");
      return;
    }
    const sign = await createSign(plainText);
    const publicKey = await getPublicKey();
    setSign(sign);
    setPublicKey(publicKey);
    setIsSignCopied(false);
  }

  function handleCopySign() {
    if (sign === "" || isSignCopied === true) {
      return;
    }
    CopyMe(sign);
    setIsSignCopied(true);
  }

  function handleCopyPublicKey() {
    if (publickKey === "" || isPublicKeyCopied === true) {
      return;
    }
    CopyMe(publickKey);
    setIsPublicKeyCopied(true);
  }

  return (
    <>
      <div>
        <p className="font-semibold text-lg pb-3">Sender side</p>
        <TextInput
          placeholderText="Enter message to be signed"
          onChange={handleOnChangeTextInput}
        />
        <div className="py-1.5"></div>
        <div className="flex justify-end">
          <Button buttonText="Get Signature" onClick={handleCreateSign} />
        </div>
        {sign !== "" ? (
          <div>
            <div className="w-full h-px bg-slate-400 my-4" />
            <p className="text-md">Digital Signature : </p>
            <p
              style={{ wordWrap: "break-word" }}
              className="font-medium text-base"
            >
              {sign}
            </p>
            <SizedBox size={Size.Medium} isHorz={false} />
            <div className="flex justify-end">
              <Button
                buttonText={isSignCopied ? "Copied" : "Copy Signature"}
                onClick={handleCopySign}
              />
            </div>
            <SizedBox size={Size.Medium} isHorz={false} />
            <p className="font-semibold text-lg">Public Key : </p>
            <SizedBox size={Size.Small} isHorz={false} />
            {publickKey}
            <SizedBox size={Size.Medium} isHorz={false} />
            <div className="flex justify-end">
              <Button
                buttonText={isPublicKeyCopied ? "Copied" : "Copy Public Key"}
                onClick={handleCopyPublicKey}
              />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
