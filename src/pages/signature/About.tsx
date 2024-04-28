import { Size, SizedBox } from "../../components/SizedBox";

export function About() {
  return (
    <>
      <div className="flex flex-col text-lg font-bold">
        <p>What is a digital signature</p>
        <SizedBox size={Size.Medium} isHorz={false} />
        <p style={{ wordWrap: "break-word" }} className="font-semibold">
          A digital signature is like a high-tech security stamp for online
          documents or messages. It acts as a double check: it verifies the
          sender is who they say they are, and it ensures the content hasn't
          been tampered with along the way. It's like having a special code
          attached that proves everything is legit and hasn't been messed with.
        </p>
        <SizedBox size={Size.Large} isHorz={false}/>
        <div className="flex justify-center">
          <img
            className='w-3/4 rounded-md'
            src="https://zdblogs.zohowebstatic.com/sites/workdrive/digest/files/users/user513/How%20does%20a%20digital%20signature%20work.png"
            alt="digital_signature_pic"
          />
        </div>
        <SizedBox size={Size.Large} isHorz={false} />
        <p className='font-semibold text-md' >This software uses <code>SHA256</code> cryptic algorithm to generate digest which then is used to generate the digital signature received. </p>
      </div>
    </>
  );
}
