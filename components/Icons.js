import React from "react";
import {
  Phone as LucidePhone,
  ArrowUpRight as LucideArrowUpRight,
  ArrowRight as LucideArrowRight,
  Menu as LucideMenu,
  X as LucideX,
  Mail as LucideMail,
  MapPin as LucideMapPin,
  Globe as LucideGlobe,
  Check as LucideCheck,
  ChevronRight as LucideChevronRight,
} from "lucide-react";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";

export function PhoneIcon({ size = 16, className = "", ...props }) {
  return <LucidePhone size={size} className={className} strokeWidth={1.75} {...props} />;
}

export function FloatingPhoneIcon({ size = 18, className = "", ...props }) {
  return <FaPhone size={size} className={className} {...props} />;
}

export function WhatsAppIcon({ size = 20, className = "", ...props }) {
  return <FaWhatsapp size={size} className={className} {...props} />;
}

export function MenuIcon({ size = 22, className = "", ...props }) {
  return <LucideMenu size={size} className={className} strokeWidth={1.75} {...props} />;
}

export function CloseIcon({ size = 22, className = "", ...props }) {
  return <LucideX size={size} className={className} strokeWidth={1.75} {...props} />;
}

export function ArrowTiltIcon({ size = 18, className = "", ...props }) {
  return <LucideArrowUpRight size={size} className={className} strokeWidth={1.75} {...props} />;
}

export function ArrowRightIcon({ size = 14, className = "", ...props }) {
  return <LucideArrowRight size={size} className={className} strokeWidth={2} {...props} />;
}

export function MailIcon({ size = 15, className = "", ...props }) {
  return <LucideMail size={size} className={className} strokeWidth={1.75} {...props} />;
}

export function MapPinIcon({ size = 15, className = "", ...props }) {
  return <LucideMapPin size={size} className={className} strokeWidth={1.75} {...props} />;
}

export function GlobeIcon({ size = 15, className = "", ...props }) {
  return <LucideGlobe size={size} className={className} strokeWidth={1.75} {...props} />;
}

export function CheckCircleIcon({ size = 14, className = "", ...props }) {
  return <LucideCheck size={size} className={className} strokeWidth={2.2} {...props} />;
}

export function ChevronRightIcon({ size = 14, className = "", ...props }) {
  return <LucideChevronRight size={size} className={className} strokeWidth={2} {...props} />;
}
