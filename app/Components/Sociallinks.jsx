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
          href: "https://www.linkedin.com/in/nitesh-ahirwar-pricnitz",
        },
    
        {
          title: "facebook",
          icon: (
            <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.facebook.com/pricnitz",
        },
        {
          title: "instagram",
          icon: (
            <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.instagram.com/pricnitz",
        },
    
        {
          title: "whatsapp",
          icon: (
            <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://api.whatsapp.com/send/?phone=+918109653732&text=Hey",
        },
    
        {
          title: "Telegram",
          icon: (
            <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://t.me/pricnitz",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://github.com/pricnitz",
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
