import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="flexBetween navbar">
			<div className=" flex-1 flexStart gap-10 ">
				<Link href="/">
					<Image src="/logo.png" width={250} height={55} alt="Prototype" />
				</Link>
				<ul className="xl:flex hidden text-lg gap-7">
					{NavLinks.map((link) => (
						<Link href={link.href} key={link.key}>
							{link.text}
						</Link>
					))}
				</ul>
			</div>

			<div className="flexCenter gap-4"></div>
		</nav>
	);
};

export default Navbar;
