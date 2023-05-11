import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex">
      <div className="bg-white py-4 px-4 m-auto rounded-3xl w-[320px] text-center align-middle">
        <Image
          src="/image-qr-code.png"
          sizes="full"
          width={500}
          height={500}
          alt={"QR Code"}
          className="rounded-xl mb-6"
        />
        <div className="mx-3 mb-4">
          <div className="font-bold text-lg mb-3">
            <h1>Improve your front-end skills by building projects</h1>
          </div>
          <p className="text-sm">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
