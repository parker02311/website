"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import {
    Menu,
    X,
} from "lucide-react"
import { SiDiscord, SiGithub, SiKofi, SiYoutube } from "@icons-pack/react-simple-icons";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`bg-transparent fixed top-0 left-0 right-0 z-50 border mx-4 lg:mx-auto mt-4 rounded-2xl transition-all duration-300
            ${isScrolled || isMenuOpen ? "border-ctp-surface0 backdrop-blur-md max-w-6xl" : "border-transparent max-w-[70rem]"}
            `}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img className="w-8 h-8" src="/Redon-Tech-Logo-New-Transparent-Big.png" alt="Redon Tech Logo">
                        </img>
                        <span className="text-xl font-bold text-ctp-text">Redon Tech</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-ctp-subtext1 hover:text-ctp-text transition-colors">
                            Projects
                        </a>
                        <a href="#testimonials" className="text-ctp-subtext1 hover:text-ctp-text transition-colors">
                            Knowledgebase
                        </a>
                        <a href="#pricing" className="text-ctp-subtext1 hover:text-ctp-text transition-colors">
                            Support Us
                        </a>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://redon.tech/discord" target="_blank" className="me-1"><SiDiscord className="py-1 text-ctp-subtext1 hover:text-ctp-text transition-colors" /></a>
                        <a href="https://github.com/Redon-Tech" target="_blank" className="me-1"><SiGithub className="py-1 text-ctp-subtext1 hover:text-ctp-text transition-colors" /></a>
                        <a href="https://ko-fi.com/parker02311" target="_blank" className="me-1"><SiKofi className="py-1 text-ctp-subtext1 hover:text-ctp-text transition-colors" /></a>
                        <a href="https://youtube.com/@parker02311" target="_blank" className="me-1"><SiYoutube className="py-1 text-ctp-subtext1 hover:text-ctp-text transition-colors" /></a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-ctp-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-ctp-surface0">
                        <nav className="flex flex-col space-y-4 mt-4">
                            <a href="#features" className="text-ctp-subtext1 hover:text-ctp-text transition-colors">
                                Features
                            </a>
                            <a
                                href="#testimonials"
                                className="text-ctp-subtext1 hover:text-ctp-text transition-colors"
                            >
                                Testimonials
                            </a>
                            <a href="#pricing" className="text-ctp-subtext1 hover:text-ctp-text transition-colors">
                                Pricing
                            </a>
                            <a href="#contact" className="text-ctp-subtext1 hover:text-ctp-text transition-colors">
                                Contact
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}