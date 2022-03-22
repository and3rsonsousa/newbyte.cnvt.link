import { Link } from "remix";
import { IconLinkType } from "~/lib/app.server";
import {
	FaTiktok as TikTok,
	FaFacebookF as Facebook,
	FaInstagram as Instagram,
} from "react-icons/fa";
import { HiOutlineMail as Email } from "react-icons/hi";

export default function Footer({ iconLinks }: { iconLinks: IconLinkType[] }) {
	return (
		<div className="footer">
			{iconLinks.map((icon, index) => (
				<IconLink {...icon} key={index} />
			))}
		</div>
	);
}

export function IconLink({
	icon,
	url,
	className = "",
	type = "external",
}: IconLinkType) {
	return type !== "external" ? (
		<Link to={url} className={`icon-link ${className}`}>
			{icons[icon]}
		</Link>
	) : (
		<a href={url} className={`icon-link ${className}`} target="_blank">
			{icons[icon]}
		</a>
	);
}

let icons = {
	tiktok: <TikTok />,
	facebook: <Facebook />,
	instagram: <Instagram />,
	email: <Email />,
};
