import { FloatingDock } from "../Components/ui/floating-dock";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export default function Sociallinks() {
    const links = [
        {
          title: "LinkedIn",
          icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
    
        {
          title: "facebook",
          icon: (
            <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "instagram",
          icon: (
            <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
    
        {
          title: "whatsapp",
          icon: (
            <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
    
        {
          title: "Telegram",
          icon: (
            <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
      ];
  return (
    <div>
          <FloatingDock
            mobileClassName="translate-y-20 "
            items={links}
          />
    </div>
  )
}
