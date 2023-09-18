import {
	FacebookIcon,
	InstagramIcon,
	MailIcon,
	MessageCircleIcon,
	Music2Icon,
} from "lucide-react";

import { type ItemType } from "~/types";
import { ButtonLink } from "./ButtonLinks";

export default function Footer({ footerLinks }: { footerLinks: ItemType[] }) {
	return (
		<div className="footer">
			{footerLinks.map((icon, index) =>
				// <IconLink icon={icon.icon} url={icon.url} key={index} />
				icon.icon ? (
					<ButtonLink
						{...icon}
						name={icons[icon.icon]}
						key={index}
						className={`icon-link`}
					/>
				) : null
			)}
		</div>
	);
}

let icons = {
	tiktok: <Music2Icon />,
	facebook: <FacebookIcon />,
	instagram: <InstagramIcon />,
	email: <MailIcon />,
	whatsapp: <MessageCircleIcon />,
};
