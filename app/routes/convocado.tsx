import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
	return {
		title: "CONVOCADO!",
	};
};

export default function Convocado() {
	return (
		<div className="p-8 bg-yellow-400 min-h-screen flex flex-col justify-between">
			<div>
				<img
					src="/hexabyte.png"
					alt="Hexabyte"
					className="w-56 mx-auto  mt-8"
				/>
			</div>
			<div>
				<div className="font-black text-4xl text-blue-600 text-center">
					<div className="text-green-600">VOCÊ FOI</div>
					CONVOCADO!
				</div>
				<div className="text-green-800 px-4 mt-4 text-center">
					Apresente-se agora mesmo no grupo dos convocados para ter
					acesso a{" "}
					<strong className="uppercase">ofertas exclusivas</strong> na
					NewByte.
				</div>
				<div className="mt-4 text-center">
					<a
						href="/grupo-whatsapp"
						className="px-6 py-3 rounded-full text-white inline-block mx-auto bg-blue-700"
					>
						GRUPO DOS CONVOCADOS
					</a>
				</div>
			</div>
			<div>
				<img
					src="/newbyte.png"
					alt="Newbyte"
					className="w-36 mx-auto mt-8"
				/>
			</div>
		</div>
	);
}
