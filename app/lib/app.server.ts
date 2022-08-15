import { AppDataType } from "~/types";

/* 

Cor do backdrop
#1A46FF

*/

export function getAppData() {
	let AppDataType: AppDataType = {
		// name  			=>	nome que ficará no <title></title>
		// className 	=>	classes aplicadas ao compomponent <App></App>
		app: {
			name: "NewByte",
			className:
				"font-light text-white antialiased bg-gradient-to-br from-brand-2 to-brand-3 ",
		},
		container: { className: "" },
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
			file: {
				path: "/backdrop.svg",
				// className: "min-h-screen w-full",
				className:
					"opacity-10 scale-150 mt-16 md:scale-125 md:-mt-32 xl:-mt-96",
			},
		},
		links: [
			{
				name: "Chama no Zap",
				url: "whatsapp",
				type: "primary",
				redirect:
					"https://api.whatsapp.com/send/?phone=5588988434399&text&app_absent=0",
			},

			{
				name: "Encarte Produtos Gamers",
				url: "encarte-level-up-2022.pdf",
				download: true,
				type: "alternative",
			},
			{
				name: "GRUPO DE DESCONTOS EXCLUSIVOS",
				url: "grupo-whatsapp",
				redirect: "https://chat.whatsapp.com/BttBYW2J0BRJRXo44jDZLb",
			},

			{
				name: "Entre no GRUPO DE OFERTAS - CHRIS",
				url: "grupo-whatsapp-loja",
				redirect: "https://chat.whatsapp.com/BttBYW2J0BRJRXo44jDZLb",
				hidden: true,
			},
			{
				name: "Onde Estamos ( Mapa )",
				url: "onde-estamos",
				redirect: "https://goo.gl/maps/6nM3J4nL4zbpJcmr7",
			},
			{
				name: "Fale com a Assistência Técnica ",
				url: "whatsapp-assistencia",
				redirect:
					"https://api.whatsapp.com/send/?phone=5588988749034&text&app_absent=0",
			},

			{
				icon: "tiktok",
				url: "tiktok",
				footer: true,
				redirect: "https://tiktok.com/@newbyteoficial",
			},
			{
				icon: "instagram",
				url: "instagram",
				footer: true,
				redirect: "https://instagram.com/newbyteoficial",
			},
			{
				icon: "facebook",
				url: "facebook",
				footer: true,
				redirect: "https://facebook.com/newbyteoficial",
			},
			{
				icon: "email",
				url: "email",
				redirect: "mailto:newbyteoficial@gmail.com",
				footer: true,
			},
		],

		// pages: [
		// 	{
		// 		name: "WhatsApp",
		// 		redirect:
		// 			"https://api.whatsapp.com/send/?phone=5588988434399&text&app_absent=0",
		// 		url: "whatsapp",
		// 	},
		// 	{
		// 		name: "WhatsApp da Assistência Técnica",
		// 		redirect:
		// 			"https://api.whatsapp.com/send/?phone=5588988749034&text&app_absent=0",
		// 		url: "whatsapp-assistencia",
		// 	},
		// 	{
		// 		name: "Entre no nosso GRUPO DE OFERTAS no WhatsApp",
		// 		redirect: "https://chat.whatsapp.com/BttBYW2J0BRJRXo44jDZLb",
		// 		url: "grupo-whatsapp",
		// 	},
		// 	{
		// 		name: "Onde Estamos / Mapa",
		// 		redirect: "https://goo.gl/maps/6nM3J4nL4zbpJcmr7",
		// 		url: "onde-estamos",
		// 	},
		// 	{
		// 		name: "Siga nosso Instagram",
		// 		redirect: "https://instagram.com/newbyteoficial",
		// 		url: "instagram",
		// 	},
		// 	{
		// 		name: "Curta nosso Facebook",
		// 		redirect: "https://facebook.com/newbyteoficial",
		// 		url: "facebook",
		// 	},
		// 	{
		// 		name: "Siga nosso TikTok",
		// 		redirect: "https://tiktok.com/@newbyteoficial",
		// 		url: "tiktok",
		// 	},
		// ],
	};

	return AppDataType;
}
