import { useState } from "react";
import Button from "../../components/Button";
import { HorizontalDivider } from "../../components/Divider";
import { SizedBox, Size } from "../../components/SizedBox";
import TextInput from "../../components/TextInput";
import { verifyMessage } from "../../http/VerifyMessage";

export default function Receiver() {
  const [data, setData] = useState<string>("");
  const [signature, setSignature] = useState<string>("");
  const [publicKey, setPublicKey] = useState<string>("");
  const [isLegit, setIsLegit] = useState<boolean>(false);
  const [state, setState] = useState<number>(0); //--> 0: initial state

  function handleOnChangeData(event: React.ChangeEvent<HTMLInputElement>) {
    setData(event.target.value);
  }

  function handleOnChangeSignature(event: React.ChangeEvent<HTMLInputElement>) {
    setSignature(event.target.value);
  }

  function handleOnChangePublicKey(event: React.ChangeEvent<HTMLInputElement>) {
    setPublicKey(event.target.value);
  }

  async function handleVerifySignature() {
    if (data === '' || signature === '') {
        alert('cannot be empty')
        return 
    }
    const res = await verifyMessage(data, signature, publicKey);
    setState(1);
    setIsLegit(res);
  }

  return (
    <>
      <div className="flex flex-col">
        <p className="font-semibold text-lg">Receiver side</p>
        <TextInput
          placeholderText="Data to be signed"
          onChange={handleOnChangeData}
        />
        <SizedBox size={Size.Small} isHorz={false} />
        <TextInput
          placeholderText="Signature"
          onChange={handleOnChangeSignature}
        />
        <SizedBox size={Size.Small} isHorz={false} />
        <TextInput
          placeholderText="Public Key (Optional)"
          onChange={handleOnChangePublicKey}
        />
        <SizedBox size={Size.Medium} isHorz={false} />
        <div className="flex justify-end">
          <Button
            buttonText="Verify Signature"
            onClick={handleVerifySignature}
          />
        </div>
        <SizedBox size={Size.Medium} isHorz={false} />
        {state === 0 ? null : (
          <div>
            <HorizontalDivider />
            <SizedBox size={Size.Medium} isHorz={false} />
            <div className="flex justify-start">
              <p className="font-medium text-base">Message is legit: </p>
              <SizedBox size={Size.Small} isHorz={true} />
              <p className="font-medium">{isLegit ? "True" : "False"}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
