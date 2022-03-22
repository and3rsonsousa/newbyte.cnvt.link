export type BackdropType = {
	className?: string | JSX.Element;
	url?: { path: string; className: string };
};
export type NameType = { title: string; className: string };
export type LogoType = {
	url?: string;
	component?: JSX.Element;
	className?: string;
};
export type HeaderType = {
	name?: NameType;
	excerpt?: string;
	logo?: LogoType;
	className?: string;
};

export type ButtonLinkType = {
	name: string;
	url: string;
	className?: string;
	type?: "link" | "download" | "external";
	primary?: true | false;
};

export type IconLinkType = {
	icon: "tiktok" | "instagram" | "facebook" | "email";
	type?: "link" | "external";
	url: string;
	className?: string;
};

export type PagesType = {
	name: string;
	url: string;
	redirect: string;
};

export type AppDataType = {
	app: { className: string; name: string };
	backdrop?: BackdropType;
	container?: { className: string };
	header: HeaderType;
	links: ButtonLinkType[];
	footer: { iconLinks: IconLinkType[] };
	pages: PagesType[];
};

export function getAppData() {
	let AppDataType: AppDataType = {
		// name  			=>	nome que ficará no <title></title>
		// className 	=>	classes aplicadas ao compomponent <App></App>
		app: {
			name: "NewByte",
			className:
				"font-light text-white antialiased bg-gradient-to-br from-brand-3 to-brand-4",
		},
		// container: { className: "" },
		// Ordem de aparição
		// LOGO | NOME | EXCERT
		header: {
			logo: {
				url: "/logo.svg",
				component: undefined,
				className: "w-52 mx-auto",
			},
			// name: {
			// 	title: "NewByte",
			// 	className: "",
			// },
			//texto que fica logo abaixo ao logo
			// excerpt: "Insira a descrição aqui",
			// className: "w-52 mx-auto",
		},
		backdrop: {
			// className: "bg-black/20",
			url: {
				path: "/backdrop.svg",
				// className: "-mr-32 -mt-56 text-brand-3 -ml-96",
				className:
					"opacity-25 scale-150 mt-16 md:scale-125 md:-mt-32 xl:-mt-96",
			},
		},
		links: [
			{
				name: "Chama no Zap",
				url: "/whatsapp",
				primary: true,
			},
			{
				name: "Entre no GRUPO DE OFERTAS",
				url: "/grupo-whatsapp",
			},
			{
				name: "Onde Estamos ( Mapa )",
				url: "/onde-estamos",
			},
			{
				name: "Fale com a Assistência Técnica ",
				url: "/whatsapp-assistencia",
			},
			{
				name: "Siga nosso Instagram",
				url: "https://instagram.com/newbyteoficial",
				type: "external",
			},
		],
		footer: {
			iconLinks: [
				{
					icon: "tiktok",
					url: "/tiktok",
				},
				{
					icon: "instagram",
					url: "/instagram",
				},
				{
					icon: "facebook",
					url: "/facebook",
				},
				{
					icon: "email",
					url: "mailto:newbyteoficial@gmail.com",
				},
			],
		},
		pages: [
			{
				name: "WhatsApp",
				redirect:
					"https://api.whatsapp.com/send/?phone=5588988434399&text&app_absent=0",
				url: "whatsapp",
			},
			{
				name: "WhatsApp da Assistência Técnica",
				redirect:
					"https://api.whatsapp.com/send/?phone=5588988749034&text&app_absent=0",
				url: "whatsapp-assistencia",
			},
			{
				name: "Entre no nosso GRUPO DE OFERTAS no WhatsApp",
				redirect: "https://chat.whatsapp.com/BttBYW2J0BRJRXo44jDZLb",
				url: "grupo-whatsapp",
			},
			{
				name: "Onde Estamos / Mapa",
				redirect: "https://goo.gl/maps/6nM3J4nL4zbpJcmr7",
				url: "onde-estamos",
			},
			{
				name: "Siga nosso Instagram",
				redirect: "https://instagram.com/newbyteoficial",
				url: "instagram",
			},
			{
				name: "Curta nosso Facebook",
				redirect: "https://facebook.com/newbyteoficial",
				url: "facebook",
			},
			{
				name: "Siga nosso TikTok",
				redirect: "https://tiktok.com/@newbyteoficial",
				url: "tiktok",
			},
		],
	};

	return AppDataType;
}
